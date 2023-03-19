import { FC, ReactElement, useEffect, useState } from 'react';
import * as Styles from './styles/StyleSwitcher.styles';

const StyleSwitcher: FC = (): ReactElement => {
  const [night, setNight] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleNightDay = () => {
    setNight(!night);
    setToggled(!toggled);
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  const changeColor = () => {
    if (localStorage.getItem('theme') !== null) {
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <Styles.Container>
      <Styles.ToggleContainer
        onClick={handleNightDay}
        className={`toggle${localStorage.getItem('theme') !== 'light' ? ' night' : ''}`}
      >
        <Styles.Notch className="notch">
          <div className="crater" />
          <div className="crater" />
        </Styles.Notch>
        <div>
          <Styles.Shape size="sm" className="shape sm" />
          <Styles.Shape size="sm" className=" shape sm" />
          <Styles.Shape size="md" className="shape md" />
          <Styles.Shape size="lg" className="shape lg" />
        </div>
      </Styles.ToggleContainer>
    </Styles.Container>
  );
};

export default StyleSwitcher;
