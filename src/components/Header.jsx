const Header = () =>{
    let dates = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    let d = new Date().getDay();
    return(
        <header>
            <h1>Today is : {dates[d]}</h1>
        </header>
    )
}
export default Header;
