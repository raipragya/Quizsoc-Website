import React, { useEffect, useState } from 'react';


function Quizroom() {
    return (
        <div className="quizroombg">
            <div className="navtop">
                <h1 className="greetings">Welcome to the Quiz Room</h1>
                <button className="leaveroombutton">Leave Room</button>
                
            </div> 
            <button className="buzzer-button">Buzzer</button>
        </div>
    );
}

export default Quizroom;
