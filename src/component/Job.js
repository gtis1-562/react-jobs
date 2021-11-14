import React from 'react'
// How do we pass our props in
export default function Job({props}) {

    // const applyNow = () => {
        // window.open(props.applicationLink)
    //     // How can you open a new window with the link to job applicayion?
    // }


    return (
        <div className="job-tile">
        <div className="top">
            {/* Replace the image and spans with the corresponding job values! */}
            <img src= {props.logo} alt=""/>
            <span id="company" className="material-icons more_horiz">{props.company}</span>
        </div>
        <div className="rolename">
            <span>{props.roleName}</span>
        </div>
        <div className="description">
            <span>{props.requirements.description}</span>
        </div>
        <div className="buttons">
            <div className="button apply-now" onClick = {() => window.open(props.applicationLink)}>
                Apply Now
            </div>
            <div className="button">
                Message
            </div>
        </div>                
    </div>
    )
}
