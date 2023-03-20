import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import * as Styles from './styles/Sidebar.styles';
import { FaAngleLeft, FaAngleRight, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import StyleSwitcher from '../styleSwitcher/StyleSwitcher';

interface ISidebarProps {
  show: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  navVisible: boolean;
}

const sidebarItems = [
  {
    readers: [
      {
        path: '/discover',
        name: 'Discover',
        icon: '',
        zIndex: 13,
      },
      {
        path: '/featured',
        name: 'Featured',
        icon: '',
        zIndex: 12,
      },
      {
        path: '/readems-readers',
        name: 'Readems Readers',
        icon: '',
        zIndex: 11,
      },
    ],
    writers: [
      {
        path: '/paid',
        name: 'Go Paid',
        icon: '',
        zIndex: 10,
      },
      {
        path: '/podcasts',
        name: 'For podcasts',
        icon: '',
        zIndex: 9,
      },
      {
        path: '/bloggers',
        name: 'For bloggers',
        icon: '',
        zIndex: 8,
      },
      {
        path: '/comic-creators',
        name: 'For comic creators',
        icon: '',
        zIndex: 7,
      },
      {
        path: '/food-writers',
        name: 'For food writers',
        icon: '',
        zIndex: 6,
      },
      {
        path: '/local-news',
        name: 'For local news',
        icon: '',
        zIndex: 5,
      },
    ],
    resources: [
      {
        path: '/paid-guide',
        name: 'Going paid guide',
        icon: '',
        zIndex: 4,
      },
      {
        path: '/resource-center',
        name: 'Resource center',
        icon: '',
        zIndex: 3,
      },
      {
        path: '/community-programs',
        name: 'Community&programs',
        icon: '',
        zIndex: 2,
      },
      {
        path: '/help-center',
        name: 'Help center',
        icon: '',
        zIndex: 1,
      },
    ],
  },
];

export const Sidebar: FC<ISidebarProps> = ({ show, visible, navVisible }): ReactElement => {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <Styles.StyledSidebarContainer className={visible ? '' : 'navbar'}>
        <StyleSwitcher />

        <Styles.StyledSidebarButton type="button" onClick={() => show(!visible)}>
          {visible ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />}
        </Styles.StyledSidebarButton>
        <div>
          <Styles.StyledSidebarListWrapper>
            <h4>Readers</h4>
            {sidebarItems.map((items) =>
              items.readers.map((item) => (
                <Styles.StyledSidebarList>
                  <NavLink
                    to={item.path}
                    className={
                      !navVisible
                        ? 'page outer-shadow hover-in-shadow'
                        : 'page page-with-navbar outer-shadow hover-in-shadow'
                    }
                  >
                    <Styles.StyledSidebarListItem>{item.name}</Styles.StyledSidebarListItem>
                  </NavLink>
                </Styles.StyledSidebarList>
              ))
            )}
          </Styles.StyledSidebarListWrapper>
          <Styles.StyledSidebarListWrapper>
            <h4>Writers</h4>
            {sidebarItems.map((items) =>
              items.writers.map((item) => (
                <Styles.StyledSidebarList>
                  <NavLink
                    to={item.path}
                    className={
                      !navVisible
                        ? 'page outer-shadow hover-in-shadow'
                        : 'page page-with-navbar outer-shadow hover-in-shadow'
                    }
                  >
                    <Styles.StyledSidebarListItem>{item.name}</Styles.StyledSidebarListItem>
                  </NavLink>
                </Styles.StyledSidebarList>
              ))
            )}
          </Styles.StyledSidebarListWrapper>
          <Styles.StyledSidebarListWrapper>
            <h4>Resources</h4>
            {sidebarItems.map((items) =>
              items.resources.map((item) => (
                <Styles.StyledSidebarList>
                  <NavLink
                    to={item.path}
                    className={
                      !navVisible
                        ? 'page outer-shadow hover-in-shadow'
                        : 'page page-with-navbar outer-shadow hover-in-shadow'
                    }
                  >
                    <Styles.StyledSidebarListItem>{item.name}</Styles.StyledSidebarListItem>
                  </NavLink>
                </Styles.StyledSidebarList>
              ))
            )}
          </Styles.StyledSidebarListWrapper>
        </div>
        {/* <div>
          <StyleSwitcher />
        </div> */}
      </Styles.StyledSidebarContainer>
    </>
  );
};
