import { useState } from "react";

function NoteList({ notes, addNoteClick  }) {
  return (
    <div className="NoteList  m-2 ">

      <div className="note-list-header ">
      
        {/* <button
          onClick={addNoteClick}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button> */}
      </div>

      <div className="note-pack ">
        {notes.map((note) => (
          <div className="note-in-pack  mt-2   p-3   rounded"   key= {note.id} >
            <div className="note-in-pack-title      d-flex justify-content-between">
              <p className="fw-bold">{note.title}</p>

              
            </div>
            <p>{note.mainMassage}</p> {/* תוכן הודעה */}
            <p className="note-date fst-italic">
              Created Date: {note.noteDate}
            </p>{" "}
            {/* תאריך */}
          </div>
        ))}
      </div>
    </div>
  ); /* className="note-list-header" */
}
export default NoteList;
