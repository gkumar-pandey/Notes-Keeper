import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const coustemStyle = {
  navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    bottom: "0",
  },
  col: {
    textAlign: "center",
  },
};

function Footer() {
  return (
    <footer style={coustemStyle.navbar}>
      <Container className="py-2">
        <Row>
          <Col style={coustemStyle.col}>Copyright &copy; GKP</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
