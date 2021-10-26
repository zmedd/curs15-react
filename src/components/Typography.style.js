import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  text-align: ${({ align }) => (align ? align : "left")};
`;

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 1.05;
  font-weight: 600;
  text-align: ${({ align }) => (align ? align : "left")};
`;

export const H3 = styled.h3`
  font-size: 18px;
  line-height: 1.05;
  font-weight: 600;
  text-align: ${({ align }) => (align ? align : "left")};
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  text-align: ${({ align }) => (align ? align : "left")};
`;

export const Typography = () => {
  return null;
};

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.P = P;
