import React from "react";
import "./Mainscreen.css";
import { Container, Row } from "react-bootstrap";

function Mainscreen({ title, children }) {
  return (
    <div className="main-container">
      <Container>
        <Row>
          <div className="main-page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Mainscreen;
