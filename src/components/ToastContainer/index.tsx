import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import IToastMessage from '../../DTOS/IToastMessage';

import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessage[];
  show: boolean;
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages, show }) => {
  const messageWithTransactions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });
  return (
    <Container show={show}>
      {messageWithTransactions((style, item) => (
        <Toast key={item.id} message={item} style={{ ...style }} />
      ))}
    </Container>
  );
};

export default ToastContainer;
