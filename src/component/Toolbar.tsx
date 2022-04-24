import { Box, Button, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import ElvateIcon from "src/assets/elvate-icon.svg";
import ElvateText from "src/assets/elvate-text.svg";

const StyledToolbar = styled(Toolbar)`
  background-color: ${({ theme }) => theme.palette.background.background};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0;
  z-index: 999;
`;

const ElvateIconImg = styled("img")`
  height: 40px;
`;

const ElvateTextImg = styled("img")`
  margin-left: ${({ theme }) => theme.spacing(2)};
  height: 25px;
`;

const IconContainer = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`;

const handleScroll = (id: string) => {
  const yOffset = -64;
  const element = document.getElementById(id);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const CustomToolbar = () => {
  return (
    <StyledToolbar>
      <IconContainer>
        <ElvateIconImg src={ElvateIcon} />
        <ElvateTextImg src={ElvateText} />
      </IconContainer>
      <Box>
        <Button
          sx={{ margin: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Intro
        </Button>
        <Button sx={{ margin: 1 }} onClick={() => handleScroll("howto")}>
          HOW TO
        </Button>
        <Button sx={{ margin: 1 }} onClick={() => handleScroll("roadmap")}>
          Roadmap
        </Button>
        <Button sx={{ margin: 1 }} onClick={() => handleScroll("medias")}>
          Medias
        </Button>
      </Box>
    </StyledToolbar>
  );
};

export default CustomToolbar;
