import React from 'react'
import { Card, InputGroup,FormControl } from "react-bootstrap";
import { useContext } from "react";
import { TodoListContext,types } from "..";


const AddTodoItem = ({todoId}) => {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodoItem = (id) => {
    const inputValue=document.getElementsByClassName("form-control")[0]
    dispatch({ type: types.addTodoItem, payload: { id, title:inputValue.value } });
    inputValue.value=""
  };
    return (
        <Card
              className="mb-2"
              style={{ background: "#647989", color: "#F5F9FA" }}
            >
              <Card.Header>Add Item to Todo</Card.Header>
              <Card.Body>
                <InputGroup>
                  <FormControl
                    placeholder="Enter New Todo Item"
                    aria-label="Enter New Todo Item"
                    aria-describedby="basic-addon2"
                    // value=
                    // onChange={(e) => setFilter(e.target.value)}
                  />
                  <InputGroup.Text onClick={()=>handleAddTodoItem(todoId)} id="basic-addon2">Add</InputGroup.Text>
                </InputGroup>
              </Card.Body>
            </Card>
    )
}

export default AddTodoItem
