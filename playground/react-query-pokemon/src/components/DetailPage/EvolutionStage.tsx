import styled from '@emotion/styled/macro';

const Base = styled.li``;

const ImageWrapper = styled.div``;

const Image = styled.img``;

const DividerWrapper = styled.div``;

const Text = styled.div``;

const Divider = styled.div``;

const EvolutionStage: React.FC = () => {
  return (
    <Base>
      <ImageWrapper>
        <Image src='' />
      </ImageWrapper>
      <DividerWrapper>
        <Text>Level 11</Text>
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image src='' />
      </ImageWrapper>
    </Base>
  );
};

export default EvolutionStage;
