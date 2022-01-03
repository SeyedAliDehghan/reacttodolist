import React from "react";
import { Col, Card } from "react-bootstrap";
import AddIcon from "../../asset/icon/plus.png";
import { useContext } from "react";
import { types, TodoListContext } from "..";

const AddCard = () => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodo = () => {
    const name = prompt("Enter Todo Title");
    const description = prompt("Enter Todo description");
    dispatch({ type: types.addNewTodo, payload: { name, description } });
  };
  return (
    <Col xs={12} sm={6} lg={2}>
      <Card
        onClick={() => handleAddTodo()}
        style={{ background: "#647989", height: "18rem",cursor:"pointer" }}
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
          <img src={AddIcon} style={{ width: "30%", height: "30%" }} alt="" />
        </div>
      </Card>
    </Col>
  );
};

export default AddCard;
