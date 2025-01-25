const Greetings = () => (
  <h1 onCopy={() => alert("Event triggered")}>Hello World</h1>
);

const buttonClicker = () => alert("Button Clicked");
const Button = () => (
  <button style={{ fontSize: "25px" }} onClick={buttonClicker}>
    Click Me
  </button>
);

const Paragrapgh = () => (
  <p
    style={{
      backgroundColor: "lightblue",
      padding: "10px",
      fontSize: "20px",
      border: "7px solid red",
    }}
    onMouseOver={() => alert("Don't Move 💀")}
  >
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem tenetur
    aspernatur recusandae ad reiciendis voluptatem asperiores expedita suscipit
    consequuntur sapiente.
  </p>
);
const EventHandle = () => {
  return (
    <>
      <Greetings />
      <Button />
      <Paragrapgh />
    </>
  );
};
export default EventHandle;
