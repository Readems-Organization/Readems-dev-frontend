import { FC, ReactElement, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';

const App: FC = (): ReactElement => {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <h1>Home</h1>

      <Routes>
        <Route path="/" element={<Sidebar visible={navVisible} show={showNavbar} navVisible={navVisible} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
