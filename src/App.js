import './App.css';

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo !== text);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Josh's ToDo List</h1>
      <div className="input-wrapper">
        <input
          type="text"
          value={todo}
          name="todo"
          placeholer="Create a new todo"
          onChange={(e) => { setTodo(e.target.value)}}
        />
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>
      <div className="todo-wrapper">
        {todos.length > 0 ? (
          <ul className="todo-list">
              {todos.map((todo, index) => (
                <div key={crypto.randomUUID()} className="todo">
                  <li key={index}>{todo}</li>
                  <button className="delete-button" onClick={() => deleteTodo(todo)}>Delete</button>
                </div>
              ))}
            </ul>
        ) : (
          <div className="empty">No tasks found</div>
        )}
      </div>
    </div>
  );
}

export default App;
