import {useState,useEffect} from 'react'

const SideEffects = () => {
//   let [counter , setCounter] = useState(0)
//   let [counter2, setCounter2]=useState(0)
     let [data,setData]=useState([]);


  useEffect(async()=>{
    // console.log("Counter is updated")
        let rawData = await fetch("https://jsonplaceholder.typicode.com/users");
        let jsonData = await rawData.json();
        jsonData.length && setData(jsonData)
  },[])
 
    //! Fetching data via .then chaining
    //  useEffect(()=>{
    //     let data = "https://jsonplaceholder.typicode.com/users";
    //     fetch(data).then(obj=>obj.json().then(jsonData=>setData(jsonData)))
        
    //  })

  return (
    <>
    {/* <h1>{counter}</h1>
    <h2>{counter2}</h2> */}
    {
        data.map((person)=>{
            return(
                <div key={person.id} style={{border : "3px solid red", marginBottom: "10px"}}>
                    <h1>{person.id+" "+person.name}</h1>
                    <p>{person.email}</p>
                </div>
               
            )
        })
    }
    {/* <button onClick={()=>setCounter(counter+1)}>Increment</button>
    <button onClick={()=>setCounter2(counter2-1)}>Decrement</button> */}
    </>
  )
}

export default SideEffects;
