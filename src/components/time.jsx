import React, { useState } from "react";

const Time = () => {
    // const x =90;
    // const y = 100;
    // const z=x+y;
    // const [s,setS] = useState(10);
    // function inc(){

    //     setS(s+1);
    // }
    return(
        <div className="time">
            <h1>
                <span>
                    Hello, Time is: {new Date().toLocaleTimeString("bn-BD")}
                </span>
            </h1>
            {/* <p>Time is {z} </p>
            <p>num:{s}</p>
            <button onClick={inc}>Increment+</button> */}
        </div>
    )
}

export default Time;