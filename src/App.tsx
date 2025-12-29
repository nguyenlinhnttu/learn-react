import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import ListClips from "./pages/ListClips";
import TodoList from "./component/TodoList";
import DemoPreviewAvatar from "./component/DemoPreviewAvatar";
import DemoGlobalEvent from "./component/DemoGlobalEvent";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users </Link> |{" "}
        <Link to="/clips">Clips</Link>  |{" "}
        <Link to="/todo-list">Todo List</Link>  |{" "}
        <Link to="/preview-avatar">Preview Avatar</Link> |{" "}
        <Link to="/global-event">Global Event Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/clips" element={<ListClips />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/preview-avatar" element={<DemoPreviewAvatar />} />
        <Route path="/global-event" element={<DemoGlobalEvent />} />
      </Routes>
    </>
  );
}


export default App
