import { useState, useRef } from "react";

function DemoUseRef() {
    const [count, setCount] = useState(0);
    // useRef to keep track of the interval ID
    const ref = useRef<number>(0);
    console.log("ref value", ref.current);


    const startCount = () => {
        ref.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    }

    const stopCount = () => {
        if (ref.current != 0) {
            clearInterval(ref.current);
            ref.current = 0;
            console.log("Counting stopped at", count);
        }
    }

    return (
        <div>
            <h1>Demo useRef</h1>
            <h3>{count}</h3>
            <button onClick={startCount}>Start Count</button>
            <button onClick={stopCount}>Stop Count</button>
        </div>
    );

}

export default DemoUseRef;