 import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./WriteNote";
import NoteList from "./NoteList";
// import Tasks from "./Tasks";

function App() {

  const [textArea, setTextArea] = useState("");
  console.log(textArea);

 const [inputText, setinputText] = useState("");
   console.log(inputText);

  function ConfirmDelete() {// פונקציית אישור מחיקה
    window.confirm("“Are you sure you want to delete your note?");
  }
  
 function NoTextNote() {// שגיאה אין טקסט בבחירה
  window.confirm("note’s text is mandatory");
 }
  



  const currentDate = new Date();
  const [notes, setNotes] = useState([]);
  const addNoteClick = () => {
    console.log("click ad note");
    console.log(textArea);
    if (textArea.trim() === "" ) { return NoTextNote()   } else { console.log("there is text"); }
    const newNoteAfterClick = {
      id: uuid(),
      title: (inputText === "") ?  "untiteld" : inputText  ,
      mainMassage:    textArea  ,
      noteDate: 
      currentDate.toLocaleString('en-US', { month: 'short', day: 'numeric'})+"Th "+currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})
      // noteDate: Date.now(),
      // key: uuid()
    };

    setNotes([newNoteAfterClick, ...notes]); // מכניס את החדש לתוך רשימת הישנים
  };
 



  const deleteNote = (theNoteWithThisID) => { // מוחק כפתור
    ConfirmDelete()// אישור מחיקה
    setNotes(notes.filter((note) => note.id !== theNoteWithThisID));
  };



  return (
    <div className="App  ">

        <div className="container ">

         <WriteNote  
        addNoteClick={addNoteClick}
        textArea={textArea} setTextArea={setTextArea}
        inputText={inputText} setinputText={setinputText}/>
        
           


        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;





  // const deleteTask = (id) => {
  //   console.log("delete" + id);
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };




  // const [tasks, setTasks] = useState([
  //   { title: "title1", text: textArea, noteDate: Date.now(), id: 1 },

  //   { title: "title2", text: "text inside222", noteDate: Date.now(), id: 2 },

  //   { title: "title3", text: "text inside333", noteDate: Date.now(), id: 3 },
  // ]);
