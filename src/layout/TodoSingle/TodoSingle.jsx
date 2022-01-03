import { useContext } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { TodoListContext } from "../../components/context/TodoContext";
import './TodoSingle.css'
const TodoSingle = () => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const params = useParams();
  const SelectedTodo = todoList.filter((todo) => todo.id === parseInt(params.todoId))[0];
  // console.log(SelectedTodo);
  console.log(todoList);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div  className="mb-4 mt-4">
              <h1
                style={{ display: "inline-block", width: "50%" }}>
                {
                  SelectedTodo.name
                }
              </h1>
              <h2 style={{display: "inline-block",width: "50%",textAlign: "right",}}>
                Back
              </h2>
            </div>
            {/* {SelectedTodo.items.map((item) => (
              <Card  className="mb-2" style={{background: "#647989",color: "#F5F9FA"}}>
                <Card.Body>
                <input className="checkBox"
                      style={{ marginRight: "1rem" }}
                      type="checkbox"
                      checked={item.status}
                      id={item.id}
                    ></input>
                  <Card.Title style={{ display: "inline-block"}}>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            ))} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoSingle;
