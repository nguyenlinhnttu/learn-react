import { useState } from "react"
function InputExample() {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}></input>
            <p> You typed: {text}</p>
        </div>
    )
}

export default InputExample