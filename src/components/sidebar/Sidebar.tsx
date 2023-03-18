import React, { FC, ReactElement } from 'react';
import * as Styles from './styles/Sidebar.styles';

// let styles: React.CSSProperties | undefined = '--i:1';
export const Sidebar: FC = (): ReactElement => {
  return (
    <Styles.StyledSidebarContainer>
      <Styles.StyledSidebarList>
        <Styles.StyledSidebarListItem style={{ zIndex: 6 }}>
          <a href='#'>Home</a>
        </Styles.StyledSidebarListItem>
        <Styles.StyledSidebarListItem style={{ zIndex: 5 }}>
          <a href='#'>About</a>
        </Styles.StyledSidebarListItem>
        <Styles.StyledSidebarListItem style={{ zIndex: 4 }}>
          <a href='#'>Services</a>
        </Styles.StyledSidebarListItem>
        <Styles.StyledSidebarListItem style={{ zIndex: 3 }}>
          <a href='#'>Portfolio</a>
        </Styles.StyledSidebarListItem>
        <Styles.StyledSidebarListItem style={{ zIndex: 2 }}>
          <a href='#'>Our Team</a>
        </Styles.StyledSidebarListItem>
        <Styles.StyledSidebarListItem style={{ zIndex: 1 }}>
          <a href='#'>Contact</a>-
        </Styles.StyledSidebarListItem>
      </Styles.StyledSidebarList>
    </Styles.StyledSidebarContainer>
  );
};
