// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setbtnText] = useState('Enable Dark Mode')
    // const [btnClass, setbtnClass] = useState('btn btn-primary')

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText('Enable Dark Mode')
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '0.5px solid white'
    //         })
    //         setbtnClass('btn btn-dark')
    //         setbtnText('Enable Light Mode')
    //     }
    // }


    
    return (
        <> <div className='container mt-4'>
            <div className="container-fluid py-2 my-1 " style={props.myStyle}>
                <div className=" my-3 accordion" id="accordionExample" >
                    <h1>About Us</h1>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.myStyle}>
                                What is TextUtils?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>TextUtils</strong> is a web application for analysing and manipulating<code> text</code> according to user needs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.myStyle}>
                                Dates
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Project Duration 14/10/22 - 16/11/22
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={props.myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.myStyle}>
                                Guidance
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Project is done using online content of Harry sir.
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={toggleStyle} type="button" className={btnClass} >{btnText}</button> */}
            </div>
        </div>
        </>
    )
}
