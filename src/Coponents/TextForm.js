import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase is Clicked")
        let newText = text.toUpperCase();
        setText(newText);
       
    }
    const handleLoClick = () => {
        // console.log("UpperCase is Clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearClick = () => {
        // console.log("clearClick is Clicked")
        let newText = "";
        setText(newText)
        props.ShowAlert("Text Cleared");
    }
    const copyClick = () => {
        // console.log("copyClick is Clicked")
        // var Text = document.getElementById("myBox");
        // Text.select();
        navigator.clipboard.writeText(text);
        props.ShowAlert("text copied to clipboard");

    }

    const capitalizeClick = () => {
        let str = text.split(". ");
        let newText = str.map((arr) => (arr[0].toUpperCase() + arr.slice(1).toLowerCase()));
        str = newText.join(".").split(".");
        newText = str.map((arr) => (arr[0].toUpperCase() + arr.slice(1).toLowerCase()));
        setText(newText.join(". "))

    }
    const spaceRemoveClick = () => {
        let newText = text.split(/[ ]+/);
         setText(newText.join(" ").split(" .").join("."))

    }
    const handleOnChange = (event) => {
        // console.log("OnChange is Clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container mt-4'>

                <div>
                    <h1 className={` text-${props.mode==='dark'?'light':'primary'} `}>{props.heading}</h1>

                    <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows={10} style={{backgroundColor: props.mode==='light'?'light':'dark'}}/>
                </div>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={clearClick}>Clear Text</button>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={capitalizeClick}>Capitalize Text</button>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={copyClick}>Copy Text</button>
                <button type="button" className={` btn btn-primary mx-1 my-1 bg-${props.mode==='dark'?'dark':'primary'} `} onClick={spaceRemoveClick}>Remove Extra Space</button>

            </div>
            <div className='container mt-4  '>
                <h2 className={` text-${props.mode==='dark'?'light':'dark'} `}>Your Text Summary</h2>
                <p className={` text-${props.mode==='dark'?'light':'dark'} my-1 `} >{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
                <p className={` text-${props.mode==='dark'?'light':'dark'} my-1 `}>{0.008 * (text.length>0?text.trim().split(" ").length:0)} Minutes read </p>
                <h4 className={` text-${props.mode==='dark'?'light':'dark'}  mt-3 mb-0 `}>PREVIEW</h4>
                <p className={` text-${props.mode==='dark'?'light':'dark'} my-0 `}>{text.length>0?text:"Enter something to see it's preview here."}</p>
            </div>


        </>
    )
}
