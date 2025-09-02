import React, { MouseEvent } from 'react';

import { ReactComponent as CheckSvg } from './svg/check.svg';
import { ReactComponent as HeartSvg } from './svg/heart.svg';
import { ReactComponent as ShoppingSvg } from './svg/shopping.svg';

const iconsMap: Record<string, React.FC> = {
  'check': CheckSvg,
  'heart': HeartSvg,
  'shopping': ShoppingSvg 
}

interface SvgIconProps {
  className?: string;
  name: string;
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
  strokeWidth?: number;
  width?: number;
  height?: number;
}

export const SvgIcon = ({ className, name, ...others }: SvgIconProps) => {
  const Component = iconsMap[name]

  if (!Component) {
    return <div />;
  }

  return React.cloneElement(<Component data-testid="svg-icon" />, {
    className,
    ...others,
  });
}