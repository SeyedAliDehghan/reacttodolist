import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import data, { makeUniqId } from "./components/data";
import TodoList from "./components/TodoList/TodoList";
import {TodoListContextProvider} from './components'
function App() {
  return (
    <TodoListContextProvider>
      <TodoList/>
    </TodoListContextProvider>
  );
}

export default App;
