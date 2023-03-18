import styled from 'styled-components';

export const SidebarContainer = styled.div`
  /* position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  border: 2px dashed green;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px; */
`;

export const SidebarListsWrapper = styled.div`
  h4 {
    font-size: 2rem;
    font-weight: bolder;
  }
`;

export const SidebarLists = styled.ul``;

export const SidebarListItems = styled.li`
  padding: 10px;
  margin: 0.5rem 0;
  a {
    font-size: 1.5rem;
  }
`;
