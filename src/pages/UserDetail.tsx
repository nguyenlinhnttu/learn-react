import { useUserById } from "../hooks/userHooks";
import ErrorMessage from "../component/ErrorMesssage";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  console.log("UserDetail id:", id);
  const { user, loading, error, reload: getUserById } = useUserById(id, true);
  if (error) return <ErrorMessage error={error} onRetry={getUserById} />;

  function ActionBack() {
    return (
      <div>
        <a href="/users">Back  To Users  |  </a>
        <a href="/">Back To Home</a>
      </div>
    )
  }

  function DisplayUserInfo({name , email} ) {
    return (
      <div>
        <h2 style={{ color: 'red' }}>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {!user ? <p style={{ color: 'red', fontSize: "24px" }}>No user found.</p> : <>
        <DisplayUserInfo name={user.name} email={user.email} />
        <ActionBack />
      </>}

    </div>
  );
}

export default UserDetail;