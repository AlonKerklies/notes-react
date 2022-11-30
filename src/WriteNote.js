import { useState } from "react";

function WriteNote({  addNoteClick,setTextArea,textArea}) {
  const [inputText, setinputText] = useState("");
  

  const [writenoteTitle, setWritenoteTitle] = useState("Write a Note");

  //  const ClickWithParameter = (name, e) => {console.log( "this name is::: " + name ,  e.target ,e)}
  //   const handleClick = (e) => {
  //    setWritenoteTitle ('Write better Note') ;
  //   console.log( "handleClick ", e)}

  return (
    <div className="writenote  p-3 rounded mt-2 mb-2 me-2 border border-5 border-dark">
      <p className="writenoteTitle fw-bold"> My Notes </p>



      <div className="noteEdit">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)
          }
          className="form-control mb-2 border  border-3 border-dark"
          id="title"
          placeholder="Note title"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        ></input>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          className=" form-control mb-5 border  border-3 border-dark"
          id="textbody"
          placeholder="Write your note.."
        ></textarea>
   
      
      <button
          onClick={addNoteClick}
          type="button"
          className="btn btn-dark  btn-block"
        >
          Add
        </button>
      
      </div>

  

    </div>
  );
}
export default WriteNote;
