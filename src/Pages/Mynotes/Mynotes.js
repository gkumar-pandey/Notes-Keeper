import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import CardComp from "./ CardComp";
import notes from "../../Assets/Notes";

const Mynotes = () => {
  return (
    <div>
      <Mainscreen title="Welcome Gautam kumar">
        <Link to="/createnote">
          <Button size="lg">Create New Note</Button>
        </Link>
        {notes.map((note) => {
          return (
            <CardComp
              title={note.title}
              content={note.content}
              category={note.category}
            />
          );
        })}
      </Mainscreen>
    </div>
  );
};

export default Mynotes;
