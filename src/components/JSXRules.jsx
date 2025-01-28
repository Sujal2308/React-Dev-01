
import JSXRules2 from "./JSXRules2";
const JSXRules = (props) => {
  return (
    <div className="bg-blue-400 mt-20 mx-10">
        <h1 className="primary text-4xl">JSX Rules!</h1>
        <p className="text-2xl mt-10 ml-10">
            <li>JSX must return single parent element</li>
            <li>Multi-line JSX must be wrapped in parentheses</li>
            <li>JSX elements must have closing</li>
            <li>JSX attributes are written in camelCase</li>
        </p>
        <div className="bg-amber-500 mt-20 mx-10">
          {/*No need to pass props and holding it unnecessarily */}
            <JSXRules2 />
            </div>
    </div>
  )
}
export default JSXRules;
