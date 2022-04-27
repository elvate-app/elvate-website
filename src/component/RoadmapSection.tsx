import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, styled, Typography } from "@mui/material";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-parallax";
import BackgroundSvg1 from "src/assets/background1.svg";
import BackgroundSvg2 from "src/assets/background2.svg";
import BarSvg from "src/component/BarSvg";

const Root = styled(Box)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(15)};
  position: relative;
`;

const RoadmapSection = () => {
  const [width] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  return (
    <Parallax
      blur={3}
      bgImage={BackgroundSvg1}
      bgImageStyle={{
        height: "100vh",
        width: "90%",
        zIndex: -9,
        opacity: isMobile ? 0 : 0.05,
        marginTop: "3em",
      }}
      strength={400}
    >
      <Parallax
        blur={1}
        bgImage={BackgroundSvg2}
        bgImageStyle={{
          height: "100vh",
          width: "60%",
          zIndex: -8,
          opacity: isMobile ? 0 : 0.1,
          marginTop: "5em",
        }}
        strength={300}
      >
        <Root id="roadmap">
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <Typography variant="h4" marginBottom={2}>
              Roadmap
            </Typography>
          </ScrollAnimation>

          <Timeline position="alternate" sx={{ minWidth: 200 }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  Core smart contract
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOnce={true}
                >
                  Frontend application
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  In-depth testing
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOnce={true}
                >
                  Deploy on Binance Smart chain Testnet
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  Deploy on Binance Smart chain
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector sx={{ height: 60 }} />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOnce={true}
                >
                  Support other chain
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
              </TimelineSeparator>
              <TimelineContent>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  Snapshot airdrop ?
                </ScrollAnimation>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <BarSvg transform="scale(1,-1)" sx={{ top: -1 }} />
          <BarSvg transform="scale(-1,1)" sx={{ bottom: -1 }} />
        </Root>
      </Parallax>
    </Parallax>
  );
};

export default RoadmapSection;
