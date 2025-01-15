const Greeting = () => {
    function greet(name){
        return `Hello ${name}`
    }
    function date(){
        let newDate = new Date();
        newDate.getDay()
    }
        
    
  return (
    <div>
        <h1>{greet("Sujal")}</h1>
        <p>Today day : {date()}</p>
    </div>
  )
}

export default Greeting
