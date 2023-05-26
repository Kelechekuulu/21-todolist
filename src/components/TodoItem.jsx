import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editSaveTodo } from "../store/todo/todoThunk";

export const TodoItem = ({ item, completedHandler }) => {
  const [editTitle, setEditTitle] = useState(item.title);
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useDispatch();

  const editOpenHandler = () => {
    setEditOpen(true);
  };

  const editSaveHandler = (item, title) => {
    const result = {
      ...item,
      title: title,
    };

    dispatch(editSaveTodo(result));
  };

  const saveEditTodoHandler = (e) => {
    e.preventDefault();
    editSaveHandler(item, editTitle);
    setEditOpen(false);
  };

  function deleteById(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "500px",
          padding: "20px",
          justifyContent: "space-around",
          border: "2px solid white",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <input type="checkbox" onChange={() => completedHandler(item)} />

        {editOpen ? (
          <div>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button
              style={{ marginLeft: "15px" }}
              onClick={saveEditTodoHandler}
            >
              save
            </button>
          </div>
        ) : (
          <p
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              width: "50%",
            }}
          >
            {item.title}
          </p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <button onClick={() => deleteById(item.id)}>delete</button>
          <button onClick={() => editOpenHandler(item)}>edit</button>
        </div>
      </div>
    </div>
  );
};
