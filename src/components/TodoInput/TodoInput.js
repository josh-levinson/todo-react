import { InputWrapper, Input, Button } from './styles';

const TodoInput = ({ todo, setTodo, addTodo }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      addTodo(); 
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={todo}
        name="todo"
        placeholer="Create a new todo"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button onClick={addTodo}>
        <i className="fa-solid fa-plus"></i>
      </Button>
    </InputWrapper>
  );
}

export default TodoInput;
