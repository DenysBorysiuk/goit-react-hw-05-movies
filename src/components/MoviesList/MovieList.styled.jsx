import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  //   width: 300px;
  transition: transform 500ms;
  will-change: transform;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const Thumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  heigth: 450px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
