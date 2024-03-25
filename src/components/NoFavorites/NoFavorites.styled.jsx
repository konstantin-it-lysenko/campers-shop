import styled from '@emotion/styled';
import { theme } from 'constants/theme';
import { Link } from 'react-router-dom';

export const NoContent = styled.p`
  margin-top: 140px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;

export const BackLink = styled(Link)`
  padding: 14px 20px;
  display: block;
  margin: 60px auto;
  width: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  background-color: ${theme.colors.red};
  border-radius: 160px;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.active};
  }
`;
