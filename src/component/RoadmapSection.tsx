import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, styled, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
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
  return (
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
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
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
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
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
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
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
  );
};

export default RoadmapSection;
