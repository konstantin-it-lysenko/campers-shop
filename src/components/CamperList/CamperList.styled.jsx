import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const CatalogWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LoadMoreBtn = styled.button`
  margin-bottom: 50px;
  padding: 16px 32px;
  border: ${theme.border.onePx};
  border-radius: 200px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.active};
    color: ${theme.colors.white};
    border-color: ${theme.colors.active};
  }
`;
