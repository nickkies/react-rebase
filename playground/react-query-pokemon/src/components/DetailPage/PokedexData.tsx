import styled from '@emotion/styled/macro';

import { Color } from 'types';
import { mapColorToHex } from 'utils';

type Props = {
  weight?: number;
  height?: number;
  genderRate?: number;
  growthRate?: string;
  baseExp?: number;
  rarity?: string;
  color?: Color;
};

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

const PokedexData: React.FC<Props> = ({
  weight,
  height,
  genderRate,
  growthRate,
  baseExp,
  rarity,
  color,
}) => {
  return (
    <InfoContainerWrapper>
      <Title color={mapColorToHex(color?.name)}>Pokédex Data</Title>
      <InfoContainer color={mapColorToHex(color?.name)}>
        <InfoItem>
          <InfoItemLabel>Height</InfoItemLabel>
          {height && <InfoItemValue>{height / 10}m</InfoItemValue>}
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>Weight</InfoItemLabel>
          {weight && <InfoItemValue>{weight / 10}kg</InfoItemValue>}
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>Gender</InfoItemLabel>
          {genderRate && (
            <InfoItemValue>
              {genderRate === -1 ? 'Unknown' : 'Male / Female'}
            </InfoItemValue>
          )}
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>Growth Rate</InfoItemLabel>
          {growthRate && <InfoItemValue>{growthRate}</InfoItemValue>}
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>Base Exp</InfoItemLabel>
          {baseExp && <InfoItemValue>{baseExp}</InfoItemValue>}
        </InfoItem>
        <InfoItem>
          <InfoItemLabel>Rarity</InfoItemLabel>
          {rarity && <InfoItemValue>{rarity}</InfoItemValue>}
        </InfoItem>
      </InfoContainer>
    </InfoContainerWrapper>
  );
};

export default PokedexData;
