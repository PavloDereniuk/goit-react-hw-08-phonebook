import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Title = styled.h1``;

const Text = styled.p`
  max-width: 300px;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #f1870e;
  width: 280px;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

const Image = styled.img`
  min-width: 360px;
  max-width: 700px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Wrapper, Text, Title, Button, Image, Container };