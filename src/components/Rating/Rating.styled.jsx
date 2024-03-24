import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Star = styled.span`
  color: ${({ filled }) => (filled ? 'gold' : '#ccc')};
`;

export const ReviewText = styled.p`
  color: ${theme.colors.lightgray};
  line-height: 1.5;
`;

export const RatingContainer = styled.div`
  font-size: 24px;
`;
