import CompleteInput from "../CompleteInput/CompleteInput";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useState } from 'react';
import { TodoContainer, Actions } from "./styles";

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