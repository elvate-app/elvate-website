import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import ElvateText from "src/assets/elvate-text.svg";
import ElvateIcon from "src/assets/elvate-icon.svg";
import BarSvg from "src/component/BarSvg";

const Root = styled(Box)`
  padding-bottom: ${({ theme }) => theme.spacing(15)};
  margin-top: ${({ theme }) => theme.spacing(5)};
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 90vh;

  @media (max-width: 800px) {
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media (max-width: 599px) {
    padding-bottom: ${({ theme }) => theme.spacing(5)};
    height: 100vh;
  }
`;

const Container = styled(Grid)`
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  max-width: 75vh;
`;

const ButtonItem = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const PresentationSection = () => {
  return (
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={ElvateText}
      bgImageStyle={{
        height: "80vh",
        minWidth: 250,
        width: "30%",
        maxWidth: 500,
      }}
      strength={300}
    >
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={ElvateIcon}
        bgImageStyle={{
          height: "80vh",
          minWidth: 200,
          maxWidth: 500,
          width: "20%",
          zIndex: -1,
          opacity: 0.1,
        }}
        strength={500}
      >
        <Root>
          <Container container columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1} sm={2} padding={1} textAlign="center">
              <Typography variant="h6">
                An Opensource Decentralized Application to perform DCA strategy.
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
          </Container>
          <BarSvg transform="scale(-1,1)" sx={{ bottom: -1 }} />
        </Root>
      </Parallax>
    </Parallax>
  );
};

export default PresentationSection;
