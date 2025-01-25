import { useState } from "react";

const Greeting = () => {
  const [students, setStudents] = useState([
    "John",
    "Doe",
    "Jane",
    "Doe",
    "Alex",
    "Doe",
    "Doe",
  ]);
  let buttonStyle = {fontSize: "25px",marginLeft:"20px"}

  function updateStudent(){
    setStudents(students.map((names)=>{
      return names == "Doe" ?"Sujal" : names
    }))
  }
  return (
    <>
      {students.map((names) => {
        return <h1 key={Math.random()}>{names}</h1>;
      })}

      <button
      style={{fontSize: "25px"}}
      onClick={() => setStudents([])}>
        Remove
      </button>

      <button
      style={buttonStyle}
      onClick={() => setStudents([...students, "Tushar", "Rani"])}>
        Add
      </button>

      <button
       style={buttonStyle}
       onClick = {()=>setStudents(students.filter((names)=>{
        return names !== "Doe"
       }))}
       >Filter
      </button>

      <button
      style={buttonStyle}
      onClick = {updateStudent}
      >
        
        Update</button>


    </>
  );
};

export default Greeting;
