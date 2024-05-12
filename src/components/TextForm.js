import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("UpperCase was clicked" + text);
        let newtext = text.toUpperCase();
        
        setText(newtext)
        props.showAlert("converted to uppercase","success");
    }

    const handleLoClick = ()=> {
        // console.log("LowerCase was clicked" + text);
        let newtext = text.toLowerCase();
        
        setText(newtext)
        props.showAlert("converted to lowercase","success");
    }

    const handleclearClick = ()=> {
        // console.log("LowerCase was clicked" + text);
        let newtext = '';
        
        setText(newtext)
        props.showAlert("Text clear","success");
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("copy to clipboard","success");
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed","success");
    }

    const handleOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    // text = "new text" Wrong way to do it
    // setText("new text");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1 className='mb-3'>{props.heading}</h1>
          <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example text area</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes read</p>
            <h2>Preview Summary</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
  )
}
