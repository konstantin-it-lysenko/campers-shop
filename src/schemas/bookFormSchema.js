import * as yup from 'yup';

const bookFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(25, 'Maximum name length is 25 symbols')
        .required('Name is required'),
    email: yup
        .string()
        .email('Invalid email format')
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Invalid email format'
        )
        .required('Email is required'),
    date: yup
        .string()
        .required('Date is required'),
    comment: yup
        .string()
        .max(150, 'Maximum comment length is 150 symbols')
        .required('Comment is required')
});

export default bookFormSchema;
