import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Button Clicked..!!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!!","danger");
  }

  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard","primary");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed","success");
  }

  const changeclasstoJSX = () => {
    let newText = text;
    newText = newText.replace(/class/g, 'className').replace(/for/g, 'htmlFor').replace(/onclick/g, 'onClick');
    setText(newText);
    props.showAlert("JSX Conversion Complete","success");
  }

  const countWordsIgnoringEmpty = str => {
    const words = str.trim().split(/\s+/);
    const nonEmptyWordsCount = words.filter(word => word !== '').length;
    return nonEmptyWordsCount;
  }

  const countNonEmptyCharacters = str => {
    const trimmedStr = str.replace(/\s/g, '');
    const nonEmptyCharCount = trimmedStr.length;
    return nonEmptyCharCount;
  }

  const [text , setText ] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode==='light'?'black':'white'}}></textarea>
      </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={changeclasstoJSX}>Change to JSX Class</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{countWordsIgnoringEmpty(text)} words and {countNonEmptyCharacters(text)} characters.</p>
      <p>Read time : {Math.round(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length * 60)} sec</p>
      <h4>Preview : </h4>
      <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}
