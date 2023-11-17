import CompleteInput from "../CompleteInput/CompleteInput";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useState } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 640px;
  height: 40px;
  padding: 0.85em;
  margin-bottom: 0.5rem;
  background: #d7d8de;
  text-align: left;
  letter-spacing: 0.02rem;
  transition: all 0.3s ease-out;
  border-left: 5px solid #2e43cf;
`;

const Actions = styled.div`
  display: flex;
  height: 30px;
`;

const Todo = ({ todo, remove, complete }) => {
 const [isHovered, setIsHovered] = useState(false);

  return (
    <TodoContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {todo.description}
      <Actions>
        <CompleteInput todo={todo} complete={complete} />
        {isHovered && <DeleteButton todo={todo} remove={remove} />}
      </Actions>
    </TodoContainer>
  ); 
}

export default Todo;