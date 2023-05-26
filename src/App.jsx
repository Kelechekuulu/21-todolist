import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { store } from "./store";
import { useEffect } from "react";
import { getTodo } from "./store/todo/todoThunk";

function AppContent() {
  const { selectValue } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch, selectValue]);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
