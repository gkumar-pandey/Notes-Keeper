import React from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from "react-bootstrap";

var coustemStyle = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    margin: "10px 0",
  },
  title: {
    flex: "1",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};
const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return <div onClick={decoratedOnClick}>{children}</div>;
};

const CardComp = ({ title, content, category }) => {
  return (
    <>
      <Accordion defaultActiveKey="1">
        <Card style={coustemStyle.card}>
          <Card.Header style={coustemStyle.header}>
            <span style={coustemStyle.title}>
              <CustomToggle as={Card.Text} variant="link" eventKey="0">
                {title}
              </CustomToggle>
            </span>
            <div>
              <Button className="mx-2" variant="success">
                Edit
              </Button>
              <Button variant="danger">Delete</Button>
            </div>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h4>
                  <Badge bg="success">{category}</Badge>
                </h4>
                <p>{content}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Created on Date</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default CardComp;
