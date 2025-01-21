const Cards = (props) => {
  return (
    <div style={{border:"2px solid black",padding:"10px",margin:"10px",backgroundColor:"lightgreen"}}>
      <img src = {props.image} width={300}/>
        <h1>Name : {props.title}</h1>
        <h2>Age : {props.age}</h2>
    </div>
  )
}

export default Cards
