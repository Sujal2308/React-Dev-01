import { useState } from "react"
const MainContent = () => {
  // let count = useState(0); returns an array
  let [count , setCount] = useState(0); //! destructuring the array

  //! function to decrement the value
  function decrementVal(){
    setCount(count - 1);
  }

  //! style object
  let mainAreaStyle = {
    color: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }

  //? setCount(count+1) causes rerendering of the component
  console.log("rerendered")
  return (
    //! inline styling of components
    <main style={mainAreaStyle}>
      <h1 style={{border : "6px solid red" , backgroundColor : "black" , padding : "20px", marginRight: "50px"}}>{count}</h1>
      <button style={{fontSize : "25px"}}  onClick={()=>setCount(count+1)} >Increment</button>
      <button style={{marginLeft:"20px" , fontSize : "25px"}} onClick={()=>setCount(decrementVal)}>Decrement</button>
    </main>
  )  
}

export default MainContent
