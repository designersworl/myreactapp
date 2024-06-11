import React from 'react';

const PopupBox = ({ win, onClose, onPlayAgain }) => {
  return (
    <div id='game-over'>
      <div className="popup-content">
        <h2>{win ? 'Congrats' : 'Game Over!'}</h2>
        <p>{win ? 'Manohar will give you a gift' : 'Sorry, you lost!'}</p>
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onClose} className='lg:ml-20 md:ml-10'>Close</button>
      </div>
    </div>
  );
};

export default PopupBox;
