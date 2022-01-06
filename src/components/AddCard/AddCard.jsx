import React from "react";
import { Col, Card } from "react-bootstrap";
import AddIcon from "../../asset/icon/plus.png";
import { useContext } from "react";
import { types, TodoListContext } from "..";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddCard = () => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodo = () => {
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "Add New Todo",
        html:
          '<input id="swal-input1" placeholder="Todo Title" class="swal2-input">' +
          '<input id="swal-input2" placeholder="Todo Description" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        dispatch({ type: types.addNewTodo, payload: { name:formValues[0], description:formValues[1] } });
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'New Todo Added!',
        })
      }
    })();
    // const name = prompt("Enter Todo Title");
    // const description = prompt("Enter Todo description");
    // dispatch({ type: types.addNewTodo, payload: { name, description } });
    // console.log(todoList);
  };
  return (
    <Col xs={12} sm={6} lg={2}>
      <Card
        key={0}
        onClick={() => handleAddTodo()}
        style={{ background: "#647989", height: "18rem", cursor: "pointer" }}
        className="mt-3"
      >
        <Card.Header style={{ color: "#F5F9FA" }}>Add New Todo</Card.Header>
        {/* <Card.Img variant="top" src={AddIcon} /> */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={AddIcon} style={{ width: "20%", height: "20%" }} alt="" />
        </div>
      </Card>
    </Col>
  );
};

export default AddCard;
