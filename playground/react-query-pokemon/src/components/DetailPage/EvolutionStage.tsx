import styled from '@emotion/styled/macro';

const Base = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: contain;
`;

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

const Divider = styled.div`
  background-color: #d1d5db;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const EvolutionStage: React.FC = () => {
  return (
    <Base>
      <ImageWrapper>
        <Image src='' />
      </ImageWrapper>
      <DividerWrapper>
        <Text color='green'>Level 11</Text>
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image src='' />
      </ImageWrapper>
    </Base>
  );
};

export default EvolutionStage;
