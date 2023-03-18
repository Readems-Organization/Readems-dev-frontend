import { FC, ReactElement, ReactNode } from 'react';
import { StyledAvatar } from './Avatar.styles';

interface IAvatarProps {
  children: ReactNode;
}

export const Avatar: FC<IAvatarProps> = ({ children }): ReactElement => {
  return <StyledAvatar>{children}</StyledAvatar>;
};

export default Avatar;
