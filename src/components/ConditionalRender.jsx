const ValidPassword = () =><h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const ConditionalRender = ({cart})=>{
    
    //! Conditional rendering using if-else
    // if(isValid){
    //     return <ValidPassword/>
    // }
    // else{
    //     return <InvalidPassword/>
    // }

    //! Conditional rendering using ternary operator
    // return cart.length < 0 ? (
    //     <h1>Your Cart contains: {cart.map((data) => data + " ")} Quantity: {cart.length}</h1>
    // ) : (
    //     <h1>Your Cart is empty</h1>
    // );

    //! Conditional rendering using && operator
    return cart.length>0 && <h1>Your Cart contains : {cart.map((data)=>{
        return(
            <p key={Math.random()}>{data}</p>
        )
    })}, Quantity : {cart.length}</h1>
} 

export default ConditionalRender;
