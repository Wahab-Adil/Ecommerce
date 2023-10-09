// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// layouts
// import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// components
// import Page from '../../components/Page';import Page from '../../components/Page';

// sections
import { NewPasswordForm } from '../../sections/auth/new-password';
// assets
// import { SentIcon } from '../../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function NewPassword() {
  return (
   
      

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          {/* <SentIcon sx={{ mb: 5, mx: 'auto', height: 120 }} /> */}

          {/* <Typography variant="h3" gutterBottom>
            Request sent successfully!
          </Typography> */}

          <Typography sx={{ color: 'text.secondary' }}>
            We'll sent a 6-digit confirmation email to your email.
            <br />
            Please enter your Email and past the code in below box to verify your email.
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>
            <NewPasswordForm />
          </Box>

          <Typography variant="body2">
            Don’t have a code? &nbsp;
            <Link variant="subtitle2" onClick={() => {}}>
              Resend code
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
  );
}