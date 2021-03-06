/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import HerosContext from '../context/HerosContext';
import { GrPrevious, GrNext } from 'react-icons/gr';
import CardModal from './CardModal';
import AddHeroModal from './AddHeroModal';
import './cards.css';

const HerosRow = () => {
  const { dataCopy, loading, setDataCopy, data } = useContext(HerosContext);
  const [ numberCards, setNumberCards ] = useState({ first: 0, last: 11 });
  const [ selectedHero, setSelectedHero ] = useState({});
  const [ challengeHero, setChallengeHero ] = useState({});
  const [ increaseDisabled, setIncreaseDisabled ] = useState(false);
  const [ winner, setWinner ] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const verifiedSelectedHero = Object.keys(selectedHero).length;
  const verifiedChallengeHero = Object.keys(selectedHero).length;

  const handleNumberCards = (type) => {
    const { first, last } = numberCards;
    if(type === 'increase' && dataCopy.length >= last) {
      return setNumberCards({ first: first + 12, last: last + 12 });
    }
    if (first !== 0) {
      return setNumberCards({ first: first - 12, last: last - 12 })
    }
  }

  useEffect(() => {
    if(dataCopy.length < numberCards.last) {
      return setIncreaseDisabled(true);
    }
    setIncreaseDisabled(false);
  }, [numberCards, dataCopy])

  const handleClickSelect = ({ target }) => {
    console.log(target)
    if(!target.id) {
      const hero = dataCopy.find(({ id }) => Number(target.parentNode.id) === Number(id));
      if(verifiedSelectedHero === 0) {
        setSelectedHero(hero);
        target.parentNode.classList.add('selected');
      } else {
        setChallengeHero(hero);
      }
    } else {
      const hero = dataCopy.find(({ id }) => Number(target.id) === Number(id));
      if (verifiedChallengeHero === 0) {
        setSelectedHero(hero);
        target.classList.add('selected');
      } else {
        setChallengeHero(hero);
      }
    }
  }

  const checkWinner = () => {
    const selectedTotalPower = Object.values(selectedHero.powerstats)
      .reduce((acc, curr) => acc + curr, 0);
    const challengerTotalPower = Object.values(challengeHero.powerstats)
    .reduce((acc, curr) => acc + curr, 0);

    if (selectedTotalPower > challengerTotalPower) {
      return setWinner(selectedHero.name);
    }
    if (selectedTotalPower < challengerTotalPower) {
      return setWinner(challengeHero.name);
    }
  }

  const verifyBattle = (selected, challenger) => {
    const verifiedSelected = Object.keys(selected).length !== 0 ? true : false;
    const verifiedChallenger = Object.keys(challenger).length !== 0 ? true : false;
    if (verifiedSelected && verifiedChallenger) {
      checkWinner();
    }
  }

  useEffect(() => {
    verifyBattle(selectedHero, challengeHero);
  }, [challengeHero])

  if(loading) {
    return (
      <div className="d-flex justify-content-center loading-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if(dataCopy.length === 0) return <p>Hero not found :(</p>

  return (
    <main>
      { open ? <AddHeroModal props={ {open, handleClose, setOpen, setDataCopy, data} } /> : ''}
      <div className="d-flex justify-content-between align-items-end">
        <div className="button-box">
          <button
            onClick={ handleOpen }
            className="btn btn-info button-p-n"
            >Add new hero
          </button>
        </div>
        <div className="button-box">
          <button
            onClick={ (() => handleNumberCards('decrease')) }
            className="btn btn-info button-p-n"
          >
            <GrPrevious />
          </button>
          <button
            disabled={ increaseDisabled }
            onClick={ (() => handleNumberCards('increase')) }
            className="btn btn-info button-p-n"
          >
            <GrNext />
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around mx-3">
        { winner !== '' ? <CardModal props={ { selectedHero, challengeHero, winner, open: true, setSelectedHero, setChallengeHero, setWinner, setDataCopy, data, } }/> : ''}
        {
          dataCopy.map((hero, index) => {
            while (index >= numberCards.first && index <= numberCards.last) {
              return (
                <div key={hero.id}
                  className="d-flex flex-column align-items-center
                  cards-border div-border"
                  id={ hero.id }
                  onClick={ handleClickSelect }
                >
                  <img src={hero.images.sm} alt={hero.name} className="cards-img"/>
                  <p className="mt-2 fw-bolder">{hero.name}</p>
                </div>
              )
            }
            return null;
          })
        }
      </div>
    </main>
  )
}

export default HerosRow;