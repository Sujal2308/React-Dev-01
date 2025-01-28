// Deeply nested Component
import { Data } from "../App";
import { Data2 } from "../App";
const JSXRules2 = () => {
    //! prop drilling is ignored
    //? (message)=> App -> JSXRules2
    //! Still No so efficient if we have multiple data to pass
    //! from parent to nested child we have to create more
    //! <Data.consumer> & <Data.provider> and wrapped one on another 
  return (
    <>
    <Data.Consumer>
    {(data)=>{
        return (
            <Data2.Consumer>
                {(age)=><h1>{"My name is "+data+" & I'm "+age}</h1>}
            </Data2.Consumer>
        )
    }}
    </Data.Consumer>
    
    </>
  )
}

export default JSXRules2;
