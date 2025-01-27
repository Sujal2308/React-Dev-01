import { useState } from "react";

const Toggle = () => {
  let [toggle, setToggle] = useState(false);
  function changeMode() {
    setToggle(() => !toggle);
  }
  let body = document.getElementById("body");
  toggle
    ? [(body.style.backgroundColor = "black"), (body.style.color = "white")]
    : [(body.style.backgroundColor = "white"), (body.style.color = "black")];
  return (
    <div>
      <h1>{toggle ? "Dark" : "Light"}</h1>
      <button onClick={changeMode}>Switch</button>
    </div>
  );
};

export default Toggle;
