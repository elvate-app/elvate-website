import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, styled, Typography } from "@mui/material";

const Root = styled(Box)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing(5)};
  padding-bottom: 0;
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
    </Root>
  );
};

export default RoadmapSection;
