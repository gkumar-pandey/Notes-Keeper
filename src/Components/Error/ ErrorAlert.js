import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ child }) => {
  return (
    <div>
      <Alert variant="danger">{child}</Alert>
    </div>
  );
};

export default ErrorAlert;
