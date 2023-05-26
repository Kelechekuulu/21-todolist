import { ActionTypeTodo } from "./todoReducer";

const url = "https://todo-list-1e5c8-default-rtdb.firebaseio.com/";

export const getTodo = () => {
  return async (dispatch) => {
    try {
      const responce = await fetch(`${url}.json`);
      const data = await responce.json();
      const result = [];

      for (const key in data) {
        result.unshift({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
          edit: data[key].edit,
        });
      }

      dispatch({ type: ActionTypeTodo.GET_TODO, payload: result });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const postTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${url}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await fetch(`${url}/${id}.json`, {
      method: "DELETE",
    });

    dispatch(getTodo());
  };
};

export const completedTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${url}/${data.id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const editSaveTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${url}/${data.id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
