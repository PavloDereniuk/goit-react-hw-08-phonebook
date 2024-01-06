import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

const Form = styled.form`
  width: 320px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Input = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 14px;
  min-width: 125px;
  padding: 8px;
  margin-top: 5px;
  &:hover {
    border: 1px solid blue;
  }
`;

const Button = styled.button`
  display: block;
  background-color: #f1870e;
  font-size: 14px;
  margin: 0 auto;
  padding: 10px 16px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

export { Form, Label, Button, Wrapper, Title, Input };