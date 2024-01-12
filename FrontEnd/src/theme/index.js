import React, { useMemo } from "react";

// @mui
import { CssBaseline } from "@mui/material";

import palette from "./palette.js";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      typography: {
        fontFamily: "Raleway",
        fontWeightLight: 600,
        fontWeightRegular: 600,
        fontWeightMedium: 600,
      },
      palette: palette,
      shape: { borderRadius: 8 },
      shadows: shadows.light,
      customShadows: customShadows.light,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
