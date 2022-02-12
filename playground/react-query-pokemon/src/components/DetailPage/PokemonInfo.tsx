import styled from '@emotion/styled/macro';
import { formatNumbering } from 'utils';

const Base = styled.div<{ color?: string }>``;

const ThumbnailImageWrapper = styled.div``;

const ThumnailImage = styled.img``;

const InfoWrapper = styled.div``;

const Name = styled.div``;

const Index = styled.div``;

// TODO color필수로 변경 예정
const TypeWrapper = styled.div<{ color?: string }>``;

const TypeList = styled.div``;

const TypeInfo = styled.img``;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const PokemonInfo: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <Base>
      <ImageWrapper>
        <Image src='/assets/pocketball.svg' />
      </ImageWrapper>
      <InfoWrapper>
        <Name>포켓몬 이름</Name>
        <Index>{id && formatNumbering(id)}</Index>
      </InfoWrapper>
      <TypeList>
        <TypeWrapper>
          <TypeInfo src='/assets/grass.svg' />
        </TypeWrapper>
        <TypeWrapper>
          <TypeInfo src='/assets/fire.svg' />
        </TypeWrapper>
      </TypeList>
      <ThumbnailImageWrapper>
        <ThumnailImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt='포켓몬 이름'
        />
      </ThumbnailImageWrapper>
    </Base>
  );
};

export default PokemonInfo;
