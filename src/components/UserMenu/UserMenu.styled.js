import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  margin-left: 5px;
`;

const Button = styled.button`
  background-color: #f1870e;
  font-size: 12px;
  padding: 10px 10px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

export { Wrapper, Text, Button };