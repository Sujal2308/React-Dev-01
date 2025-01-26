import { useState } from "react";
import { FaCopy } from "react-icons/fa";
const Footer = () => {
  let [footerText, setFooterText] = useState("");
  let [headingText, setHeadingText] = useState("");
  let logo = <FaCopy />;

  function copyText(){
    navigator.clipboard.writeText(footerText)
    .then(()=>setHeadingText("Copied"))
    setTimeout(()=>setHeadingText(""),2000)
  }
  return (
    <footer>
     
      <input
        style={{ padding: "25px", fontSize: "23px" }}
        type="text"
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
       <h1>{headingText}</h1>
    </footer>
  );
};

export default Footer;
