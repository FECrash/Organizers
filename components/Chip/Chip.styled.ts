import styled from '@emotion/styled';
import type { ChipProps } from './Chip.types';

export const Chip = styled.span<ChipProps>`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 5px;

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};

  svg {
    margin-right: 3px;
    vertical-align: middle;
  }
`;
