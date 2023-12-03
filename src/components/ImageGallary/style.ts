import { Box, Button } from "@mui/material";
import { CSSObject, styled } from "@mui/material/styles";

export const ImageGroupWrapper = styled(Box)(
  (): CSSObject => ({
    width: "100%",
    height: "50%",
    padding: "5px",
    position: "relative",
  })
);

export const ButtonWrapper = styled(Button)(
  (): CSSObject => ({ fontSize: "14px", fontWeight: "bold", position: "absolute", right: "50px", bottom: "50px" })
);

export const DialogInnerBox = styled(Button)((): CSSObject => ({ display: "flex", flexWrap: "wrap", padding: "10px" }));
