import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }

    return (
        props.alert && <div className={` alert  d-flex align-items-center alert-${props.mode==='dark'?'dark':'success'}  `} role="alert">
            {Capitalize(props.alert.msg)}
            </div>
    )
}
