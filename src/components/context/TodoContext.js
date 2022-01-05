import { useReducer, createContext, useState } from "react";
import { data } from "..";
import reducer from "./reducer";

export const TodoListContext = createContext({
  todoList: [],
  dispatch: () => {},
});
export const FilterContext = createContext({ filter: "", setFilter: () => {} });
export const ItemFilterContext = createContext({
  ItemFilter: "",
  setItemFilter: () => {},
});
const TodoListContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(reducer, data);
  const [filter, setFilter] = useState("");
  const [ItemFilter, setItemFilter] = useState("");
  return (
    <TodoListContext.Provider value={{ todoList, dispatch }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <ItemFilterContext.Provider value={{ ItemFilter, setItemFilter }}>
          {children}
        </ItemFilterContext.Provider>
      </FilterContext.Provider>
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
