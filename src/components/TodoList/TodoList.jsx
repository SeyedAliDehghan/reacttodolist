import "./TodoList.css";
import { useReducer, useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { data, reducer, types, TodoListContext } from "..";
import AddIcon from '../../asset/icon/plus.png';

function TodoList() {
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
    <Container fluid className="mt-3">
      <Button size="lg" onClick={() => handleAddTodo()}>
        Add
      </Button>
      <Row className="mt-2">
        <Col  xs={8} sm={6} lg={2}>
          <div className="todo" style={{width:"100%",height:"100%",color:"#647989",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={AddIcon} style={{width: "30%",height:"30%"}} alt="" />
          </div>
        </Col>

        {todoList.map((todo) => (
          <Col xs={8} sm={6} lg={2}>
            <div className="todo mt-2" key={todo.id}>
              <h2>{todo.name}</h2>
              <p>{todo.description}</p>
              <ul>
                {todo.items.map((item) => (
                  <li key={item.id}>
                    <input
                      onChange={(e) =>
                        handleChangeItemStatus(todo.id, item.id, e)
                      }
                      style={{ marginRight: "0.2rem" }}
                      type="checkbox"
                      checked={item.status}
                      id={todo.id + item.id}
                    ></input>
                    <label htmlFor={todo.id + item.id}>{item.title}</label>
                  </li>
                ))}
              </ul>
              <Button
                style={{ width: "100%", marginBottom: "5px" }}
                onClick={() => handleAddTodoItem(todo.id)}
              >
                Add item
              </Button>
              <Button
                style={{ width: "100%" }}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TodoList;
