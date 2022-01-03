import "./App.css";
import TodoList from "./layout/TodoList/TodoList";
import TodoSingle from './layout/TodoSingle/TodoSingle'
import {TodoListContextProvider} from './components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoListContextProvider><TodoList/></TodoListContextProvider>}>
            <Route index element={<div>welcome to monster app</div>} />
          </Route>
          <Route path="todo">
            {/*  element={} */}
              <Route path=":todoId" element={<TodoListContextProvider><TodoSingle/></TodoListContextProvider>} />
            </Route>
          <Route path="about" element={<div>About page</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
