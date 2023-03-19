import { FC, ReactElement, useState } from 'react';
import { Navbar } from './Navbar';

export const Sidebar: FC = (): ReactElement => {
  const [navVisible, showNavbar] = useState(false);

  return (
    <div>
      <Navbar visible={navVisible} navVisible={navVisible} show={showNavbar} />
    </div>
  );
};
