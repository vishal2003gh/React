import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","Success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","Success");
  }

  const speak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    props.showAlert("Text has been Spoken!","Success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared!","Success");
  }
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      < div className="container my-2" style={{color:props.mode === 'dark' ? 'white' : 'black'}} >
        <h2 >Enter Text Here👇</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'white' : '#e9ecef'}} id="mytext" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
      </div>
      <div className="container my-4" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}