import { useReducer, createContext, useState } from "react";
import { data } from "..";
import reducer from "./reducer";

export const TodoListContext = createContext({
  todoList: [],
  dispatch: () => {},
});
export const FilterContext = createContext({ filter: "", setFilter: () => {} });
const TodoListContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(reducer, data);
  const [filter, setFilter] = useState("");
  return (
    <TodoListContext.Provider value={{ todoList, dispatch }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
          {children}
      </FilterContext.Provider>
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
