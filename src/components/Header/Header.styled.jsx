import styled from "@emotion/styled";
import { theme } from "../../constants/theme";
import { NavLink } from "react-router-dom";

export const HeaderT = styled.header`
  padding: 24px 0;
  background-color: ${theme.colors.red};
  color: ${theme.colors.lightgray};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 20px;
  font-weight: 600;

  transition: color ease-in-out 0.3s;
  &:hover {
    color: ${theme.colors.fontPrimary};
  }
  &.active {
    color: ${theme.colors.fontPrimary};
    border-bottom: ${theme.border.twoPx};
  }
`;
