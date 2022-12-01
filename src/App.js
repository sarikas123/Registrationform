import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Registration />
    </div>
  );
}

function Registration() {
  const person = { name: "", email: "", password: "" };
  const [state, setState] = useState(person);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("register");
  }, [flag]);

  const finalData = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("");
  };

  const datasubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={finalData}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={finalData}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={finalData}
          />
          <br />

          <button onClick={datasubmit}>Save</button>
          {flag ? alert(`Hello ${state.name},registration done...`) : ""}
        </div>
      </form>
    </div>
  );
}
