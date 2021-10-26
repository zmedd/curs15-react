import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ fluid }) => (fluid ? "100%" : "1200px")};
  width: 100%;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Row = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: ${({ sizes }) =>
    sizes && sizes.lg ? `${sizes.lg * 8.3333}%` : "auto"};
  margin-left: ${({ offset }) =>
    offset && offset.lg ? `${offset.lg * 8.3333}%` : 0};
  @media (max-width: 1200px) {
    width: ${({ sizes }) =>
      sizes && sizes.md ? `${sizes.md * 8.3333}%` : "auto"};
    margin-left: ${({ offset }) =>
      offset && offset.md ? `${offset.md * 8.3333}%` : 0};
  }
  @media (max-width: 767px) {
    width: ${({ sizes }) =>
      sizes && sizes.sm ? `${sizes.sm * 8.3333}%` : "auto"};
    margin-left: ${({ offset }) =>
      offset && offset.sm ? `${offset.sm * 8.3333}%` : 0};
  }
`;

export const Spacer = styled.div`
  height: ${({ size }) => (size ? `${size}px` : 0)};
  width: 100%;
`;

export const Grid = () => {
  return null;
};

Grid.Container = Container;
Grid.Row = Row;
Grid.Col = Col;
Grid.Spacer = Spacer;
