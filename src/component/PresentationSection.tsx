import { Box, Button, styled, Typography } from "@mui/material";
import ElvateText from "src/assets/elvate-text.svg";

const Root = styled(Box)`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 85vh;
  margin-top: 5em;
`;

const ElvateTextImg = styled("img")`
  height: 40px;
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
    </Root>
  );
};

export default PresentationSection;
