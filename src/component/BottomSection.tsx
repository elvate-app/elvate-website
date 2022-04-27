import { ExitToApp, GitHub, MenuBook } from "@mui/icons-material";
import { Box, Grid, styled, Typography } from "@mui/material";

const Root = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.background};
  padding: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: 30vh;
`;

const Container = styled(Grid)`
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  align-items: center;
  max-width: 80vh;
  display: flex;
`;

const BottomSection = () => {
  return (
    <Root id="medias">
      <Container container columns={{ xs: 1, sm: 3 }}>
        <Grid
          item
          xs={1}
          textAlign="center"
          onClick={() => {
            window.open("https://app.elvate.io");
          }}
          sx={{ cursor: "pointer", marginTop: 2 }}
        >
          <ExitToApp />
          <Typography>Elvate App</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          textAlign="center"
          onClick={() => {
            window.open("https://docs.elvate.io");
          }}
          sx={{ cursor: "pointer", marginTop: 2 }}
        >
          <MenuBook />
          <Typography>Documentation</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          textAlign="center"
          onClick={() => {
            window.open("https://github.com/elvate-app");
          }}
          sx={{ cursor: "pointer", marginTop: 2 }}
        >
          <GitHub />
          <Typography>GitHub</Typography>
        </Grid>

        <Typography margin={8}>elvate.io / beta</Typography>
      </Container>
    </Root>
  );
};

export default BottomSection;
