import axios from 'axios';
import './App.css';
import CompletedTodoList from './components/CompletedTodoList/CompletedTodoList';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const baseUrl = process.env.REACT_APP_RAILS_API_HOST

  useEffect(() => {
    const todosUrl = `${baseUrl}`;
    console.log(todosUrl);
    axios.get(todosUrl).then((response) => {
      const allTodos = response.data;
      console.log(allTodos);

      setTodos(allTodos.filter((todo) => 
        { return (todo.completed === false || todo.completed === null); }
      ));

     setCompletedTodos(allTodos.filter((todo) => 
        { return todo.completed === true; }
      ));
    })
  }, [baseUrl]);

  const todoUrl = (todo) => {
    return `${baseUrl}/${todo.id}`
  };

  const addTodo = () => {
    if (todo !== "") {
      axios.post(baseUrl, {
        description: todo,
        completed: false,
      }).then((response) => {
        const newTodo = response.data;
        setTodos([...todos, newTodo]);
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setTodo("");
    }
  }

  const completeTodo = (todo) => {
    axios.patch(todoUrl(todo), {
      todo: {
        completed: true,
      }
    }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      setTodos(todos.filter((item) => { return (item !== todo) }));
      setCompletedTodos([...completedTodos, todo]);
  }

  const deleteTodo = (todo) => {
    axios.delete(todoUrl(todo)).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    setTodos(todos.filter((item) => { return item !== todo }))
    setCompletedTodos(completedTodos.filter((item) => { return item !== todo }))
  }

  return (
    <div className="App">
      <div className="title">Josh's ToDo List</div>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} complete={completeTodo} remove={deleteTodo} />
      <h3>Completed Todos</h3>
      <CompletedTodoList todos={completedTodos} remove={deleteTodo} />
    </div>
  );
}

export default App;
