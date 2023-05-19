import type { Component } from 'react';

import type { ChipProps } from './Chip.types';
import * as Styled from './Chip.styled';

const Chip = ({ icon: Icon, children, ...attributes }: ChipProps) => {
  const IconElement = Icon as unknown as typeof Component;
  return (
    <Styled.Chip {...attributes}>
      {typeof Icon === 'object' ? Icon : <IconElement />}
      {children}
    </Styled.Chip>
  );
};

export default Chip;
