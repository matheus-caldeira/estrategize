import styled from 'styled-components';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  padding-bottom: 50px;
  min-height: 100vh;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: relative;
  width: 100%;
  padding: 0 10%;

  margin-top: 60px;

  button {
    border: none;
    font-size: 0.9rem;
    background: none;
    margin: 0 8px;
    padding-bottom: 5px;

    &.active {
      color: ${props => props.theme.colors.a.color};
      border-bottom: 2px solid ${props => props.theme.colors.a.color};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 40px 10%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  section {
    padding: 0;
  }
`;
