import { useState } from "react";
import PopUpModal from "./PopUpModal";




function NoteList({ notes, deleteNote, newNoteAfterClick }) {
 
 
  return (
    <div className="NoteList  m-2 ">

      <div className="note-pack ">
        {notes.map((note) => (
          
          <div className="">
               <PopUpModal  className="PopUpModal"
               notemainMassage={note.mainMassage}
               noteTitle={note.title}
                noteNoteDate={note.noteDate}
                deleteNote={deleteNote  }
                noteid={note.id}  /> 
          </div>

          
        ))}

        
      </div>
    </div>
  ); /* className="note-list-header" */
}
export default NoteList;
