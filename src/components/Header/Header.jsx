import { Wrapper } from "../../layout/SharedLayout/SharedLayout.styled";
import { HeaderT, Link, NavList } from "./Header.styled";

const Header = () => {
  return (
    <HeaderT>
      <Wrapper>
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
      </Wrapper>
    </HeaderT>
  );
};

export default Header;
