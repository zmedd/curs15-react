import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin-right: 7px;
`;

export const Container = styled.div`
  padding: 10px 15px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const Details = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  & > p {
    margin-right: 10px;
  }
`;

export const Line = styled.div`
  height: 4px;
  background-color: ${({ color }) => (color ? color : "transparent")};
  border-radius: 2px;
`;
