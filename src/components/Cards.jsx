const Cards = ({image,title,age}) => {
  // this is the child component
  // Technically , props is an object , props = {image:"https://www.w3schools.com/howto/img_avatar.png",title:"Sujal",age:21}
  // let {image,title,age} = props;
  return (
    <div style={{border:"2px solid black",padding:"10px",margin:"10px",backgroundColor:"lightgreen"}}>
      <img src = {image} width={300}/>
        <h1>Name : {title}</h1>
        <h2>Age : {age}</h2>
    </div>
  )
}

export default Cards
