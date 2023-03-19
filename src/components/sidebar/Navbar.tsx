import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
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

export const Navbar: FC<INavbarProps> = ({ visible, show, navVisible }): ReactElement => {
  return (
    <>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <Styles.StyledSidebarContainer className={visible ? '' : 'navbar'}>
        <button type="button" onClick={() => show(!visible)} className="nav-btn">
          {visible ? <FaAngleLeft size={30} /> : <FaAngleRight size={30} />}
        </button>
        <Styles.StyledSidebarList>
          <div>
            <h4>Readers</h4>
            {navItems.map((items) =>
              items.readers.map((item) => (
                <ul>
                  <Styles.StyledSidebarListItem
                    className={!navVisible ? 'page' : 'page page-with-navbar'}
                    style={{ zIndex: item.zIndex }}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.StyledSidebarListItem>
                </ul>
              ))
            )}
          </div>
          <div>
            <h4>Writers</h4>
            {navItems.map((items) =>
              items.writers.map((item) => (
                <ul>
                  <Styles.StyledSidebarListItem
                    className={!navVisible ? 'page' : 'page page-with-navbar'}
                    style={{ zIndex: item.zIndex }}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.StyledSidebarListItem>
                </ul>
              ))
            )}
          </div>
          <div>
            <h4>Resources</h4>
            {navItems.map((items) =>
              items.resources.map((item) => (
                <ul>
                  <Styles.StyledSidebarListItem
                    className={!navVisible ? 'page' : 'page page-with-navbar'}
                    style={{ zIndex: item.zIndex }}
                  >
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Styles.StyledSidebarListItem>
                </ul>
              ))
            )}
          </div>
        </Styles.StyledSidebarList>
      </Styles.StyledSidebarContainer>
    </>
  );
};
