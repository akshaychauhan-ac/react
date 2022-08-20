import { useState } from "react";
import "./App.css";

function App() {
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [success, setSuccess] = useState(false);
  const validateEmail = () => {
    const email = document.forms[0].email.value;

    setValidEmail(email && email.includes("@") && email.includes("."));
  };
  const validatePassword = () => {
    setValidPassword(document.forms[0].password.value.length >= 6);
  };
  return (
    <div className="App" style={{ position: "fixed", top: "30%", left: "40%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSuccess(
            !!document.forms[0].email.value &&
              !!document.forms[0].password.value.length &&
              validEmail &&
              validPassword
          );
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            width: "200px",
            marginBottom: "10px",
          }}
        >
          <label>Email</label>
          <input type="text" name="email" onBlur={validateEmail}></input>
          {!validEmail && <div>Enter a valid email.</div>}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            width: "200px",
            marginBottom: "10px",
          }}
        >
          <label>Password</label>
          <input
            type="password"
            name="password"
            onBlur={validatePassword}
          ></input>
          {!validPassword && (
            <div>Password should be of 6 or more characters.</div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            width: "200px",
          }}
        >
          <div>
            <input type="submit"></input>
            {success && <div>User successfully logged in.</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
