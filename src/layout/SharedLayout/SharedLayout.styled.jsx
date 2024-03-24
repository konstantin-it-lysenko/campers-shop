import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 335px;

  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1024px) {
    max-width: 100%;
    padding: 0 64px;
  }
`;
