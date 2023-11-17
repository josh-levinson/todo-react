import Todo from '../Todo/Todo';

const TodoList = ({ todos, complete, remove }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo todo={todo} remove={remove} complete={complete} />
          ))}
        </div>
      ) : (
        <div className="empty">No tasks found</div>
      )}
    </>
  );
}

export default TodoList;
