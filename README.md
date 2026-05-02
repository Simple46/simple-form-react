# Simple-React-Form
> I just built and published my first open source react form library

over the past few days, i built a lightweight form engine which is inspired by formik and react hook form 

##  💡 What it does
- Simple controlled form system using hook
- Reusable input components
- Built in validation support
- Password Srength indicator
- Fully customizable UI (Tailwinf-ready)

**Published on npm**
*https://www.npmjs.com/~simplehissa*

**Open Source on Github:**
*https://github.com/Simple46/simple-form-react*



## This project thought me:
- How form state management works under the hood
- How npm packages are structured and published
- How to design reusable React API

## installation 
use `npm install simple-react-form` to install 

## Usage
```jsx
import React, { useState } from "react";
 
import { useForm, Input, Button, ErrorText } from "simple-form-react";

const App = () => {
  const [submittedForm, setSubmittedForm] = useState("");
  const { register, handleSubmit, errors } = useForm({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email.includes("@")) {
        errors.email = "Invalid email";
      }
      return errors;
    },
    onSubmit: (data) => {
      setSubmittedForm(data.email);
      console.log(data);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {submittedForm && (
          <p className="mb-3 text-green-600"> You entered {submittedForm}</p>
        )}
        <Input
          {...register("email")}
          placeholder="email"
          className="rounded-lg mt-2 mx-2"
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Button type="submit" className="bg-blue-300 border-r-emerald-200">
          Submit
        </Button>
      </form>

    </div>
  );
};

export default App
```   

> Still improvin it - Contributions are highly welcome

**#reactjs #opensource #javascript #webdevelopment #frontend**