import {useState, useCallback} from 'react';

function DemoUseCallback(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // with useCallback, this function is memoized and only recreated when 'count' changes
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);     

    // This function is recreated on every render
    const increment2 = () => {
        setCount(count + 1);
    };           

    return(
        <div>
            <h1>Demo useCallback</h1>
            <h2>Count 1: {count}</h2>
            <h2>Count 2: {count2}</h2>
            <button onClick={increment}>Increment Count 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
        </div>
    )
}

export default DemoUseCallback;