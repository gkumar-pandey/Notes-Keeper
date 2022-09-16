import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const coustemStyle = {
  container: {
    minHeight: "93vh",
  },
};
const LandingPage = () => {
  return (
    <div style={coustemStyle.container} className="landing-page-container">
      <Container>
        <Row>
          <div className="text-btn-container">
            <h2 className="title">Welcome to note keeper</h2>
            <p className="sub-title">safe place where you take your notes</p>
            <div className="btn-container">
              <Link to={"/login"}>
                <Button variant="primary" className="landing-btn" size="lg">
                  LogIn
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  variant="outline-success"
                  className="landing-btn"
                  size="lg"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
