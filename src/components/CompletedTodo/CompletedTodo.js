import { useState } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import { TodoContainer } from './styles';

const CompletedTodo = ({todo, remove}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <TodoContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div styles="text-decoration: line-through;">{todo.description}</div>
      <div className="actions">{ isHovered && (<DeleteButton todo={todo} remove={remove} />) }</div>
    </TodoContainer>
  );
}

export default CompletedTodo;