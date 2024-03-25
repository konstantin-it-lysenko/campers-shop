import { HeaderT, Link, NavList } from './Header.styled';

const Header = () => {
  return (
    <HeaderT>
      <nav>
        <NavList>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="catalog">CATALOG</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORITES</Link>
          </li>
        </NavList>
      </nav>
    </HeaderT>
  );
};

export default Header;
