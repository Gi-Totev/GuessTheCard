import { Button, Container } from "./Style";

const ButtonContainer = ({ guessHigher, guessLower }) => {
  return (
    <Container>
      <Button onClick={() => guessLower()}>Lower</Button>
      <Button onClick={() => guessHigher()}>Higher</Button>
    </Container>
  );
};

export default ButtonContainer;
