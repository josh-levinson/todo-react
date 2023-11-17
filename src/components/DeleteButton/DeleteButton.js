import { Button } from "./styles";

const DeleteButton = ({ todo, remove }) => {
return (
  <Button onClick={() => remove(todo)}>
    <i className="fa-solid fa-trash"></i>
  </Button>
);
}

export default DeleteButton;