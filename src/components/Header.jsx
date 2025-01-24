const Header = () =>{
    let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    let d = new Date().getDay(); // get current day in numbers (0 to 6)
    let time = new Date().toLocaleTimeString(); // get current time
    return(

        <header>
            <h1>Today is : {days[d]}</h1>
            <h2>Time : {time}</h2>
        </header>

    )
        
    
}
export default Header;
