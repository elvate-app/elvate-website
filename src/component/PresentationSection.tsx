import { Box, Button, styled, Typography } from "@mui/material";
import { ReactComponent as BarSvg } from "src/assets/bar2.svg";
import ElvateText from "src/assets/elvate-text.svg";

const Root = styled(Box)`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 90vh;
  margin-top: 5em;
  flex-direction: column;
  align-content: space-between;
  position: relative;
`;

const ElvateTextImg = styled("img")`
  height: 40px;
`;

const StyledBarSvg = styled(BarSvg)`
  position: absolute;
  bottom: 0;
  z-index: -10;
`;

const PresentationSection = () => {
  return (
    <Root>
      <Box>
        <ElvateTextImg src={ElvateText} />
        <Typography>
          A decentralized application to perform DCA strategy.
        </Typography>
        <Box display={"flex"} marginTop={2}>
          <Button
            variant="contained"
            onClick={() => {
              window.open("https://app.elvate.io");
            }}
          >
            Open Application
          </Button>
          <Box margin={1} />
          <Button
            variant="outlined"
            onClick={() => {
              window.open("https://docs.elvate.io");
            }}
          >
            Documentation
          </Button>
        </Box>
      </Box>

      <StyledBarSvg />
    </Root>
  );
};

export default PresentationSection;
