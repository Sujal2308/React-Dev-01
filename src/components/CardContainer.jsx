import Cards from "./Cards"
const CardContainer = () => {
  // this is the parent component
  return (
    <div>
        <center><h1>Card Container</h1></center>
      <div style={{display:"flex",justifyContent:"space-around" , backgroundColor:"lightblue",flexWrap:"wrap", gap:"30px"}}>
  
    <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png" // attribute
    title = "Sujal"
    age = {21}/>
    <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "Karan"
    age = {30}
    />
   <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "Amar"
    age = {22}
    />
    <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "Amar"
    age = {22}
    />
     <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "Amar"
    age = {22}
    />
     <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "Amar"
    age = {22}
    />
     <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "CHINMAY"
    age = {100}
    />
       <Cards
    image = "https://www.w3schools.com/howto/img_avatar.png"
    title = "AMAN"
    age = {10}
    />
   </div>

    </div>
   
    
  ) 
}

export default CardContainer
