import { Menu } from "@mui/icons-material";
import { Box, Button, styled, Toolbar } from "@mui/material";
import { useState } from "react";
import ElvateIcon from "src/assets/elvate-icon.svg";
import ElvateText from "src/assets/elvate-text.svg";

const StyledToolbar = styled(Toolbar)`
  background-color: ${({ theme }: any) => theme.palette.background.background};
  padding: ${({ theme }: any) => theme.spacing(2)};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  min-height: 5em;
  top: 0;
  z-index: 999;

  @media (max-width: 599px) {
    display: block;
  }
`;

const ButtonsContainer = styled(Box)`
  overflow: hidden;

  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
  }
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

const StyledMenu = styled(Menu)`
  display: none;
  cursor: pointer;
  height: 1.5em;
  width: 1.5em;

  @media (max-width: 599px) {
    display: block;
  }
`;

const CustomToolbar = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const yOffset = -64;
    const element = document.getElementById(id);
    if (!element) return;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setDisplayMenu(false);
  };

  return (
    <StyledToolbar>
      <IconContainer>
        <ElvateIconImg src={ElvateIcon} />
        <ElvateTextImg src={ElvateText} />
        <Box flex={1} />
        <StyledMenu onClick={() => setDisplayMenu(!displayMenu)} />
      </IconContainer>
      <ButtonsContainer height={{ xs: displayMenu ? "auto" : 0, sm: "auto" }}>
        <Button
          sx={{ margin: 1 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setDisplayMenu(false);
          }}
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
      </ButtonsContainer>
    </StyledToolbar>
  );
};

export default CustomToolbar;
