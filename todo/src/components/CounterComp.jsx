import React from "react";

import { useState } from "react";

const CounterComp = () =>{

    const [count, setCount] = useState("1");
    
    
    
   
    return(
        <div>
            
            <p>Count component - {count}</p>
            <h6>The number is {count%2==0 ?"even":"odd"}</h6>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* <button onClick={() => setValue("Isha Tiwari")}>Change</button> */}
        </div>
    );
};

export default CounterComp;