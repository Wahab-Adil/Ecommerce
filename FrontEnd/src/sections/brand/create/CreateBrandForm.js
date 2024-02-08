// @mui
import { Stack, TextField, Box, Button } from "@mui/material";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  return (
    <form>
      <Stack spacing={3}>
        <Box
          display={"flex"}
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            name="name"
            label="Brand Name"
          />
          <Button sx={{ padding: "15px 40px" }} variant="contained">
            Create
          </Button>
        </Box>
      </Stack>
    </form>
  );
}
