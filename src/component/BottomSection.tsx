import { Box, styled } from "@mui/material";

const Root = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.background};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const BottomSection = () => {
  return <Root id="medias">elvate.io</Root>;
};

export default BottomSection;
