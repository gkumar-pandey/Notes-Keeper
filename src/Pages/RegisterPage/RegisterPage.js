import axios from "axios";
import React, { useState } from "react";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [picture, setPicture] = useState("");
  const [message, setMessage] = useState("");
  const [pictureUpload, setPictureUpload] = useState(false);
  const navigate = useNavigate();

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
        navigate("/login");
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  const uploadImage = (picture) => {
    if (!picture) {
      setMessage("Please Select An Image");
      return;
    }
    setMessage(null);
    setPictureUpload(true);
    if (picture.type === "image/jpeg" || picture.type === "image/png") {
      const data = new FormData();
      data.append("file", picture);
      data.append("upload_preset", "notekeeper");
      data.append("cloud_name", "dlykup1dh");
      fetch("  https://api.cloudinary.com/v1_1/dlykup1dh/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url.toString());
          setPictureUpload(false);
        })
        .catch((err) => {
          console.log(err);
          setPictureUpload(false);
        });
    } else {
      setMessage("Please Slect Image in Jpeg/png");
      setPictureUpload(false);
    }
  };

  return (
    <div>
      <Mainscreen title={"Register"}>
        <RegisterForm
          email={email}
          name={name}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          submitHandler={submitHandler}
          message={message}
          loading={loading}
          uploadImage={uploadImage}
          pictureUpload={pictureUpload}
          error={error}
        />
      </Mainscreen>
    </div>
  );
};

export default RegisterPage;
