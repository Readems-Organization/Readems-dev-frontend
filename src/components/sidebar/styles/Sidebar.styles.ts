import { css } from '@emotion/react';
import styled from 'styled-components';

// interface Istyle {
//   style?: SectionProps;
// }

export type SectionProps = {
  styleType?: 'primary' | 'secondary';
};

export const StyledSidebarContainer = styled.div`
  max-width: 180px;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  border: 2px dashed blue;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
`;

export const StyledSidebarList = styled.ul`
  position: relative;
  transform: skewX(0deg);
  margin-top: 20px;
`;

export const StyledSidebarListItem = styled.li<SectionProps>`
  position: relative;
  width: 160px;
  background: #3e3f46;
  padding: 15px;
  transition: 0.5s;

  :hover {
    background: #33a3ee;
    transform: translateX(-50px);
  }

  :hover a {
    color: #fff;
  }

  :hover::before {
    background: #1f5378;
  }
  :hover::after {
    background: #2982b9;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }

  ::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }

  :last-child::after {
    box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
  }

  a {
    color: #999;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: 0.5s;
    text-decoration: none;
  }
`;
