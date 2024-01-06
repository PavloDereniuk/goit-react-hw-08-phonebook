import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/Auth/authOperations';
import {
  Button,
  Form,
  Input,
  Label,
  Title,
  Wrapper,
} from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Please fill out this form for registration</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name:
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          E-mail:
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
}