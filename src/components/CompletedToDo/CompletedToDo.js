import { useState } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 480px;
  padding: 0.85em;
  margin-bottom: 0.5rem;
  background: #d7d8de;
  text-align: left;
  letter-spacing: 0.02rem;
  transition: all 0.3s ease-out;
  border-left: 5px solid #2e43cf;
`;

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