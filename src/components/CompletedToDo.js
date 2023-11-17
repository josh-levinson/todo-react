import { useState } from 'react';
import DeleteButton from './DeleteButton';

const CompletedTodo = ({todo, remove}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="todo">
      <li className="completed-text" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{todo.description}</li>
      { isHovered && (<DeleteButton todo={todo} remove={remove} />) }
    </div>
  );
}

export default CompletedTodo;