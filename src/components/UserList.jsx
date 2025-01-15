
const UserList = () => {
    let users = [
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
  return (
   <>
    {/*Displaying array items via map or Rendering lists via map*/}
   {
    users.map(({name,age})=>{
        return(
            //! key is used to uniquely identify each element
           <h2 key={name}>
            <li>{age}</li>
            <li>{name}</li>
           </h2>
        )
    })
   }
   {/*Filtering the users with age greater than 24 , we know
   that filter returns filtered array so apply map on that to display filtered content */}
   {
    users.filter((user)=>user.age>24).map(({name,age})=>(
        <h2 key={name}>
            <li>{age}</li>
            <li>{name}</li>
        </h2>

    ))
   }
   </>
  )
}

export default UserList
