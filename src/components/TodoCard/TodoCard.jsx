import React from "react";
import { useContext } from "react";
import { types, TodoListContext } from "..";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TodoCard = ({ id, name, description }) => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodo = () => {
    const name = prompt("Enter Todo Title");
    const description = prompt("Enter Todo description");
    dispatch({ type: types.addNewTodo, payload: { name, description } });
  };
  const handleDeleteTodo = (id) => {
    dispatch({ type: types.deleteTodo, payload: { id } });
  };
  const handleAddTodoItem = (id) => {
    const title = prompt("Enter Todo Item Title");
    dispatch({ type: types.addTodoItem, payload: { id, title } });
  };
  const handleChangeItemStatus = (todoId, itemId, e) => {
    dispatch({
      type: types.updateItemStatus,
      payload: { todoId, itemId, checked: e.target.checked },
    });
  };
  return (
    <Card style={{ background: "#647989", height: "18rem" }} className="mt-3">
      <Card.Header style={{ color: "#F5F9FA", fontWeight: "bold" }}>
        {name}
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ color: "#F5F9FA" }}>{description}</Card.Text>
        <div
          style={{
            width: "100%",
            // height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Link to={`/todo/${id}`}
          style={{
            border: "none",
            borderRadius:"0.25rem",
            background: "#F5F9FA",
            color: "#647989",
            display: "block",
            width: "100%",
            textDecoration:"none"
          }}>
            <Button
            style={{
              border: "none",
              borderRadius:"0.25rem",
              background: "#F5F9FA",
              color: "#647989",
              display: "block",
              width: "100%",
            }}>
              Details
            </Button>
          </Link>

          <Button
            style={{
              border: "none",
              background: "#F5F9FA",
              color: "#647989",
              display: "block",
              width: "100%",
              marginTop: "5px",
            }}
            onClick={() => handleDeleteTodo(id)}
          >
            Delete Todo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoCard;
