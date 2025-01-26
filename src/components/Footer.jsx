import { useState } from "react";
const Footer = () => {
  let [footerText, setFooterText] = useState("");
  function updateText(e){
    footerText = e.target.value;
  }
  return (
    <footer>
      <h1>{footerText}</h1>
      <input
        style={{ padding: "25px", fontSize: "23px" }}
        type="text"
        onChange={updateText}
      />
      <button
        style={{ padding: "25px", fontSize: "23px" }}
        onClick={() => setFooterText("Hello"+" "+footerText)}
      >
        Submit
      </button>
    </footer>
  );
};

export default Footer;
