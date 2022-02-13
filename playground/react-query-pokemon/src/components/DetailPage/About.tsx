import styled from '@emotion/styled/macro';
import { Abilities } from '.';

const Base = styled.article`
  padding: 20px;
`;

const FlavorText = styled.p`
  margin: 0 auto;
  word-break: break-word;
  font-size: 14px;
  color: #374151;
`;

const TypeWrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

const TypeImage = styled.img`
  height: 12px;
`;

const TypeLabel = styled.span`
  margin-left: 4px;
  color: #fff;
  font-size: 10px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const InfoContainerWrapper = styled.div`
  margin-top: 32px;
`;

const InfoItemValue = styled.span`
  font-size: 12px;
`;

const InfoContainer = styled.div<{ color: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  row-gap: 12px;
  ${InfoItemValue} {
    color: ${({ color }) => color};
  }
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const InfoItemLabel = styled.span`
  font-weight: bold;
  color: #374151;
  font-size: 12px;
`;

const About: React.FC = () => {
  return (
    <Base>
      <FlavorText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </FlavorText>
      <TypeList>
        <TypeWrapper color='red'>
          <TypeImage src='/assets/fire.svg' />
          <TypeLabel>FIRE</TypeLabel>
        </TypeWrapper>
        <TypeWrapper color='green'>
          <TypeImage src='/assets/grass.svg' />
          <TypeLabel>GRASS</TypeLabel>
        </TypeWrapper>
      </TypeList>

      <InfoContainerWrapper>
        <Title color='green'>Pokédex Data</Title>
        <InfoContainer color='green'>
          <InfoItem>
            <InfoItemLabel>Height</InfoItemLabel>
            <InfoItemValue>100m</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Weight</InfoItemLabel>
            <InfoItemValue>100kg</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Gender</InfoItemLabel>
            <InfoItemValue>Male</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Growth Rate</InfoItemLabel>
            <InfoItemValue>medium-slow</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Base Exp</InfoItemLabel>
            <InfoItemValue>100</InfoItemValue>
          </InfoItem>
          <InfoItem>
            <InfoItemLabel>Rarity</InfoItemLabel>
            <InfoItemValue>Normal</InfoItemValue>
          </InfoItem>
        </InfoContainer>
      </InfoContainerWrapper>

      <Abilities />
    </Base>
  );
};

export default About;
