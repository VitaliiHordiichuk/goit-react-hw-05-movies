import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Button = styled(Link)`
  display: block;
  width: 100px;
  color: inherit;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 6px 2px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #5860f7;
    color: white;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const Header = styled.h2`
  margin-top: 80px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: inherit;
`;

export const Genres = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 30px;
`;

export const Additionally = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const AdditionallyLi = styled(NavLink)`
  &:hover {
    color: #c80606;
  }
`;
