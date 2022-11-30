import { useState } from "react";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="NoteList  m-2 ">

      <div className="note-list-header ">
      
   
      </div>

      <div className="note-pack ">
        {notes.map((note) => (
          <div className="note-in-pack  mt-2   p-3   rounded   border border-5 border-dark     "   key= {note.id} >
            <div className="note-in-pack-title      d-flex justify-content-between">
              <p className="fw-bold">{note.title}</p>

              <span className="trashIcon"  onClick={() => deleteNote(note.id)}                    >
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"  >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
            </span>



              {/* <button
                onClick={() => deleteNote(note.id)}
                type="button"
                className="btn btn-outline-dark btn-sm"
              > X </button> */}
            </div>
            <p>{note.mainMassage}</p> {/* תוכן הודעה */}
            <p className="note-date fst-italic">
              Created at: {note.noteDate}
            </p>{" "}
            {/* תאריך */}
          </div>
        ))}
      </div>
    </div>
  ); /* className="note-list-header" */
}
export default NoteList;
