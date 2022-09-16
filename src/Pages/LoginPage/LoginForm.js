import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  submitHandler,
  error,
  setError,
  isLoading,
  setLoading,
}) => {
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
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
        {isLoading ? (
          <Loader />
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
      <div className="mt-3">
        <span>Don't Have Account ? </span>{" "}
        <Link to={"/register"}>Register here</Link>
      </div>
    </>
  );
};

export default LoginForm;
