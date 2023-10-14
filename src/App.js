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
          return {
            id: todo.id,
            description: todo.description,
            complete: todo.complete,
          }
        }));
    })
  }, []);

  const addTodo = () => {
    if (todo !== "") {
      const createTodoUrl = `${baseUrl}/todos`;

      axios.post(createTodoUrl, {
        description: todo,
        complete: false,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (todo) => {
    const deleteTodoUrl = `${baseUrl}/todos/${todo.id}`;
    axios.delete(deleteTodoUrl).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    const newTodos = todos.filter((todoInList) => todoInList.id !== todo.id);
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
