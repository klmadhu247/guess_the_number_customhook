import React, { useState } from "react";  
import Confetti from 'react-confetti';
import useGuess from "../custom_Hook/guessHook";



function Guess_Number (){

    const {guessedNumber,randomNumber,handleGenerate,handleChange,handleGuess,showConfetti,message} = useGuess();


    
   


    return(
        <div>




<div className="flex flex-col items-center mt-3">
      <h3 className="text-4xl font-semibold text-center mt-3 mb-2">Number Guessing Game</h3>
      <h5 className="text-xl font-semibold">Click the below button to generate random number between 1 and 10</h5>
      <button onClick={handleGenerate} className="px-5 py-2 bg-blue-500 rounded-xl text-white mt-3   hover:scale-110 duration-500 hover:shadow-xl">Genereate Random Number</button>
      <input onChange={handleChange} type="number" value={guessedNumber} className="border border-gray-900 mt-4 rounded-md w-[600px] py-1  text-center"/>
      <button onClick={handleGuess} className="px-2 py-1 bg-blue-500 text-white roulded-xl mt-3 rounded-xl hover:scale-110 duration-300 hover:shadow-xl">Check Guess</button>

      <h3 className="text-xl mt-3">{showConfetti? <p className="text-green-600 animate-pulse">{message}</p>:message}</h3>

      



      

      </div>
      {showConfetti && <Confetti style={{width:window.innerWidth,height:window.innerHeight}}/>}



        </div>
    )
}
export default Guess_Number;