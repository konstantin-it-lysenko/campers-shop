import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const FeaturesWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

export const ServiceItem = styled.li`
  padding: 12px 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  background-color: ${theme.colors.lightgray};
  font-weight: 500;
`;

export const DetailsTitle = styled.h2`
  margin-top: 44px;
  font-size: 20px;
  line-height: 24px;
`;

export const DetailsList = styled.ul`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;
