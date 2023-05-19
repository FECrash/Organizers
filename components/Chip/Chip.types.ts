import { CSSProperties, HTMLAttributes } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
}
