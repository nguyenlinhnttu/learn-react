import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import type { User } from "../types/user.type";
import ErrorMessage from "../component/ErrorMesssage";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const controllerRef = useRef<AbortController | null>(null);

  const loadUsers = () => {
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to load users2");
        }
        return res.json();
      })
      .then(setUsers)
      .catch(err => {
        if (err.name !== "AbortError") {
          setError(err.message || "Unknown error");
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
   // loadUsers();
    return () => controllerRef.current?.abort();
  }, []);

  return (

      <div>
        <button onClick={loadUsers}> {error ? 'Retry' : 'Load Users'}</button>
        {loading && <p>Loading...</p>}
         <ErrorMessage message={error} onRetry={loadUsers} />
         <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

   
  );
}

export default Users;