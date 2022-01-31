import styled from '@emotion/styled/macro';
import Portal from './Portal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-widht: 456px;
  position: relative;
  width: 100%;
`;

const Modal: React.FC<Props> = ({ children, isOpen, onClose, selector }) => {
  return (
    <>
      {isOpen && (
        <Portal selector={selector}>
          <Overlay>
            <Dim onClick={onClose} />
            <Container>{children}</Container>
          </Overlay>
        </Portal>
      )}
    </>
  );
};

export default Modal;
