import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Clicked Up. Case")
        let newText=text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to Upper Case","success")
       //setText(text.toUpperCase());
    }
    const handleOnChange=(event)=>{
        //console.log("Clicked On Change")
        setText(event.target.value)
    }

    const handleLowClick=()=>{
        //console.log("Clicked Up. Case")
        let newText=text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to Lower Case","success")
       //setText(text.toUpperCase());
    }

    const handleClearText=()=>{
        //console.log("Clicked Up. Case")
        let newText=("");
       setText(newText)
       props.showAlert("Text Cleared","success")
       //setText(text.toUpperCase());
    }

    const handleCopyClick=()=>{
        //console.log("Clicked Up. Case")
        let text=document.getElementById("myBox");
        text.select()
       navigator.clipboard.writeText(text.value)
       document.getSelection().removeAllRanges();
       props.showAlert("Copied to clipboard","success")
       //setText(text.toUpperCase());
    }

    const handleExtraSpaces=()=>{
        //console.log("Clicked Up. Case")
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")
       //setText(text.toUpperCase());
    }



    const [text,setText]=useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} chracters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to preview,first enter something"}</p>
    </div>
    </>
  )
}
