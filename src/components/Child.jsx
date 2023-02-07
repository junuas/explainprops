import { useState } from "react";

function Child(props) {
  const [input, setInput] = useState("");
  const [click, setClick] = useState([]);
  const changeHandler = (e) => {
    setInput(e.target.value);
    props.onAdd(e.target.value);
  };
  const clickHandler = () => {
    setClick((prevVal) => [...prevVal, input]);
    props.onAddClick((prevVal) => [...prevVal, input]);
  };
  return (
    <div>
      <h3>Props Child</h3>
      <input onChange={changeHandler} type="text" value={input} />
      <button onClick={clickHandler}>add</button>
      {click.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Child;
