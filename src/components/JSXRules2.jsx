// Deeply nested Component
const JSXRules2 = (props) => {
    //! prop drilling is happening 
    //? (message)=> App -> JSXRules -> JSXRules2
  return (
    <>
    <h1 className="text-2xl font-mono">{props.title+" "+props.message}</h1>
    </>
  )
}

export default JSXRules2;
