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
          ? { ...todo, items: todo.items.filter(item=> item !== payload.itemId) }
          : todo
      );
    default:
      return state;
  }
}

export const types={
    addNewTodo:'addNewTodo',
    deleteTodo:'deleteTodo',
    addTodoItem:'addTodoItem',
    updateItemStatus:'updateItemStatus',
    deleteTodoItem:'deleteTodoItem'
}
export default reducer