import { useState } from "react";

function WriteNote({  addNoteClick,setTextArea,textArea}) {
  const [inputText, setinputText] = useState("");
  

  const [writenoteTitle, setWritenoteTitle] = useState("Write a Note");

  //  const ClickWithParameter = (name, e) => {console.log( "this name is::: " + name ,  e.target ,e)}
  //   const handleClick = (e) => {
  //    setWritenoteTitle ('Write better Note') ;
  //   console.log( "handleClick ", e)}

  return (
    <div className="writenote  p-3 rounded mt-2 mb-2 me-2 ">
      <p className="writenoteTitle"> write note Title </p>



      <div className="noteEdit">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)
          }
          className="form-control mb-2"
          id="title"
          placeholder="Note title"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        ></input>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          className=" form-control"
          id="textbody"
          placeholder="Write your note.."
        ></textarea>
        {/* <button onClick={addNoteClick} type="button" className="btn btn-primary">Add1</button> */}
        {/* <button onClick={handleClick} type="button" className="btn btn-primary">Add2</button>
            <button onClick={(e)=> ClickWithParameter("mario", e)} type="button" className="btn btn-primary">Add3</button> */}
      
      <button
          onClick={addNoteClick}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
      
      </div>

  

    </div>
  );
}
export default WriteNote;
