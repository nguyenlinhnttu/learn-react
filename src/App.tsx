import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import ListClips from "./pages/ListClips";
import TodoList from "./component/TodoList";
import DemoPreviewAvatar from "./component/DemoPreviewAvatar";
import DemoGlobalEvent from "./component/DemoGlobalEvent";
import DemoUseRef from "./component/DemoUseRef";
import DemoMemoWrapper from "./component/DemoMemoWraper";
import DemoUseMemo from "./component/DemoUseMemo";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users </Link> |{" "}
        <Link to="/clips">Clips</Link>  |{" "}
        <Link to="/todo-list">Todo List</Link>  |{" "}
        <Link to="/preview-avatar">Preview Avatar</Link> |{" "}
        <Link to="/global-event">Global Event Demo</Link>  |{" "}
        <Link to="/use-ref">Use Ref Demo</Link> |{" "}
        <Link to="/demo-memo">Demo Memo</Link> |{" "}
        <Link to="/use-memo">Demo useMemo</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/clips" element={<ListClips />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/preview-avatar" element={<DemoPreviewAvatar />} />
        <Route path="/global-event" element={<DemoGlobalEvent />} />
        <Route path="/use-ref" element={<DemoUseRef />} />
        <Route path="/demo-memo" element={<DemoMemoWrapper />} />
        <Route path="/use-memo" element={<DemoUseMemo />} />
      </Routes>
    </>
  );
}


export default App
