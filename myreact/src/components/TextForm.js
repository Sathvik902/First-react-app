import React, { useState }from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('');


    function handleClick(){
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("converted to UpperCase","success");
    }

    function handleLo(){
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("converted to LowerCase","success");
    }

    function handleClr(){
        setText('')
        props.showalert("Text field is clear","success");

    }

    function handleOnChange(event){
        
        setText(event.target.value)
        
    }

    function revStr(){    
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showalert("Text has been reversed","success");

  }
    

    function copyToClip() {
       
        var copyText = document.getElementById("exampleFormControlTextarea1");
      
        
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showalert("Text has been copied to clipboard","success");

      }





  return (
  <>

      <div className = "container"style ={{color :props.mode ==="light"?"black":"white"}}>
          <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8"  placeholder="Enter text here" style ={{color :props.mode ==="light"?"black":"white",background :props.mode ==="dark"?"grey":"white"}} value = {text} onChange={handleOnChange}></textarea>
    </div>
        <button className = "btn btn-primary mx-3"onClick={handleClick}>Convert to Upper-Case</button>
        <button className = "btn btn-primary mx-3"onClick={handleLo}>Convert to Lower-Case</button>
        <button className = "btn btn-primary mx-3"onClick={revStr}>Reverse the string</button>
        <button className = "btn btn-primary mx-3 "onClick={copyToClip}>Copy to clipboard</button>
        <button className = "btn btn-primary mx-3"onClick={handleClr}>Clear text</button>
    </div>
    <div className='container my-3'style ={{color :props.mode ==="light"?"black":"white"}} >
     
        <h1>Preview</h1>
        <h6>{text.length>0?text:"Enter your text to preview here"}</h6>
        <h2>Your text summary</h2>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} charecters</p>
        <p>You can read this whole text in {text.length>0?0.008 *60 * text.split(" ").length:0} Seconds</p>
    </div>
    </>
  )
}
