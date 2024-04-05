import React from "react";
import useForm from "./useForm";

function Form() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [fName, setFName, resetFName] = useForm("");
  const [lName, setLName, resetLName] = useForm("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`${fName} and ${lName}`);
    resetFName();
    resetLName();
  };
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <div>
          <label>First Name </label>
          <input type="text" {...setFName} />
        </div>
        <div>
          <label>Last Name </label>
          <input type="text" {...setLName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Form;
