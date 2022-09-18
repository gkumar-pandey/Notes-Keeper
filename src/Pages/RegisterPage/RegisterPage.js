import axios from "axios";
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
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords Do Not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          {
            name,
            email,
            password,
            picture,
          },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
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
          message={message}
          loading={loading}
        />
      </Mainscreen>
    </div>
  );
};

export default RegisterPage;
