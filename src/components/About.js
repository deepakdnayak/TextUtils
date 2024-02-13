import React from 'react'

export default function About(props) {

    //{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode==='light'?'black':'white'}
    let myStyle = {};
    if(props.mode==='dark') {
        myStyle = {
            color: 'white',
            backgroundColor: '#212529'
        }
    }
    else {
        myStyle = {
            color: '#212529',
            backgroundColor: 'white'
        }
    }

  return (
    <div className="container p-3" style={myStyle}>
        <h2 className='my-3' style={{fontSize: '50px'}}>Features of TextUtils</h2>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Convert to Upper Case</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This feature in text processing simply transforms all uppercase characters in a given text to their corresponding lowercase counterparts. This is commonly used to ensure uniformity and ease of processing, as it disregards the distinction between uppercase and lowercase letters.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Convert to Lower Case</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This feature in text processing converts all lowercase characters in a given text to their corresponding uppercase counterparts. This is often used for consistency and emphasis, disregarding the distinction between lowercase and uppercase letters.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>Remove Extra Spaces</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This feature in text processing eliminates additional whitespace between words within a provided string. This ensures a cleaner and more compact representation of the text, enhancing readability and facilitating further analysis or processing. For example, "Hello world" becomes "Hello world"                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <b>Convert to JSX</b>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                A "convert HTML keywords" feature in text processing transforms specific HTML attributes, such as "class" and "for", into their JSX equivalents, "className" and "htmlFor", respectively, within a given string. This ensures compatibility between HTML and JSX syntax, facilitating seamless integration and rendering in React applications. 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
