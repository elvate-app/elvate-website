import { Box, Button, Grid, styled, Typography } from "@mui/material";
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

const ButtonItem = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const PresentationSection = () => {
  return (
    <Root>
      <Box>
        <Grid
          container
          columns={{ xs: 1, sm: 2 }}
          paddingLeft={5}
          paddingRight={5}
        >
          <Grid item xs={1} sm={2} padding={1}>
            <ElvateTextImg src={ElvateText} />
            <Typography>
              A decentralized application to perform DCA strategy.
            </Typography>
          </Grid>
          <ButtonItem item xs={1} padding={1} paddingTop={{ xs: 3, sm: 1 }}>
            <Button
              variant="contained"
              onClick={() => {
                window.open("https://app.elvate.io");
              }}
              fullWidth
            >
              Open Application
            </Button>
          </ButtonItem>
          <ButtonItem item xs={1} padding={1}>
            <Button
              variant="outlined"
              onClick={() => {
                window.open("https://docs.elvate.io");
              }}
              fullWidth
            >
              Documentation
            </Button>
          </ButtonItem>
        </Grid>
      </Box>

      <StyledBarSvg />
    </Root>
  );
};

export default PresentationSection;
