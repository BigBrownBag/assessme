import React, {useState} from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '80px 230px'
    },
    logoWrapper: {
        width: '100%',
        borderBottom: '1px solid #2196F3',
        height: 105,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: 48,
        fontFamily: '"Reenie Beanie"',
        color: '#2196F3'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 64
    },
    btn: {
        marginTop: 32
    },
    secondaryBtn: {
        marginTop: 16,
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)'
        }
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        marginBottom: 16
    }
}))

interface ForgetPassProps {}

export default function ForgetPassPage(props: ForgetPassProps) {
    const classes = useStyles()
    const [state, setState] = useState<string>()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
      <div className={classes.root}>
          <Container component="main" maxWidth="xs">
              <Box
                  className={classes.card}
              >
                  <div className={classes.logoWrapper}>
                      <div className={classes.logo}>
                          Assessme
                      </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className={classes.form}>
                      <CustomTextField
                          className={classes.field}
                          required
                          fullWidth
                          id="username"
                          label="Логин"
                          name="username"
                          autoComplete="username"
                          type="text"
                          autoFocus
                          value={state}
                          onChange={(event) => setState(event.currentTarget.value)}
                      />
                      <CustomButton
                          className={classes.btn}
                          type="submit"
                      >
                          Отправить письмо на почту
                      </CustomButton>
                  </form>
              </Box>
          </Container>
      </div>
    );
}