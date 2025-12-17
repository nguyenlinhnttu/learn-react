import { useRef, useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

function FetchListUser() {
    const controllerRef = useRef<AbortController | null>(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState<User | null>(null);

    function loadUsers() {
        // Cancel previous request
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users", {
                signal: controller.signal,
            })
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error))
            .finally(() => setLoading(false));
    }

    function loadUsersById() {
         // Cancel previous request
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                signal: controller.signal,
            })
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching users:", error))
            .finally(() => setLoading(false));
    }

    // useEffect to load users on component mount
    useEffect(() => {
            loadUsers();
            //clear unmount
             return () => {
                controllerRef.current?.abort();
            };
    }, []);


    return (
        <div>
            <h2>Fetch List User Example</h2>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            {users.length > 0 && <button onClick={() => setUsers([])}>Clear Users</button>}
            {users.length == 0 && (
                <button onClick={loadUsers}>
                    Load Users
                </button>
            )}

            <h2>Fetch User By Id</h2>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}></input>

            <button onClick={loadUsersById}>
                Get Users By Id
            </button>
            <p>{userData && JSON.stringify(userData)}</p>
            <p>{userData && userData.email}</p>
        </div>
    )
}

export default FetchListUser;