 
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import NoteList from "./NoteList";

function PopUpModal(  { noteTitle , notemainMassage, noteNoteDate ,    deleteNote ,noteid    }  ) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 ;
  
  return (
    <>
{/* --------הפתק הקטן-------------- */}

<div className="note-in-pack  mt-2 p-3 pb-0  rounded  border border-5 border-dark"   onClick={handleShow}>
<div className="note-in-pack-title  d-flex justify-content-between">
<p className="fw-bold">{noteTitle}</p>
<span className="trashIcon"  onClick={() => deleteNote(noteid)}                    >
<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"  >
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
</span>
</div>
<p>{notemainMassage}</p> {/* תוכן הודעה */}
<p className="note-date  "> Created at: {noteNoteDate} </p>{" "}
      </div>
      
      {/* <Button variant="primary" onClick={handleShow}> Launch  </Button> */}

      <Modal  className={"modal-sm"}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>

{/* --------הפתק הגדול-------------- */}

<Modal.Body  className='modalGeneral note-in-pack  p-3 rounded border border-5 border-dark'>
<div className='fw-bold note-in-pack-title  d-flex justify-content-between'>{noteTitle}
<Button   onClick={handleClose}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="black"   viewBox="0 0 14 16">
 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg> 
</Button></div>

<p>{notemainMassage}</p>  
<p  className="note-date">{noteNoteDate}</p>    
     </Modal.Body> 
            {/* <Modal.Header closeButton></Modal.Header>
            <Modal.Title></Modal.Title>
            <Modal.Body> </Modal.Body>
            <Modal.Footer>
            <Button variant="primary">Understood</Button>
            </Modal.Footer>
             */}
      </Modal>
    </>
  );
}



export default PopUpModal;
// render(<Example />);