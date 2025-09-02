import React, { MouseEvent } from 'react'

import CheckSvg from './svg/check.svg?react'
import ChevronDown from './svg/chevron-down.svg?react'
import StarFull from './svg/star-full.svg?react'
import Star from './svg/star.svg?react'
import Heart1 from './svg/heart.svg?react'

const iconsMap: Record<string, React.FC> = {
  'check': CheckSvg,
  'chevron-down': ChevronDown,
  'star-full': StarFull,
  'star': Star,
  'heart1': Heart1,
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