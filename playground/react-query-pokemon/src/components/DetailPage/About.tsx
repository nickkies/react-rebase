import styled from '@emotion/styled/macro';

import { Ability, Color, Type } from 'types';
import { mapTypeToHex } from 'utils';
import { Abilities, PokedexData } from '.';

type Props = {
  color?: Color;
  growthRate?: string;
  flavorText?: string;
  genderRate?: number;
  isLegendary?: boolean;
  isMythical?: boolean;
  types?: Array<Type>;
  weight?: number;
  height?: number;
  baseExp?: number;
  abilities?: Array<Ability>;
};

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

const About: React.FC<Props> = ({
  color,
  growthRate,
  flavorText,
  genderRate,
  isLegendary,
  isMythical,
  types,
  weight,
  height,
  baseExp,
  abilities,
}) => {
  const rarity = isLegendary ? 'Legendary' : isMythical ? 'Mythical' : 'Normal';

  return (
    <Base>
      <FlavorText>{flavorText}</FlavorText>
      {types && (
        <TypeList>
          {types.map(({ type: { name } }, idx) => (
            <TypeWrapper key={idx} color={mapTypeToHex(name)}>
              <TypeImage src={`/assets/${name}.svg`} />
              <TypeLabel>{name.toUpperCase}</TypeLabel>
            </TypeWrapper>
          ))}
        </TypeList>
      )}

      <PokedexData
        weight={weight}
        height={height}
        genderRate={genderRate}
        growthRate={growthRate}
        baseExp={baseExp}
        rarity={rarity}
        color={color}
      />

      <Abilities />
    </Base>
  );
};

export default About;
