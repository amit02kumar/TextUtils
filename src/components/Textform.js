import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick= ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");

    }
    const handleClearClick= ()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text cleared", "success");

    }    
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success")
    }
   
    const handleExtraSpaces=()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText]= useState("")
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'? 'white':'#0d2a43'}}>
    <h2>{props.heading}</h2>
    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#294762': 'white', color:props.mode==='dark'? 'white':'#0d2a43'}} id="myBox"></textarea>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Text Copied</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div disabled={text.length===0} className="container my-3" style={{color:props.mode==='dark'? 'white':'#0d2a43'}}>
      <h3>Your text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
