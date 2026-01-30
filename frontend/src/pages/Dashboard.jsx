import { useState } from "react";
import TodoItem from "../components/TodoItem";

const Dashboard = ({ setIsLoggedIn }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo || !date) return;
    setTodos([...todos, { text: todo, date }]);
    setTodo("");
    setDate("");
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Your Tasks</h1>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </header>

      <div className="todo-inputs">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter task..."
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todo-list">
        {todos.map((t, i) => (
          <TodoItem key={i} todo={t} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
