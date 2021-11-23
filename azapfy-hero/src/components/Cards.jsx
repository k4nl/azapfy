import React, { useContext, useState, useEffect } from 'react';

import HerosContext from '../context/HerosContext';
import './cards.css'

const Cards = () => {
  const { dataCopy, loading } = useContext(HerosContext);
  const [ numberCards, setNumberCards ] = useState({ first: 0, last: 20 });
  const [ selectedHero, setSelectedHero ] = useState({});
  const [ challengeHero, setChallengeHero ] = useState({});
  const [ increaseDisabled, setIncreaseDisabled ] = useState(false);

  const handleNumberCards = (type) => {
    const { first, last } = numberCards;
    if(type === 'increase' && dataCopy.length >= last) {
      return setNumberCards({ first: first + 20, last: last + 20 });
    }
    if (first !== 0) {
      return setNumberCards({ first: first - 20, last: last - 20 })
    }
  }

  useEffect(() => {
    if(dataCopy.length < numberCards.last) {
      return setIncreaseDisabled(true);
    }
    setIncreaseDisabled(false);
  }, [numberCards, dataCopy])

  const handleClickSelect = ({ target }) => {
    if(!target.id) {
      const hero = dataCopy.find(({ id }) => Number(target.parentNode.id) === Number(id));
      if(Object.keys(selectedHero).length === 0) {
        setSelectedHero(hero);
        target.parentNode.classList.add('selected')
      } else {
        setChallengeHero(hero);
      }
    } else {
      const hero = dataCopy.find(({ id }) => Number(target.id) === Number(id));
      if (Object.keys(selectedHero).length === 0) {
        setSelectedHero(hero);
        target.classList.add('selected')
      } else {
        setChallengeHero(hero);
      }
    }
  }

  const renderChallenge = () => {
    console.log(selectedHero.powerstats);
    console.log(challengeHero.powerstats)
  }

  const verifyBattle = (selected, challenger) => {
    const verifiedSelected = Object.keys(selected).length !== 0 ? true : false;
    const verifiedChallenger = Object.keys(challenger).length !== 0 ? true : false;
    if (verifiedSelected && verifiedChallenger) {
      renderChallenge();
    }
  }

  useEffect(() => {
    verifyBattle(selectedHero, challengeHero);
  }, [challengeHero])

  
  if(loading) return <p>Loading...</p>
  if(dataCopy.length === 0) return <p>Hero not found :(</p>
  return (
    <main className="theme.palette.background.default">
      <button onClick={ (() => handleNumberCards('decrease')) }>previous</button>
      <button disabled= { increaseDisabled } onClick={ (() => handleNumberCards('increase')) }>next</button>
      <div className="d-flex flex-wrap justify-content-around">
        {
          dataCopy.map((hero, index) => {
            while (index >= numberCards.first && index <= numberCards.last) {
              return (
                <div key={hero.id}
                  className="d-flex flex-column
                  align-items-center cards-border div-border"
                  id={ hero.id }
                  onClick={ handleClickSelect }
                >
                  <img src={hero.images.sm} alt={hero.name}/>
                  <p >{hero.name}</p>
                  <p>{hero.biography.publisher}</p>
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

export default Cards;