import { useEffect, FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { FaAngleLeft, FaAngleRight, FaBars } from 'react-icons/fa';

// import lightTheme from './themes/light';
// import darkTheme from './themes/dark';
// import Container from './themes/components/Container';
import { darkModeAction } from './redux/actions/darkModeAction';
import { Sidebar } from './components/sidebar/Sidebar2';
import { State } from './redux/reducers/index';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  // const { darkMode: themeValue } = useSelector(
  //   (state: State) => state.darkMode,
  // );

  const themeValue = useSelector((state: State) => state.darkMode);

  useEffect(() => {
    if (themeValue) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')));
    }
  }, [themeValue, dispatch]);

  // const themeChanger = (value: string) => {
  //   window.localStorage.setItem('theme', value);
  //   dispatch(darkModeAction(value));
  // };

  // const [visible, show] = useState(false);

  return (
    <BrowserRouter>
      <h1>Home</h1>

      <Routes>
        <Route path='/' element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
