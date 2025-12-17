import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { User } from "../types/user.type";

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setUser);

    return () => controller.abort();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

        <p><a href="/">Back To Home</a></p>
    </div>
  );
}

export default UserDetail;