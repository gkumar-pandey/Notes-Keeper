import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loader = ({ title }) => {
  return (
    <div>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {title ? title : "Loading...."}
      </Button>
    </div>
  );
};

export default Loader;
