import styled from 'styled-components';

export const InputWrapper = styled.div`
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

export const Input = styled.input`
  width: 450px;
  padding: 0.8em; 
`;

export const Button = styled.button`
  font-size: 1em;
  appearance: none;
  color: currentcolor;
  background-color: #346eeb;
  color: #fff;
  border: 1px solid #828691;
`;