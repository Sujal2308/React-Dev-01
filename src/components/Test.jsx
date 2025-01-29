import { useState, useEffect } from "react";
import { useRef } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
  const val = useRef(0);

  useEffect(() => {
        val.current = setInterval(() => {
            setCounter((prevCount) => prevCount + 1);
          }, 1000);
          
          //! Cleaner Function
          return () => {
            clearInterval(val.current);
          };
   
  },[]);

  //console.log(counter) //! in sync with counter

  //   function increment(){
  //       setCounter(counter+1) //! component rerender takes place
  //       console.log("State value: "+counter) //! always 1 render behind
  //     //   val.current = counter
  //     //   console.log(val.current)

  //   }

  const stopTimer = () =>{
    clearInterval(val.current)

  }
     
  return (
    <>
      <h1 className="text-3xl font-mono ml-20 mb-10 mt-20">
        Counter: {counter + " sec"}
      </h1>
      <button
        className="px-10 py-2 ml-20 bg-amber-400 text-2xl cursor-pointer border-3"
        onClick={stopTimer}
      >
        Stop
      </button>
    </>
  );
};

export default Test;
