import styled, { css } from 'styled-components';

interface IProps {
  size: 'sm' | 'md' | 'lg';
}

export const Container = styled.div`
  margin-bottom: 50px;
  .notch {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: yellow;
    position: absolute;
    top: 3px;
    left: 5px;
    box-shadow: 0 0 5px yellow;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .notch > .crater {
    background: burlywood;
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
  }

  .night .crater {
    opacity: 0.4;
  }

  .crater:first-child {
    left: 3px;
    top: 10px;
    height: 10px;
    width: 15px;
    transform: rotate(-45deg);
  }

  .crater:last-child {
    right: 10px;
    top: 15px;
    height: 10px;
    width: 5px;
    transform: rotate(-45deg);
  }

  .shape {
    position: absolute;
    border-radius: 50%;
    background: whitesmoke;
    transition: all 0.3s ease;
  }

  .sm {
    height: 5px;
    width: 20px;
    top: 40%;
    left: 60%;
  }

  .md {
    height: 6px;
    width: 35px;
    top: 10%;
    left: 20%;
    z-index: 2;
  }

  .lg {
    height: 10px;
    width: 50px;
    bottom: 10px;
    left: 24%;
  }

  .toggle.night {
    background-image: linear-gradient(midnightblue, rebeccapurple);
  }

  .night > .notch {
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(80px, 0);
  }

  .night .sm {
    height: 3px;
    width: 3px;
    transform: translate(-18px, 0);
  }

  .night .sm:first-of-type {
    transform: translate(-50px, -8px);
  }

  .night .md {
    height: 6px;
    width: 6px;
    transform: translate(18px, 0);
  }

  .night .lg {
    height: 9px;
    width: 9px;
    transform: translate(3px, 0);
  }

  .night .shape {
    background: lightgray;
    box-shadow: 0 0 10px 2px violet;
  }
`;

export const ToggleContainer = styled.div`
  height: 45px;
  width: 130px;
  border-radius: 50px;
  /* border: 1px solid ${(props) => props.theme.colors.black}; */
  margin: auto;
  background-image: linear-gradient(aqua, skyblue);
  position: relative;
  cursor: pointer;
`;

export const Notch = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
`;

export const Shape = styled.div<IProps>`
  position: absolute;
  border-radius: 50%;
  background: whitesmoke;
  transition: all 0.3s ease;

  ${(props) =>
    props.size === 'sm' &&
    css`
      height: 5px;
      width: 50px;
      top: 50%;
      left: 60%;

      .night {
      }
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      height: 10px;
      width: 75px;
      top: 25%;
      left: 25%;
      z-index: 2;
    `}
  ${(props) =>
    props.size === 'lg' &&
    css`
      height: 15px;
      width: 100px;
      bottom: 20px;
      left: 25%;
    `}
`;
