const TodoList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div key={crypto.randomUUID()} className="todo">
              <li key={index}>{entry.description}</li>
              <button className="delete-button" onClick={() => remove(entry)}>Delete</button>
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
