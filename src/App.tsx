import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import ListClips from "./pages/ListClips";
import TodoList from "./hooks/ToDoList";

import DemoPreviewAvatar from "./component/DemoPreviewAvatar";
function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users </Link> |{" "}
        <Link to="/clips">Clips</Link>
        <Link to="/todo-list">Todo List</Link>
        <Link to="/preview-avatar">Preview Avatar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/clips" element={<ListClips />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/preview-avatar" element={<DemoPreviewAvatar />} />
      </Routes>
    </>
  );
}


export default App
