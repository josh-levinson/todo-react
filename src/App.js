import axios from 'axios';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const baseUrl = "http://localhost:3002"

  useEffect(() => {
    const todosUrl = `${baseUrl}/todos`;
    console.log(todosUrl);
    axios.get(todosUrl).then((response) => {
      setTodos(response.data.map((todo) => 
        {
          return todo.description
        }));
    })
  }, [])

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
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
}

export default App;
