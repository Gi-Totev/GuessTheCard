import { InfoContainer, InfoText } from "./style";

const Info = () => {
  return (
    <InfoContainer>
      <InfoText>
        Guess if the next card is lower or heigher than the current one. From
        lowest to highest: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
      </InfoText>
    </InfoContainer>
  );
};

export default Info;
