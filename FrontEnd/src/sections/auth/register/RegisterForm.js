import * as Yup from "yup";
import { useState } from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  // const { register } = useAuth();

  // const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  // const RegisterSchema = Yup.object().shape({
  //   firstName: Yup.string().required('First name required'),
  //   lastName: Yup.string().required('Last name required'),
  //   email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  //   password: Yup.string().required('Password is required'),
  // });

  // const defaultValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // };

  // const methods = useForm({
  //   resolver: yupResolver(RegisterSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   setError,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = methods;

  // const onSubmit = async (data) => {
  //   try {
  //     await register(data.email, data.password, data.firstName, data.lastName);
  //   } catch (error) {
  //     console.error(error);
  //     reset();
  //     if (isMountedRef.current) {
  //       setError('afterSubmit', { ...error, message: error.message });
  //     }
  //   }
  // };

  return (
    <form>
      <Stack spacing={3}>
        {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}

        <TextField variant="outlined" name="firstName" label="First name" />

        <TextField variant="outlined" name="email" label="Email address" />

        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                  {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Register
        </LoadingButton>
      </Stack>
    </form>
  );
}
