import { useState } from "react";

function Exercises() {
    const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
    const [inputValue, setInputValue] = useState("");
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function deleteItem(index: number) {
        setItems(items.filter((_, i) => i !== index));
    }

    const addItem = () => {
        setItems([...items, inputValue]);
    };
    return (
        <div>
            <h3>Input item name</h3>
            <input type="text" value={inputValue} onChange={handleInputChange} />

            <p><button onClick={addItem}>Add Item</button></p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}  
                    <button onClick={() => deleteItem(index)}>
                        Delete
                    </button></li>
                ))}
            </ul>
        </div>
    )  
}

export default Exercises;