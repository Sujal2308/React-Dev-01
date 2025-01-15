import Cards from "./Cards"
let data = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 24
    },
    {
        name: "Jack",
        age: 30
    }
]
const CardContainer = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", backgroundColor: "lightgray"}}>
        {data.map((data)=>{
            return(
                <div key={data.name}>
                <Cards name = {data.name} age = {data.age}/>
                </div>
            )
        })}
    </div>
    
  )
}

export default CardContainer
