import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, styled, Typography } from "@mui/material";
import { ReactComponent as BarSvg1 } from "src/assets/bar1.svg";
import { ReactComponent as BarSvg3 } from "src/assets/bar3.svg";

const Root = styled(Box)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(15)};
  position: relative;
`;

const StyledBarSvg3 = styled(BarSvg3)`
  position: absolute;
  bottom: 0;
  z-index: -10;
`;

const StyledBarSvg1 = styled(BarSvg1)`
  position: absolute;
  top: 0;
  z-index: -10;
`;

const RoadmapSection = () => {
  return (
    <Root id="roadmap">
      <Typography variant="h4" marginBottom={2}>
        Roadmap
      </Typography>

      <Timeline position="alternate" sx={{ minWidth: 200 }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>Core smart contract</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>Frontend application</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>In-depth testing</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>
            Deploy on Binance Smart chain Testnet
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>Deploy on Binance Smart chain</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector sx={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent>Support other chain</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Snapshot airdrop ?</TimelineContent>
        </TimelineItem>
      </Timeline>

      <StyledBarSvg1 />
      <StyledBarSvg3 />
    </Root>
  );
};

export default RoadmapSection;
