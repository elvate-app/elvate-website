import { Box, Grid, styled, Typography } from "@mui/material";

const Root = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.background};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(5)};
`;

const Item = styled(Grid)`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled(Grid)`
  max-width: 80rem;
  height: 100%;
`;

const HowToSection = () => {
  return (
    <Root id="howto">
      <Typography variant="h4" marginBottom={2}>
        How To Use
      </Typography>
      <Container container columns={{ xs: 1, md: 3 }}>
        <Grid item xs={1} padding={2}>
          <Item>
            <Typography variant="h5" marginBottom={3} color="primary">
              1. Deposit
            </Typography>
            <Typography textAlign="justify">
              Deposit token to the platform, you can withdraw at any time. All
              your deposit is posseced only by you.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={1} padding={2}>
          <Item>
            <Typography variant="h5" marginBottom={3} color="primary">
              2. Subscribe
            </Typography>
            <Typography textAlign="justify">
              Subscribe to any pair of token that you want. You can edit the
              amount at any time.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={1} padding={2}>
          <Item>
            <Typography variant="h5" marginBottom={3} color="primary">
              3. Enjoy
            </Typography>
            <Typography textAlign="justify">
              Let the application do the job and buy for you each week. You can
              be part of the community by triggering a Pair yourself and gain
              0.05% of all the purchase.
            </Typography>
          </Item>
        </Grid>
      </Container>
    </Root>
  );
};

export default HowToSection;
