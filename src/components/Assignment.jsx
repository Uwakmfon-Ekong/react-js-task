import React, { useState } from "react";

const Assignment =() =>{
    const [count, setCount] = useState(0);
    const [word, setWord] = useState("item");

  const handleIncrement = () => {
      setCount(count + 1);
      //   {count >= 1 ? setword("items"): setword("item")}
      if (count >= 1) {
          setWord("items")
      } else {
          setWord("item")
      }
  };
  return (
      <div>
        <h1>
          Cart {word}: {count}
        </h1>
        <button onClick={handleIncrement}>
          {" "}
          Cart {word}: {count}{" "}
        </button>
      </div>
  );
}
export default Assignment;
