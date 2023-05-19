import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: PropsWithChildren) => {
  if (typeof window !== 'object') return null;
  const modalRoot = document.getElementById('modal-portal') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
