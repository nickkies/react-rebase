import { createPortal } from 'react-dom';

interface Props {
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootEl = selector && document.getElementById(selector);

  return <>{rootEl ? createPortal(children, rootEl) : children}</>;
};

export default Portal;
