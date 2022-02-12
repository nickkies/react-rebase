import styled from '@emotion/styled/macro';
import { Abilities } from '.';

const Base = styled.article``;

const FlavorText = styled.p``;

const TypeWrapper = styled.div``;

const TypeList = styled.div``;

const TypeImage = styled.img``;

const TypeLabel = styled.span``;

const Title = styled.h4``;

const InfoContainerWrapper = styled.div``;

const InfoContainer = styled.div``;

const InfoItem = styled.div``;

const InfoItemLabel = styled.span``;

const InfoItemValue = styled.span``;

const About: React.FC = () => {
  return (
    <Base>
      <FlavorText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </FlavorText>
      <TypeList>
        <TypeWrapper>
          <TypeImage src='/assets/fire.svg' />
          <TypeLabel>FIRE</TypeLabel>
        </TypeWrapper>
        <TypeWrapper>
          <TypeImage src='/assets/grass.svg' />
          <TypeLabel>GRASS</TypeLabel>
        </TypeWrapper>
      </TypeList>

      <InfoContainerWrapper>
        <Title>Pokédex Data</Title>
        <InfoContainer>
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
