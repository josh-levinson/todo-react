import styled from 'styled-components';

const CompleteAction = styled.button`
  background-color: #409d5e;
  color: #fff;
  border-left: none;
`;
const CompleteInput = ({ todo, complete }) => {
  return (
    <CompleteAction onClick={() => complete(todo)}><i class="fa-solid fa-check"></i></CompleteAction>
  )
}

export default CompleteInput;