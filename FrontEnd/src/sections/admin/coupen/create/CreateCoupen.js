// @mui
import { Stack, TextField, Box, Button, FormLabel } from "@mui/material";

// ----------------------------------------------------------------------

export default function CreateCoupon() {
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
            label="Coupon Code"
            placeholder=" "
          />
        </Box>
        <FormLabel>Start-Date</FormLabel>
        <TextField type="date" name="Start-Date" />
        <FormLabel>End-Date</FormLabel>
        <TextField type="date" name="End-Date" />
        <FormLabel>Discount</FormLabel>
        <TextField type="number" name="Discount" />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Stack>
    </form>
  );
}
