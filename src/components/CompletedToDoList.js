import CompletedTodo from './CompletedToDo';
import { useState } from 'react';

const CompletedTodoList = ({ todos, remove }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <CompletedTodo todo={todo} remove={remove} />
          ))}
        </ul>
      ) : (
        <div className="empty">No tasks found</div>
      )}
    </>
  );
}

export default CompletedTodoList;
