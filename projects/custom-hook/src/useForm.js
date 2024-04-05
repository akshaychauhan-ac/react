import { useState } from "react";

const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const resetInput = () => {
    setValue(initialValue);
  };

  const setInputValue = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };

  return [value, setInputValue, resetInput];
};

export default useForm;
