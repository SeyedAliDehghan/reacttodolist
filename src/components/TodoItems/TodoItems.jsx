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
            </Card.Body>
          </Card>
        ));
      }
}

export default TodoItems
