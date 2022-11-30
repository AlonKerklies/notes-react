 import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./WriteNote";
import NoteList from "./NoteList";
// import Tasks from "./Tasks";

function App() {
  const [textArea, setTextArea] = useState("");
  console.log(textArea);

 

  const [notes, setNotes] = useState([]);
  const addNoteClick = () => {
    console.log("click ad note");
    const newNoteAfterClick = {
      id: uuid(),
      title: "untitled..",
      mainMassage: textArea,
      noteDate: Date.now(),
      // key: uuid()
    };

    setNotes([newNoteAfterClick, ...notes]); // מכניס את החדש לתוך רשימת הישנים
  };

 

  return (
    <div className="App  ">
      <div className="container">
        <WriteNote addNoteClick={addNoteClick}
          textArea={textArea}
          setTextArea={setTextArea}
        />

        <NoteList
          notes={notes}
          // addNoteClick={addNoteClick}
 
        />

        {/* <Tasks tasks={tasks} onDelete={deleteTask} textArea={textArea}/> */}
      </div>
    </div>
  );
}

export default App;
