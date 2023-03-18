import React, { FC, ReactElement, useState } from 'react';
import { Navbar } from './Navbar';

// interface ISidebarProps {
//   show: Dispatch<SetStateAction<boolean>>;
//   visible: boolean;
// // }

// const navItems = [
//   {
//     readers: [
//       {
//         path: '/discover',
//         name: 'Discover',
//         icon: '',
//       },
//       {
//         path: '/featured',
//         name: 'Featured',
//         icon: '',
//       },
//       {
//         path: '/readems-readers',
//         name: 'Readems Readers',
//         icon: '',
//       },
//     ],
//     writers: [
//       {
//         path: '/paid',
//         name: 'Go Paid',
//         icon: '',
//       },
//       {
//         path: '/podcasts',
//         name: 'For podcasts',
//         icon: '',
//       },
//       {
//         path: '/bloggers',
//         name: 'For bloggers',
//         icon: '',
//       },
//       {
//         path: '/comic-creators',
//         name: 'For comic creators',
//         icon: '',
//       },
//       {
//         path: '/food-writers',
//         name: 'For food writers',
//         icon: '',
//       },
//       {
//         path: '/local-news',
//         name: 'For local news',
//         icon: '',
//       },
//     ],
//     resources: [
//       {
//         path: '/paid-guide',
//         name: 'Going paid guide',
//         icon: '',
//       },
//       {
//         path: '/resource-center',
//         name: 'Resource center',
//         icon: '',
//       },
//       {
//         path: '/community-programs',
//         name: 'Community&programs',
//         icon: '',
//       },
//       {
//         path: '/help-center',
//         name: 'Help center',
//         icon: '',
//       },
//     ],
//   },
// ];

export const Sidebar: FC = (): ReactElement => {
  const [navVisible, showNavbar] = useState(false);

  return (
    <div>
      <Navbar visible={navVisible} navVisible={navVisible} show={showNavbar} />
    </div>
  );
};
