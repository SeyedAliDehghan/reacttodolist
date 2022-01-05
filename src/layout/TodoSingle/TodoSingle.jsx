import { useContext } from "react";
import { Row, Col, Container, Card, InputGroup,FormControl } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { TodoListContext,AddTodoItem,SingleHeader,TodoItems } from "../../components/";
import "./TodoSingle.css";
const TodoSingle = () => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const params = useParams();
  const SelectedTodo = todoList.filter(
    (todo) => todo.id === parseInt(params.todoId)
  )[0];

  // console.log(SelectedTodo.items);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <SingleHeader todoName={SelectedTodo.name}/>
            <AddTodoItem todoId={SelectedTodo.id}/>
            <TodoItems todoItems={SelectedTodo.items} selectedTodoId={SelectedTodo.id}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoSingle;
