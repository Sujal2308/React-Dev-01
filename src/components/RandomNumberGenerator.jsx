import {useState} from 'react'

const RandomNumberGenerator = () => {
  let [randomNumber, setRandomNumber] = useState(false)

  let generateNo = () => setRandomNumber(Math.floor(Math.random()*100))
  return (
    <>
    <h1 style={{border: "5px solid red" , padding : "20px" , display : "inline-block"}}>The Random Number is : {randomNumber}</h1>
    <button style={{fontSize :"25px" , display:"block"}} onClick={generateNo}>Generate</button>
    </>
  )
}

export default RandomNumberGenerator
