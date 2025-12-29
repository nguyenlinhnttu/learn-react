import {memo} from "react";

// memo is a higher order component that will prevent re-rendering of the component if the props have not changed
// if props are the same, the component will not re-render
function DemoMemo({counter}) {
    console.log("DemoMemo rendered");
    return (
        <div>
            <h1>Here is Memo Component {counter}</h1>
        </div>
    );  
}

export default memo(DemoMemo);
