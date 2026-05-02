import { useState } from "react";

export function useForm({ initialValues = {}, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function register(name) {
    return {
      name,
      value: values[name] || "",
      onChange: (e) => {
        setValues((prev) => ({
          ...prev,
          [name]: e.target.value,
        }));
      },
    };
  }

  function setValue(name, value) {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function reset() {
    setValue(initialValues);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
      setValues(initialValues);
      setErrors({});
    }
  }

  return {
    values,
    errors,
    register,
    setValue,
    handleSubmit,
    reset,
  };
}
