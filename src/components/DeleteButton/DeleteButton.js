import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  appearance: none;
  color: currentcolor;
  background-color: #b34343;
  color: #fff;
  border: 1px solid #828691;
`;

const DeleteButton = ({ todo, remove }) => {
return (
  <Button onClick={() => remove(todo)}>
    <i className="fa-solid fa-trash"></i>
  </Button>
);
}

export default DeleteButton;