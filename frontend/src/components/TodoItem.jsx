const TodoItem = ({ todo }) => {
  return (
    <div className="todo-card">
      <h4>{todo.text}</h4>
      <span>📅 {todo.date}</span>
    </div>
  );
};

export default TodoItem;
