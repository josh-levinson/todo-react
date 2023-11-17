import { v4 as uuidv4 } from 'uuid';
import CompleteInput from './CompleteInput';
import DeleteButton from './DeleteButton';

const TodoList = ({ todos, complete, remove }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div key={uuidv4()} className="todo">
              <li key={index}>{todo.description}</li>
              <CompleteInput todo={todo} complete={complete} />
              <DeleteButton todo={todo} remove={remove} />
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">No tasks found</div>
      )}
    </>
  );
}

export default TodoList;
