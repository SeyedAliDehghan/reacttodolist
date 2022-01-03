import { useContext } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { types, TodoListContext,CardsContainer,AddCard,TodoCard } from "..";
import AddIcon from "../../asset/icon/plus.png";


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
    <CardsContainer>
      <Row className="mt-2">
        {/* <AddCard/> */}
        {todoList.map((todo) => (
          <Col xs={8} sm={6} lg={2}>
            <TodoCard  id={todo.id} name={todo.name} description={todo.description}/>
          </Col>
        ))}
      </Row>
    </CardsContainer>
  );
}

export default TodoList;
