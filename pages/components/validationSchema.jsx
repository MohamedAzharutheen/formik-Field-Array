import * as Yup from 'yup';


export const myValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'To short!')
        .max(10, 'To Length!')
        .required('Enter Your Name!'),
    email: Yup.string()
        .email('INVALID EMAIL')
        .required('Enter Your Email!'),

    mobileNumber: Yup.number()
        .required('Enter Your Mobile Number')
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    password: Yup.string()
        .min(8, 'password min 8 character')
        .max(16, 'password max 16 character')
        .required('Enter Your Password!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        .required('confirm password is required'),
    checkbox1: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions . . .")
});