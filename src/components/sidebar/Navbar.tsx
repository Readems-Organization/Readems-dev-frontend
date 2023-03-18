import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { FaAngleLeft, FaAngleRight, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import * as Styles from './styles/Sidebar2.styles';

interface INavbarProps {
  show: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  navVisible: boolean;
}

const navItems = [
  {
    readers: [
      {
        path: '/discover',
        name: 'Discover',
        icon: '',
      },
      {
        path: '/featured',
        name: 'Featured',
        icon: '',
      },
      {
        path: '/readems-readers',
        name: 'Readems Readers',
        icon: '',
      },
    ],
    writers: [
      {
        path: '/paid',
        name: 'Go Paid',
        icon: '',
      },
      {
        path: '/podcasts',
        name: 'For podcasts',
        icon: '',
      },
      {
        path: '/bloggers',
        name: 'For bloggers',
        icon: '',
      },
      {
        path: '/comic-creators',
        name: 'For comic creators',
        icon: '',
      },
      {
        path: '/food-writers',
        name: 'For food writers',
        icon: '',
      },
      {
        path: '/local-news',
        name: 'For local news',
        icon: '',
      },
    ],
    resources: [
      {
        path: '/paid-guide',
        name: 'Going paid guide',
        icon: '',
      },
      {
        path: '/resource-center',
        name: 'Resource center',
        icon: '',
      },
      {
        path: '/community-programs',
        name: 'Community&programs',
        icon: '',
      },
      {
        path: '/help-center',
        name: 'Help center',
        icon: '',
      },
    ],
  },
];

export const Navbar: FC<INavbarProps> = ({
  visible,
  show,
  navVisible,
}): ReactElement => {
  return (
    <>
      <div className='mobile-nav'>
        <button className='mobile-nav-btn' onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={visible ? '' : 'navbar'}>
        <button
          type='button'
          onClick={() => show(!visible)}
          className='nav-btn'
        >
          {visible ? <FaAngleLeft size={30} /> : <FaAngleRight size={30} />}
        </button>
        <Styles.SidebarContainer>
          <Styles.SidebarListsWrapper>
            <h4>Readers</h4>
            {navItems.map((items) =>
              items.readers.map((item) => (
                <ul>
                  <Styles.SidebarListItems
                    className={!navVisible ? 'page' : 'page-with-navbar'}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.SidebarListItems>
                </ul>
              )),
            )}
          </Styles.SidebarListsWrapper>
          <Styles.SidebarListsWrapper>
            <h4>Writers</h4>
            {navItems.map((items) =>
              items.writers.map((item) => (
                <ul>
                  <Styles.SidebarListItems
                    className={!navVisible ? 'page' : 'page-with-navbar'}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.SidebarListItems>
                </ul>
              )),
            )}
          </Styles.SidebarListsWrapper>
          <Styles.SidebarListsWrapper>
            <h4>Resources</h4>
            {navItems.map((items) =>
              items.resources.map((item) => (
                <ul>
                  <Styles.SidebarListItems
                    className={!navVisible ? 'page' : 'page-with-navbar'}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.SidebarListItems>
                </ul>
              )),
            )}
          </Styles.SidebarListsWrapper>
        </Styles.SidebarContainer>
      </nav>
    </>
  );
};
