import styled from 'styled-components';

export const TodoContainer = styled.div`
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
  border-left: 5px solid #2e43cf;
`;

export const Actions = styled.div`
  display: flex;
`;