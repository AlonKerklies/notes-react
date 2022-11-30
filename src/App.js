 import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./WriteNote";
import NoteList from "./NoteList";
// import Tasks from "./Tasks";

function App() {
  const [textArea, setTextArea] = useState("");
  console.log(textArea);

  // const [tasks, setTasks] = useState([
  //   { title: "title1", text: textArea, noteDate: Date.now(), id: 1 },

  //   { title: "title2", text: "text inside222", noteDate: Date.now(), id: 2 },

  //   { title: "title3", text: "text inside333", noteDate: Date.now(), id: 3 },
  // ]);

  


  const currentDate = new Date();
  const [notes, setNotes] = useState([]);
  const addNoteClick = () => {
    console.log("click ad note");
    // console.log(Date.now()); 
    // console.log(
    //   currentDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    // );


    const newNoteAfterClick = {
      id: uuid(),
      title: "untitled..",
      mainMassage: textArea,
      noteDate: 
      currentDate.toLocaleString('en-US', { month: 'short', day: 'numeric'})+"Th "+currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
      // noteDate: Date.now(),
      // key: uuid()
    };

    setNotes([newNoteAfterClick, ...notes]); // מכניס את החדש לתוך רשימת הישנים
  };
 

  function ConfirmDelete() {// פונקציית אישור מחיקה
    window.confirm("“Are you sure you want to delete your note?");
  }
  


  const deleteNote = (theNoteWithThisID) => { // מוחק כפתור
    ConfirmDelete()// אישור מחיקה

    setNotes(notes.filter((note) => note.id !== theNoteWithThisID));
  };

  // const deleteTask = (id) => {
  //   console.log("delete" + id);
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  return (
    <div className="App  ">
      <div className=" container   ">
        
        <WriteNote className="WriteNote" addNoteClick={addNoteClick} textArea={textArea} setTextArea={setTextArea}/>
         
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
