import { useUserById } from "../hooks/userHooks";
import ErrorMessage from "../component/ErrorMesssage";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  console.log("UserDetail id:", id);
  const { user, loading, error, reload: getUserById } = useUserById(id, true);


  if (error) return <ErrorMessage error={error} onRetry={getUserById} />;
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!user ? <p>No user found.</p> : <>  
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p><a href="/users">Back  To Users</a></p>
          <p><a href="/">Back To Home</a></p>
      </>}

    </div>
  );
}

export default UserDetail;