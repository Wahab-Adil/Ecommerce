// @mui
import { Stack, TextField, Box, Button } from "@mui/material";

// ----------------------------------------------------------------------

export default function CreateCategory() {
  return (
    <form>
      <Stack spacing={2}>
        <Box
          display={"flex"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            name="name"
            label="Category Name"
          />
        </Box>
        <TextField type="image" variant="outlined" name="image" label="Image" />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Stack>
    </form>
  );
}
