import { render } from "@testing-library/react";

const DeleteButton = ({ todo, remove }) => {
return (
  <button className="delete-button" onClick={() => remove(todo)}>
    <i className="fa-solid fa-trash"></i>
  </button>
);
}

export default DeleteButton;