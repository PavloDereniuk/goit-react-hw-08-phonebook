import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Text,
  Title,
  Button,
  Image,
  Container,
} from './HomeView.styled';
import heroImage from './collage.jpg';

export default function HomeView() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>One place for all your contacts</Title>
        <Text>
          Manage contacts from a single place and access them everywhere.
        </Text>
        <Button onClick={() => navigate('/contacts')}>Get started</Button>
      </Wrapper>
      <Image src={heroImage} alt="hero" />
    </Container>
  );
}