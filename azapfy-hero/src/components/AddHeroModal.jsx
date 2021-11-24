import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import defaultImage from '../images/default_image.jpg';
import HerosContext from '../context/HerosContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};


export default function BasicModal({ props }) {

  const heroStart = {
    intelligence: 0,
    speed: 0,
    power: 0,
    strength: 0,
    durability: 0,
    combat: 0,
  }
  
  const { open, handleClose, setOpen, setDataCopy, data } = props;
  
  const { dataCopy } = useContext(HerosContext);
  const [heroImage, setHeroImage] = useState('');
  const [hero, setHero] = useState(heroStart);
  const [heroName, setHeroName] = useState('');
  
  const inputsLabel = Object.keys(dataCopy[0].powerstats);
  
  const getImage = ({ target }) => {
    const img = target.files[0];
    const url = URL.createObjectURL(img);
    setHeroImage(url);
  }
  
  const handleInputTextChange = ({target}) => {
    setHeroName(target.value)
  }

  const handlePower = ({ target }) => {
    setHero({
      ...hero,
      [target.name]: Number(target.value),
    })
  }

  const createHero = () => {
    const heroObject = {
      id: data.length + 1,
      name: heroName,
      powerstats: hero,
      images: {
        sm: heroImage,
        lg: heroImage,
      },
    }
    setDataCopy([heroObject, ...data])
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Hero
          </Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={ heroImage.length !== 0 ? heroImage : defaultImage }
              alt="default image"
            />
          </Card>
          <div className="d-flex flex-column">
            <input required type="file" id="file-input" name="image" onChange={ getImage } className="mt-2"/>
            <input required type="text" value={ heroName } name="name" onChange={ handleInputTextChange } placeholder="Write your hero's name" className="mt-2 mb-3 ms-2 d-flex align-items-center"/>
            <div className="d-flex flex-wrap container-power-box justify-content-center">
              { 
                inputsLabel.map((inputName, index) => {
                  console.log(data.length)
                  return (
                    <div
                    key={ `${inputName}-${index}` }
                    className={ index % 2 === 0 ? "d-flex justify-content-end flex-row-reverse test" : "d-flex justify-content-end test"}
                    >
                      <label htmlFor={ inputName } className="mx-2">{ inputName } </label>
                      <input
                        type="number"
                        value={ hero[inputName] }
                        onChange={ handlePower }
                        max={ 100 }
                        min={ 0}
                        name={ inputName }
                        className="input-power"
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="mt-3 btn btn-success" onClick={ createHero }>Create</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
