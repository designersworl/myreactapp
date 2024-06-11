import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import image1 from '../assets/example.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import PopupBox from './GameOverModal.jsx';

const cardImages = [
  image1, image2, image3,
  image4, image5, image6,
];

const createShuffledDeck = () => {
  const deck = [...cardImages, ...cardImages] // duplicate each image
    .sort(() => Math.random() - 0.5) // shuffle the deck
    .map((image, index) => ({ id: index, image, flipped: false, matched: false }));
  return deck;
};

const GameBoard = () => {
  const [deck, setDeck] = useState(createShuffledDeck());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.image === secondCard.image) {
        setDeck(prevDeck => prevDeck.map(card => {
          if (card.image === firstCard.image) {
            return { ...card, matched: true };
          }
          return card;
        }));
        setWin(true);
      }
      setShowPopup(true);
    }
  }, [secondCard]); // Include only secondCard in the dependency array

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const handleClick = (card) => {
    if (!disabled && !card.flipped) {
      if (!firstCard) {
        setDeck(prevDeck => prevDeck.map(c => c.id === card.id ? { ...c, flipped: true } : c));
        setFirstCard(card);
      } else if (!secondCard && card.id !== firstCard.id) {
        setDeck(prevDeck => prevDeck.map(c => c.id === card.id ? { ...c, flipped: true } : c));
        setSecondCard(card);
      }
    }
  };

  const resetGame = () => {
    setDeck(createShuffledDeck());
    resetTurn();
    setShowPopup(false);
    setWin(false);
  };

  return (
    <div className="game-board">
      {deck.map(card => (
        <div key={card.id} className={`card ${card.flipped ? 'flipped' : ''}`} onClick={() => handleClick(card)}>
          <div className="front" style={{ backgroundImage: `url(${card.image})` }}></div>
          <div className="back"></div>
        </div>
      ))}
      {showPopup && (
        <PopupBox 
          win={win}
          onClose={() => setShowPopup(false)}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  );
};

export default GameBoard;
