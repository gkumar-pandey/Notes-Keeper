import React, { useState } from "react";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import RegisterForm from "./RegisterForm";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [picture, setPicture] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Mainscreen title={"Register"}>
        <RegisterForm
          email={email}
          name={name}
          password={password}
          picture={picture}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          setPicture={setPicture}
          submitHandler={submitHandler}
        />
      </Mainscreen>
    </div>
  );
};

export default RegisterPage;
