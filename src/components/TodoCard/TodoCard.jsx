import React from "react";
import { useContext } from "react";
import { types, TodoListContext } from "..";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const TodoCard = ({ id, name, description }) => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleDeleteTodo = (id) => {
    dispatch({ type: types.deleteTodo, payload: { id } });
  };
  const handleEditTodo = (id,name,description) => {
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "Edit Todo",
        html:
          `<input id="swal-input1" value="${name}" class="swal2-input">` +
          `<input id="swal-input2" value="${description}" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        dispatch({ type: types.editTodo, payload: { id:id,newName:formValues[0],newDes:formValues[1] } });
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Todo Edited!',
        })
      }
    })();
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
            onClick={() => handleEditTodo(id,name,description)}
          >
            Edit
          </Button>
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
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TodoCard;
