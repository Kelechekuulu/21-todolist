import React from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo } from "../store/todo/todoThunk";

export const TodoList = () => {
  const { items, selectValue } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const completedHandler = (item) => {
    const result = {
      ...item,
      completed: !item.completed,
    };

    dispatch(completedTodo(result));
  };

  return (
    <div>
      {items?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completedHandler={completedHandler}
        />
      ))}
    </div>
  );
};
