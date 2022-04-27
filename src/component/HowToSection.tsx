import { Box, Grid, styled, Typography } from "@mui/material";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Root = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.background};
  padding: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  display: flex;
`;

const StyledScrollAnimation = styled(ScrollAnimation)`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  display: flex;
  height: 100%;
`;

const Container = styled(Grid)`
  max-width: 80rem;
  height: 100%;
`;

const HowToSection = () => {
  const [width] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  return (
    <Root id="howto">
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <Typography variant="h4" marginBottom={2}>
          How To Use
        </Typography>
      </ScrollAnimation>
      <Container container columns={{ xs: 1, md: 3 }}>
        <Grid item xs={1} padding={2}>
          <StyledScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
            style={{ height: "100%" }}
            animateOnce={isMobile}
            offset={300}
          >
            <Typography variant="h5" marginBottom={3} color="primary">
              1. Deposit
            </Typography>
            <Typography textAlign="justify">
              Deposit token to the platform, you can withdraw at any time. All
              your deposit is posseced only by you.
            </Typography>
          </StyledScrollAnimation>
        </Grid>
        <Grid item xs={1} padding={2}>
          <StyledScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            style={{ height: "100%" }}
            animateOnce={isMobile}
            offset={300}
          >
            <Typography variant="h5" marginBottom={3} color="primary">
              2. Subscribe
            </Typography>
            <Typography textAlign="justify">
              Subscribe to any pair of token that you want. You can edit the
              amount at any time.
            </Typography>
          </StyledScrollAnimation>
        </Grid>
        <Grid item xs={1} padding={2}>
          <StyledScrollAnimation
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
            style={{ height: "100%" }}
            animateOnce={isMobile}
            offset={300}
          >
            <Typography variant="h5" marginBottom={3} color="primary">
              3. Enjoy
            </Typography>
            <Typography textAlign="justify">
              Let the application do the job and buy for you each week. You can
              be part of the community by triggering a Pair yourself and gain
              0.05% of all the purchase.
            </Typography>
          </StyledScrollAnimation>
        </Grid>
      </Container>
    </Root>
  );
};

export default HowToSection;
