import styled from 'styled-components';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  z-index: 10;
  padding-bottom: 50px;
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
`;

export const Project = styled.div`
  width: 100vw;
  margin-bottom: 2rem;

  &:nth-child(2n) {
    background: ${props => props.theme.colors.background.secondary};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .name {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;

    h1 {
      flex: 1;
    }

    button,
    a {
      color: ${props => props.theme.colors.a.color};
      background-color: none;
      border: 2px solid ${props => props.theme.colors.a.color};
      border-radius: 16px;
      padding: 5px 8px;
      background: none;

      & + button,
      & + a {
        margin-left: 10px;
        background-color: ${props => props.theme.colors.a.color};
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`;
