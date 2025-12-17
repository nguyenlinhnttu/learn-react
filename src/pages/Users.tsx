import ErrorMessage from "../component/ErrorMesssage";
import {useUsers} from "../hooks/userHooks";
import { Link } from "react-router-dom";

function Users() {
  const { users, loading, error, reload: loadUsers } = useUsers(true);

  return (

      <div>
        <button onClick={loadUsers}> {error ? 'Retry' : 'Load Users'}</button>
        {loading && <p>Loading...</p>}
         <ErrorMessage error={error} onRetry={loadUsers} />
         <ul>
          {users?.map(user => (
            <li key={user.id}>{user.name}  <Link to={`/users/${user.id}`}>
            <button>View</button>
          </Link></li>
          ))  }
        </ul>
      </div>

   
  );
}

export default Users;