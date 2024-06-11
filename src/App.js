import React from 'react';
import GameBoard from './components/GameBoard';

const App = () => {
  return (
    <div  className='bg-customColor1 h-120' >
            <h1 className='font-bold text-center text-5xl py-20 text-stone-50 italic'>A Game for Manohar</h1>
      <GameBoard className='sm:mx-2' />
    </div>
  );
};

export default App;

