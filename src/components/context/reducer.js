import {makeUniqId} from '..'
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "addNewTodo":
      return [
        ...state,
        {
          id: makeUniqId(),
          name: payload.name,
          description: payload.description,
          items: [],
        },
      ];
    case "deleteTodo":
      return state.filter((todo) => todo.id !== payload.id);
    case "addTodoItem":
      return state.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              items: [
                ...todo.items,
                { id: makeUniqId(), title: payload.title, status: false },
              ],
            }
          : todo
      );
    case "updateItemStatus":
      return state.map((todo) =>
        todo.id === payload.todoId
          ? {
              ...todo,
              items: todo.items.map((item) =>
                item.id === payload.itemId
                  ? { ...item, status: payload.checked }
                  : item
              ),
            }
          : todo
      );
      case "deleteTodoItem":
        return state.map((todo) =>
        todo.id === payload.todoId
          ? { ...todo, items: todo.items.filter(item=> item.id !== payload.itemId) }
          : todo
      );
      case "editTodo":
        return state.map((todo)=>
        todo.id===payload.id?
        (todo={
          id:payload.id,
          name:payload.newName,
          description:payload.newDes,
          items:todo.items
          })
        :todo)
    default:
      return state;
  }
}

export const types={
    addNewTodo:'addNewTodo',
    deleteTodo:'deleteTodo',
    addTodoItem:'addTodoItem',
    updateItemStatus:'updateItemStatus',
    deleteTodoItem:'deleteTodoItem',
    editTodo:'editTodo'
}
export default reducer