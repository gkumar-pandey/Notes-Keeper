import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorAlert from "../../Components/Error/ ErrorAlert";
import Loader from "../../Components/Loader/Loader";

const RegisterForm = ({
  email,
  name,
  password,
  setPassword,
  setEmail,
  setName,
  confirmPassword,
  setConfirmPassword,
  submitHandler,
  message,
  loading,
  uploadImage,
  pictureUpload,
  error,
}) => {
  return (
    <div>
      {message && <ErrorAlert>{message}</ErrorAlert>}
      {error && <ErrorAlert>{error}</ErrorAlert>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        {/* for picture upload */}
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </Form.Group>
        {loading ? (
          <Loader />
        ) : (
          <>
            {pictureUpload ? (
              <Loader title={"Uploading..."} />
            ) : (
              <Button
                variant="primary"
                type="submit"
                disabled={pictureUpload ? true : false}
              >
                Register
              </Button>
            )}
          </>
        )}
      </Form>
      <div className="mt-3">
        <span>Have an Account ? </span> <Link to={"/login"}>Login here</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
