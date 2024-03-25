import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const FormUi = styled.form`
  max-width: 360px;
`;

export const LocationLabel = styled.p`
  font-weight: 500;
  color: ${theme.colors.fontSecondary};
`;

export const LocationSelect = styled.select`
  padding: 18px;
  width: 100%;
  margin-top: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${theme.colors.lightgray};
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
`;

export const LocationOption = styled.option`
  font-size: 16px;
`;

export const FilterTitle = styled.h3`
  margin-top: 32px;
  color: ${theme.colors.fontSecondary};
  font-size: 16px;
  font-weight: 400;
`;

export const EquipTitle = styled.h3`
  margin-top: 16px;
  font-size: 20px;
  line-height: 24px;
`;

export const OptionRadioInput = styled.input`
  display: none;
`;

export const FilterList = styled.ul`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const OptionLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 17.5px;
  height: 50px;
  width: 70px;
  background-color: transparent;
  border: ${theme.border.onePx};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.active};
  }
`;

export const TypeTitle = styled.h3`
  margin-top: 32px;
  font-size: 20px;
  line-height: 24px;
`;

export const SubmitBtn = styled.button`
  margin-top: 64px;
  padding: 16px 60px;
  background-color: ${theme.colors.red};
  border-radius: 200px;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.active};
  }
`;
