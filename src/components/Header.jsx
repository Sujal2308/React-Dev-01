import { useState } from "react";
const Header = () =>{
    let [students, setStudents] = useState([
      { name: "John", age: 20 },
      { name: "Doe", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Alex", age: 35 },
    ]);
    let buttonStyle = {fontSize: "25px",marginLeft:"20px"}
    function filterData(){
       setStudents(students.filter((data)=>data.age!=20))
    }

    let addData =() =>{
        setStudents([...students,{name : "Sujal", age : 20}])
    }

    let updateData = () =>setStudents(students.map((data)=>data.age===20?{name : data.name, age : 25}:data))
    return(
        <>
        <div style={{border : "6px solid red" , backgroundColor : "royalblue" , padding : "20px", margin: "20px"}}>
        {
            students.map((data)=>{
                return (
                  <h1 key={Math.random()}>
                    Name: {data.name} , Age: {data.age}
                  </h1>
                );
            })
        }
        </div>
        <button style={{fontSize : "25px"}} onClick={()=>setStudents([])}>Delete</button>
        <button style={buttonStyle} onClick = {filterData}>Filter</button>
        <button style={buttonStyle} onClick={addData}>Add</button>
        <button style={buttonStyle} onClick = {updateData}>Update</button>
        </>
    )
   
        
    
}
export default Header;
