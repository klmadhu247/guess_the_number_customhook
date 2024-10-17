   
   import { useState } from "react"
   
   
   
   const useGuess=()=>
{
    const [guessedNumber,setGuessedNumber] = useState()
    const [randomNumber,setRandomNumber] = useState()
    const [message,setMessage] = useState('')
    const[showConfetti,setShowConfetti] = useState(false)
    
    const handleGenerate=()=>
    {
      const num = Math.floor(Math.random()*10)+1;
      setRandomNumber(num);
     
    }

    const handleChange =(e)=>
    {
        setGuessedNumber(e.target.value)
    }

    const handleGuess = ()=>
    {
        if(guessedNumber==randomNumber)
        {
            setMessage('Congrats you have guessed Correctly')
            setShowConfetti(true)
        }
        else if(guessedNumber<5 && guessedNumber< randomNumber)
            {
                setMessage('Your guess is low')

        }
        else if(guessedNumber<5 && guessedNumber>randomNumber)
        {
            setMessage('Your guess is wrong')
        }
        else if(guessedNumber>=5 && guessedNumber< randomNumber)
        {
            setMessage('Your guess is moderate')
        }
        else if(guessedNumber>5 && guessedNumber> randomNumber)
        {
            setMessage('Your guess is moderate')
        }
        else if(guessedNumber>7 && guessedNumber<randomNumber)
        {
            setMessage('Your guess is too High')
        }
        else if (guessedNumber==null)
        {
            setMessage('Guessed number should not be null')
        }
    }

    return {
        guessedNumber,
        randomNumber,
        message,
        showConfetti,
        handleGenerate,
        handleChange,
        handleGuess
    };
    

}
export default useGuess;