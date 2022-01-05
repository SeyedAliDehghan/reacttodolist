import {useContext} from 'react'
import {TodoListContext,types} from ".."
import { Card } from "react-bootstrap";
import './TodoItems.css'
const TodoItems = ({todoItems,selectedTodoId}) => {
    const { todoList, dispatch } = useContext(TodoListContext);

    const handleUpdateItemStatus = (todoId, itemId, e) => {
        dispatch({
          type: types.updateItemStatus,
          payload: { todoId, itemId, checked: e.target.checked },
        });
    }
    const handleDeleteItem = (todoId, itemId) => {
      dispatch({
        type: types.deleteTodoItem,
        payload: { todoId, itemId }
    })
  }
    if (todoItems.length === 0) {
        return <div>Add Some Todo Item</div>;
      } else {
        return todoItems.map((item) => (
          <Card
          key={item.id}
            className="mb-2"
            style={{ background: "#647989", color: "#F5F9FA" }}
          >
            <Card.Body>
              <input
                className="checkBox"
                style={{ marginRight: "1rem" }}
                type="checkbox"
                checked={item.status}
                id={item.id}
                onChange={(e)=>handleUpdateItemStatus(selectedTodoId, item.id,e )}
              ></input>
              <Card.Title style={{ display: "inline-block" }}>
                {item.title}
              </Card.Title>
              <span onClick={()=>handleDeleteItem(selectedTodoId, item.id)} style={{display: "inline-block",float:"right",cursor:"pointer"}}>X</span>
            </Card.Body>
          </Card>
        ));
      }
}

export default TodoItems
