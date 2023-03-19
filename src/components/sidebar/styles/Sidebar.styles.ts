import styled from 'styled-components';

export type SectionProps = {
  styleType?: 'primary' | 'secondary';
};

export const StyledSidebarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 2rem 1rem 1rem 1rem;
  transition: transform 1s;

  @media only screen and (max-width: 450px) {
    width: 70%;
    top: 65px;
    min-height: calc(100vh -65px);
  }
`;

export const StyledSidebarListWrapper = styled.div`
  margin-top: 20px;
  h4 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const StyledSidebarList = styled.ul`
  a {
    display: flex;
    padding: 10px 15px;
    transition: 0.2s;
    font-size: 1rem;
    margin-top: 10px;
    text-transform: capitalize;
    color: #fff;
  }
`;

export const StyledSidebarListItem = styled.li<SectionProps>`
  position: relative;
  transition: 0.5s all;
`;

export const StyledSidebarButton = styled.button`
  position: absolute;
  transform: translateX(38px);
  top: 20px;
  right: 6px;
  width: 35px;
  height: 35px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryColor};
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
  color: #fff;

  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
