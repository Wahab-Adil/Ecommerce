import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ColorPreview({ colors, limit = 3, sx }) {
  const renderColors = colors.slice(0, limit);

  const remainingColor = colors.length - limit;

  return (
    <Stack
      component="span"
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={sx}
    >
      {renderColors.map((color, index) => (
        <Box
          key={color + index}
          sx={{
            "&:hover": {
              outline: `3px solid ${color}`,
              outlineOffset: "2px",
            },
            ml: 1.75,
            width: 36,
            height: 36,
            bgcolor: color,
            borderRadius: "50%",
            border: (theme) => `solid 5px ${"white"}`,
            boxShadow: (theme) => theme.shadows[20],
          }}
        />
      ))}

      {colors.length > limit && (
        <Box
          component="span"
          sx={{ typography: "subtitle2" }}
        >{`+${remainingColor}`}</Box>
      )}
    </Stack>
  );
}
