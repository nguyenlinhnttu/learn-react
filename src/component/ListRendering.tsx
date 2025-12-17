import { useState } from "react";

function ListExample() {
    const fruits = ["Apple", "Bannana", "Water Melon", "Orange", "Kiwi", "Durian"];
    const listItems = [];
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) break; // dừng vòng lặp
        listItems.push(<li key={i}>{fruits[i]}</li>);
    }
    const users = [{ id: 1, name: "Linh" }, { id: 2, name: "Son" }];
    return (
        <ul>
            {fruits.map((fruit, index) => {
                if (index >= 2) return null; // dừng render phần tử sau index 1
                return <li key={index}>{fruit}</li>;
            })}

            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li> 
            ))}


            {listItems}

            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>


    )
}
export default ListExample