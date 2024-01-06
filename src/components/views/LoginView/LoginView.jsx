import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/Auth/authOperations';
import { Button, Form, Input, Label, Title, Wrapper } from './LoginView.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(operations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Welcome</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <Button type="submit">Log in</Button>
      </Form>
    </Wrapper>
  );
}