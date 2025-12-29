import {useState} from "react";
import DemoMemo from "./DemoMemo";

function DemoMemoWrapper(){
    const [count, setCount] = useState(0);
     const [count2, setCount2] = useState(0);

    return(
        <div>
            <h1>Demo Memo Wraper</h1>
            <DemoMemo counter={count}/>
            <h1>Current Value 1: {count}</h1>
            <h1>Current Value 2: {count2}</h1>
            <button onClick={() => setCount(count +1)}> Increase 1</button>

            <button onClick={() => setCount2(count2 + 1)}> Increase 2</button>
        </div>
    )
}

export default DemoMemoWrapper