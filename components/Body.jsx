import { useState } from "react";
import React from 'react'



export default function Body(){
    return(
        <>
        <div className="container">
            <div className="herotext">
                <h2>This a quiz website where you can create your quiz rooms <br/>and host different quizzes with maximum security,negligible plagiarism <br/>,has buzzers,keeps up record of your performances <br/>and rewards.</h2>
            </div>
            <div className="imageback">
                <img src="heroimage.jpg" className="image"></img>

            </div>
        </div>
        </>
    )

}