import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ReviewsWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ReviewerAvatar = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.red};
  font-size: 24px;
  font-weight: 600;
  border-radius: 50%;
  background-color: ${theme.colors.lightgray};
`;

export const ReviewerName = styled.p`
  margin: 16px 0 4px;
  font-size: 18px;
  font-weight: 600;
`;

export const ReviewerComment = styled.p`
  margin-top: 16px;
  color: ${theme.colors.fontSecondary};
`;
