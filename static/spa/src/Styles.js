import styled from "styled-components";
import { colors, elevation } from "@atlaskit/theme";

export const Card = styled.div`
  ${elevation["e100"]};
  background: ${colors.N0};
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  margin: 4px 1px;
  height: calc(100vh - 10px);
  box-sizing: border-box;
`;

export const Status = styled.span`
  float: right;
  align-items: center;
  display: inline-flex;
  margin-top: -24px;

  & > span {
    margin-left: 8px;
  }
`;

export const Form = styled.form`
  padding: 8px 0;
`;

export const LoadingContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px dashed;
  ${colors.N30}
`;

export const Text = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

export const Row = styled.div`
  display: flex;
  transition: 0.3s ease all;
  padding: 8px;
  border-bottom: 1px solid ${colors.N30};
`;

export const ScrollContainer = styled.div`
  overflow: auto;
  max-height: calc(100% - 40px);
`;

export const SummaryFooter = styled.div`
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  position: absolute;
  background: ${colors.N10};
  border-top: 1px solid ${colors.N30};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryCount = styled.div`
  padding: 0 12px;
`;

export const SummaryActions = styled.div`
  padding: 8px;
`;
