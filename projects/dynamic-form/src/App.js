import { useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, object]);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      <form style={{ marginTop: "100px" }}>
        {formFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(event, index)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(event) => handleFormChange(event, index)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
