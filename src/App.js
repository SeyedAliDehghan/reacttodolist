import "./App.css";
import TodoList from "./layout/TodoList/TodoList";
import TodoSingle from './layout/TodoSingle/TodoSingle'
import {TodoListContextProvider} from './components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <TodoListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList/>}>
            <Route index element={<div>welcome to monster app</div>} />
          </Route>
          <Route path="todo">
            {/*  element={} */}
              <Route path=":todoId" element={<TodoSingle/>} />
            </Route>
          <Route path="about" element={<div>About page</div>} />
        </Routes>
      </BrowserRouter>
    </TodoListContextProvider>
    
  );
}

export default App;
