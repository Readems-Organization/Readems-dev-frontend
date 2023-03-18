import styled from 'styled-components';

export default styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  margin: 0;
  place-items: center;
  /* min-width: 320px; */
  min-height: 100vh;
`;
