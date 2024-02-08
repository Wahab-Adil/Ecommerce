import React, { useState } from "react";

// @mui
import { Stack, TextField, Rating } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      <Stack spacing={3}>
        <Rating
          size={"large"}
          sx={{
            "&": {
              color: (theme) => theme.palette.primary.light,
            },
          }}
          name="Reviwes"
          defaultValue={1}
        />

        <TextField
          type="number"
          variant="outlined"
          name="price"
          label="Price"
          placeholder="؋"
        />

        <TextField
          type="number"
          variant="outlined"
          name="totalQty"
          label="Total Quantity"
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Create
        </LoadingButton>
      </Stack>
    </form>
  );
}
