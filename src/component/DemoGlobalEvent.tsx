import {useState, useEffect} from "react";

function DemoGlobalevent(){
    const [message, setMessage] = useState('');
    useEffect(()=> {

            // Subscribe to the global event  (App.tsx)
            // use destructuring to get detail from event
            const handleGlobalEvent =  ({ detail }) => {
                setMessage(detail);
                console.log("Received global event with message:", detail);
            }

            window.addEventListener('myGlobalEvent', handleGlobalEvent);
          return () => {
            window.removeEventListener('myGlobalEvent', handleGlobalEvent);
          }
    }
    ,[message]);


    return(
        <div>
            <h1>Demo Global Event Component</h1>    
            <p>Received Message: {message}</p>
        </div>
    )
}

export default DemoGlobalevent;