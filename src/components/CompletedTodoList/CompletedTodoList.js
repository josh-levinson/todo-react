import CompletedTodo from "../CompletedTodo/CompletedTodo";

const CompletedTodoList = ({ todos, remove }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <div className="todo-list">
          {todos.map((todo, index) => (
            <CompletedTodo todo={todo} remove={remove} />
          ))}
        </div>
      ) : (
        <div className="empty">No tasks found</div>
      )}
    </>
  );
}

export default CompletedTodoList;
