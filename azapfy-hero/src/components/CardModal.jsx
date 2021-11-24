import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PowerStatsCompare from './PowerStatsCompare';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  textAlign: 'center',
};

const cardBox = {
  display: 'flex',
  justifyContent: 'space-around',
  mt: 4,
  height: 300,
}

export default function CardModal({ props }) {
  const {
    challengeHero,
    selectedHero,
    winner,
    setSelectedHero,
    setChallengeHero,
    setWinner,
    setDataCopy,
    data,
  } = props;

  const [openModal, setOpenModal] = useState(props.open);

  const handleClose = () => setOpenModal(false);

  const verifyData = Object.keys(challengeHero).length;
  const powerstatsChallenge = Object.entries(challengeHero.powerstats);
  const powerstatsSelected = Object.entries(selectedHero.powerstats);

  const verifyPowerCombat = () => {
    let challengeResult = [];
    let selectedResult = [];
    for (let i = 0; i < powerstatsChallenge.length; i += 1) {
      if (Number(powerstatsSelected[i][1]) > Number(powerstatsChallenge[i][1])) {
        selectedResult.push('green')
        challengeResult.push('red')
      }
      if (Number(powerstatsSelected[i][1]) < Number(powerstatsChallenge[i][1])) {
        selectedResult.push('red')
        challengeResult.push('green')
      }
      if (Number(powerstatsSelected[i][1]) === Number(powerstatsChallenge[i][1])) {
        challengeResult.push('black')
        selectedResult.push('black')
      }
    }
    return { challengeResult, selectedResult }
  }

  return (
    <div>
      <Modal
        open={openModal}
        onClose={ (() => {
          handleClose();
          setSelectedHero({});
          setChallengeHero({});
          setWinner('');
          setDataCopy(data);
          window.location.reload();
        })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
          >
            { `Winner: ${ winner }`}
          </Typography>
          {verifyData > 0 ?
            <Box sx={cardBox}> 
                <PowerStatsCompare
                  props={ {
                    powers:powerstatsSelected,
                    data: selectedHero,
                    results: verifyPowerCombat().selectedResult,
                  }}
                />
                <PowerStatsCompare
                  props={ {
                    powers:powerstatsChallenge,
                    data: challengeHero,
                    ch: true,
                    results: verifyPowerCombat().challengeResult,
                  }}
                />
            </Box>
          : ''}
        </Box>
      </Modal>
    </div>
  );
}
