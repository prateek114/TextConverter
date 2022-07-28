import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')

    const clickToUpper=()=>{
        // console.log("clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted text into Uppercase Letters","success")
    }

    const clickToLower=()=>{
        // console.log("clicked")
        setText(text.toLowerCase())
        props.showAlert("Converted text into Lowercase Letters","success")
    }

    const Cleartext=()=>{
        setText('');
        props.showAlert("Clear text","success")
    }

    const Copytext=()=>{
        const text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text","success")
    }

    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra spaces","success")
    }

    const clickToChange=(event)=>{
        // console.log(event.target.value)
        setText(event.target.value)
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'dark':'white'}} value={text} onChange={clickToChange} rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={clickToUpper} >Click To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={clickToLower}>Click To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={Cleartext}>Click To Clear text</button>
        <button className="btn btn-primary mx-2" onClick={Copytext}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <p>{text.length} characters iny your text and {text.split(" ").length} words in your text</p>
        <p>{0.08*text.split(" ").length} minutes take time to read your text</p>
        <h2 className="my-3">Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
