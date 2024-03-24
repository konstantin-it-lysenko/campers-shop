import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Card = styled.li`
  width: 100%;
  max-width: 888px;
  padding: 24px;
  display: flex;
  gap: 20px;
  border: ${theme.border.onePx};
  border-radius: 20px;
`;

export const CardImage = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  line-height: 30px;
`;

export const PriceFavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const CardInfoList = styled.ul`
  margin: 8px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RevLocWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RevWrap = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Rating = styled.span`
  text-decoration: underline;
`;

export const LocWrap = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Description = styled.p`
  max-width: 525px;
  color: ${theme.colors.fontSecondary};
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GeneralInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

export const GeneralInfoItem = styled.li`
  padding: 12px 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  background-color: ${theme.colors.lightgray};
  font-weight: 500;
`;

export const ShowMoreBtn = styled.button`
  padding: 16px 40px;
  background-color: ${theme.colors.red};
  border-radius: 200px;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.active};
  }
`;
