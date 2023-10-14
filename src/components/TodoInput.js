const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={todo}
        name="todo"
        placeholer="Create a new todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput;
