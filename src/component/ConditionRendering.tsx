import { useState } from "react";
function ConditionalExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back!</h1>
            ) : (
                <h1>Please sign up.</h1>
            )}

           <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
           </button>
        </div>
    );
}
export default ConditionalExample;