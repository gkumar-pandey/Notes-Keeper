import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mainscreen from "../../Components/MainScreen/Mainscreen";
import CardComp from "./ CardComp";
import notes from "../../Assets/Notes";
import axios from "axios";

const Mynotes = () => {
  const [Notes, setNotes] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Mainscreen title="Welcome Gautam kumar">
        <Link to="/createnote">
          <Button size="lg">Create New Note</Button>
        </Link>
        {Notes.map((note) => {
          return (
            <CardComp
              title={note.title}
              content={note.content}
              category={note.category}
              key={note._id}
            />
          );
        })}
      </Mainscreen>
    </div>
  );
};

export default Mynotes;
