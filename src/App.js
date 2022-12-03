import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./WriteNote";
import NoteList from "./NoteList";

function App() {
  const [textArea, setTextArea] = useState("");

  const [inputText, setinputText] = useState("");

 
  function ConfirmDelete() {
    window.confirm("“Are you sure you want to delete your note?");
  }

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }

  const currentDate = new Date();

  const [notes, setNotes] = useState([]);

  const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();
    } else {
    }
    const newNoteAfterClick = {
      id: uuid(),
      title: inputText === "" ? "untiteld" : inputText,
      mainMassage: textArea,
      noteDate:
        currentDate.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
        }) +
        "Th " +
        currentDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }), 
        update: "", 
       
    };
    setTextArea("");
    setinputText("");

    setNotes([newNoteAfterClick, ...notes]); // מכניס את החדש לתוך רשימת הישנים
  };

const ChangeNoteClick = (theNoteWithThisID,mainMassage,title) => {
//Find index of specific object using findIndex method.   
let objIndex; 
 setinputText((prevShow) => !prevShow)
objIndex = notes.findIndex((obj => obj.id == theNoteWithThisID));
notes[objIndex].mainMassage = mainMassage
notes[objIndex].title = title   


 notes[objIndex].update = "Update: " +currentDate.toLocaleString("en-US", {
   month: "short", day: "numeric",}) + "Th " +
  currentDate.toLocaleString("en-US", {
  hour: "numeric", minute: "numeric",  hour12: true, })
  console.log("After update: ", notes[objIndex])
}




   // מוחק כפתור
  const deleteNote = (theNoteWithThisID) => {
    ConfirmDelete(); // אישור מחיקה
    setNotes(notes.filter((note) => note.id !== theNoteWithThisID));
  };

  return (
    <div className="App  ">
      <div className="container mt-5 ">
        <WriteNote  className="  "
          addNoteClick={addNoteClick}
          textArea={textArea}
          setTextArea={setTextArea}
          inputText={inputText}
          setinputText={setinputText}
        />

        <NoteList notes={notes} deleteNote={deleteNote} setinputText={setinputText} inputText={inputText}  setTextArea={setTextArea}  textArea={textArea}
          ChangeNoteClick={ChangeNoteClick}/>
      </div>
    </div>
  );
}
export default App;

