import { useDispatch, useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';
import operations from '../../redux/Auth/authOperations';
import authSelectors from '../../redux/Auth/authSelectors';
import { Wrapper, Text, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUserEmail);
  return (
    <Wrapper>
      <BsPersonCircle />
      <Text>{email}</Text>
      <Button onClick={() => dispatch(operations.logout())}>Log out</Button>
    </Wrapper>
  );
}