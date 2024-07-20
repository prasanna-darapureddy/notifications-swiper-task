import { Box, Paper, Typography } from '@mui/material'
import { styles } from './ValidationStyles'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import addNotification, { Notifications } from 'react-push-notification';

function Validation() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('Required')
                .email('Invalid email address'),

            password: Yup.string()
                .required('Required')
                .min(8, 'Password is too short - should be 8 chars')
                .matches(/[a-zA-Z0-9]/, 'Password contains numbers, Capital letters, lowercase letters  ')
        }),
        onSubmit: values => {
            addNotification({
                title: 'Success',
                subtitle: `${values.email}`,
                message: `Successfully loggedIn`,
                duration: 2000,
                theme: 'light',
                backgroundTop: '#039933',
                colorTop: '#fff',
                backgroundBottom: 'light',
                colorBottom: '#000',
            });
        },
    });

    return (
        <>
            <Notifications />
            <Box sx={styles.main_page}>

                <Paper component={'form'} onSubmit={formik.handleSubmit} sx={styles.form_card}>
                    <Typography variant='h5'>Login Form</Typography>
                    <Box sx={styles.input_container}>
                        <Box component={'input'} type='text' name='email' placeholder='Email Address' sx={styles.user_input} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <Typography variant={'caption'} sx={styles.error}>*{formik.errors.email}</Typography> : null}
                    </Box>
                    <Box sx={styles.input_container}>
                        <Box component={'input'} type='password' name='password' placeholder='Password' sx={styles.user_input} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? <Typography variant={'caption'} sx={styles.error}>*{formik.errors.password}</Typography> : null}
                    </Box>
                    <Box component={'button'} type='submit' sx={styles.login_button}>Login</Box>
                </Paper>
            </Box>
        </>
    )
}

export default Validation