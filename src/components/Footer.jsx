import { useState } from "react";
import PopupContent from "./PopupContent";
const Footer = () => {
  let [footerText, setFooterText] = useState("");
  let [headingText, setHeadingText] = useState("");

 
  //* function to copy the text
  function copyText(){
    navigator.clipboard.writeText(footerText)
    .then(()=>setHeadingText("Copied")) //! if the text is copied successfully
    setTimeout(()=>setHeadingText(""),5000) //! after 2 seconds the text will be removed
  }
  return (
    <footer>
     
      <input
        style={{ padding: "25px", fontSize: "23px" }}
        type="text"
        placeholder="Enter the text"
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
      />
      <button
        style={{ padding: "25px", fontSize: "23px" }}
        onClick={() => setHeadingText("Hello" + " " + footerText)}
      >
        Submit
      </button>
      <button
        style={{ padding: "25px", fontSize: "23px" }}
        onClick={() => setFooterText("")}
      >
        Reset
      </button>
      <button
        style={{ padding: "25px", fontSize: "23px" }}
        onClick= {copyText}
      >Copy</button>
       <PopupContent message = {headingText}/>
    </footer>
  );
};

export default Footer;
