import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CustomBox = styled.div`
  width: 50%;
  padding-left: 10px;
  height: 85vh;
  overflow: scroll;
  flex-flow: wrap;
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
