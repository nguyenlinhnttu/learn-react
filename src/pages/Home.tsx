import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to User Management App</p>

      <Link to="/users">
        Go to Users
      </Link>

      
      <Link to="/todo-list">
        Go to Todo List
      </Link>
    </div>
  );
}

export default Home;
