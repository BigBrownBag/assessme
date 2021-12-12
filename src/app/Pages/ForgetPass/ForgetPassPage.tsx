import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@material-ui/core";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    height: 105,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
      fontSize: 48,
      fontFamily: '"Reenie Beanie"',
      color: '#2196F3'
  }
}))

const theme = createTheme();

export default function ForgetPassPage() {
  const classes = useStyles()
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className={classes.logoWrapper}>
                    <div className={classes.logo}>
                        Assessme
                    </div>
          </div>
          <Typography component="h1" variant="h5">
            Восстановление пароля
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Восстановить
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}