import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTodo } from "../store/todo/todoThunk";
import { ActionTypeTodo } from "../store/todo/todoReducer";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { selectValue } = useSelector((state) => state.todo);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: value,
      completed: false,
      edit: false,
    };

    dispatch(postTodo(data));
    setValue("");
  };

  const selectChangeHandler = (e) => {
    dispatch({ type: ActionTypeTodo.SELECT_VALUE, payload: e.target.value });
  };

  return (
    <div style={{ display: "flex", gap:"30px" }}>
      <form style={{marginLeft:"50px"}} onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={!value} style={{ marginLeft: "20px" }}>
          add todo
        </button>
      </form>

      <select value={selectValue} onChange={selectChangeHandler}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </div>
  );
};
