export const ActionTypeTodo = {
  GET_TODO: "GET_TODO",
  POST_TODO: "POST_TODO",
  DELETE_TODO: "DELETE_TODO",
  SELECT_VALUE: "SELECT_VALUE",
};

const initialState = {
  items: [],
  selectValue: "all",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeTodo.GET_TODO:
      if (state.selectValue === "all") {
        return {
          ...state,
          items: action.payload,
        };
      }
      if (state.selectValue === "completed") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === true),
        };
      }
      if (state.selectValue === "uncompleted") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === false),
        };
      }
    case ActionTypeTodo.SELECT_VALUE:
      return {
        ...state,
        selectValue: action.payload,
      };
    default:
      return state;
  }
};
