import axios from "axios";
import React, { useEffect, useState } from "react";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../Store/Actions/userActions";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);
  const [picture, setPicture] = useState("");
  const [message, setMessage] = useState("");
  const [pictureUpload, setPictureUpload] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegistration = useSelector((state) => state.userRegistration);
  const { loading, error, userInfo } = userRegistration;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords Do Not Match");
    } else {
      dispatch(registration(name, email, password, picture));
      setMessage(null);
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
