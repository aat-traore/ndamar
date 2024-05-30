import { useState } from "react";
import { FormInputs } from "../FormRegister/FormInputs";

export const Signup = () => {
  const [values, setValues] = useState({
    usernma: "",
    email: "",
    Password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "username",
      label: "username",
    },
    {
      id: 2,
      type: "text",
      name: "Email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      type: "password",
      name: "ConfirmPassword",
      placeholder: "ConfirmPassword",
      label: "confirmPassword",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
