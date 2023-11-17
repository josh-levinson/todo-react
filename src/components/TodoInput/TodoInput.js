import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 640px;
  height: auto;
  padding: 0.85em;
  margin-bottom: 0.5rem;
  background: #d7d8de;
  text-align: left;
  letter-spacing: 0.02rem;
  transition: all 0.3s ease-out;
`;

const Input = styled.input`
  width: 450px;
  padding: 0.8em; 
`;

const Button = styled.button`
  font-size: 1em;
  appearance: none;
  color: currentcolor;
  background-color: #346eeb;
  color: #fff;
  border: 1px solid #828691;
`;

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
