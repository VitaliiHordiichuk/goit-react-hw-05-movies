import { SearchBar, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <SearchBar>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </SearchBar>
  );
};
