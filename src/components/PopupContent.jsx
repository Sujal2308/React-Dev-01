import { createPortal } from "react-dom"

const PopupContent = ({message}) => {
  return createPortal(
    //! if the message is not empty then only the div will be displayed
   {message} && <div style={{position:"absolute",bottom:"10px",left:"0",}}>
        <h1>{message}</h1>
   </div>,
    document.getElementById("portal") //! the div will be displayed in the portal div
  )
}

export default PopupContent
