import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(46, 47, 66, 0.4);
  z-index: 2;
  transition: opacity ${theme.transition.cubic},
    visibility ${theme.transition.cubic};
`;

export const Modal = styled.div`
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 982px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: transform ${theme.transition.cubic};
`;

export const NameCrossWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CamperTitle = styled.h2`
  font-size: 24px;
  line-height: 30px;
`;

export const RevLocWrap = styled.div`
  margin-top: 8px;
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

export const Price = styled.p`
  margin-top: 16px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
`;

export const ModalScrollWrap = styled.div`
  padding-right: 16px;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.lightgray};
    border-radius: 8px;
  }
`;

export const CamperImgList = styled.ul`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CamperImg = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Description = styled.p`
  margin-top: 24px;
  color: ${theme.colors.fontSecondary};
`;

export const AdditionInfoList = styled.ul`
  margin-top: 44px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const AdditionBtn = styled.button`
  padding-bottom: 30px;
  position: relative;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  &:hover::after {
    position: absolute;
    content: '';
    top: 34px;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: ${theme.colors.red};
  }

  &:active {
    color: ${theme.colors.red};
  }
`;
