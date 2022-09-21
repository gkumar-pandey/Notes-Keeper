import axios from "axios";
import React, { useState } from "react";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import LoginForm from "./LoginForm";
import ErrorAlert from "../../Components/Error/ ErrorAlert";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/mynotes");
    } catch (err) {
      setError(err.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Mainscreen title={"Login"}>
        {error && <ErrorAlert child={error} />}
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          submitHandler={submitHandler}
          isLoading={isLoading}
          setLoading={setLoading}
          error={error}
          setError={setError}
        />
      </Mainscreen>
    </>
  );
};

export default LoginPage;
