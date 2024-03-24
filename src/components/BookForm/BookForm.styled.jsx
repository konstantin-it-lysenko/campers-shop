import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const FormUi = styled.form`
  flex-shrink: 0;
  /* width: 100%; */
  padding: 24px;
  border: ${theme.border.onePx};
  border-radius: 10px;
`;

export const BookFormTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
`;

export const BookFormText = styled.p`
  margin-top: 8px;
  color: ${theme.colors.fontSecondary};
`;

export const BookFormList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 18px;
  background-color: ${theme.colors.lightgray};
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const TextArea = styled.textarea`
  height: 64px;
  padding: 18px;
  background-color: ${theme.colors.lightgray};
  border-radius: 10px;
  border: none;
  outline: none;
  resize: none;
`;

export const SubmitBtn = styled.button`
  margin-top: 24px;
  padding: 16px 60px;
  background-color: ${theme.colors.red};
  border-radius: 200px;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.active};
  }
`;
