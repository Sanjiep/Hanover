'use client'

import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.css'
import { toast } from 'react-toastify';

const SignupForm = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Minimum length 6')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    const registerUser = async (values) => {
        try {
            const res = await fetch('http://localhost:4000/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                // Handle non-2xx HTTP responses
                throw new Error('Registration failed');
            }

            const data = await res.json();
            toast.success(data.msg);
        } catch (error) {
            toast.error('Already register');
        }
    };


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            registerUser(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>

            <div className={styles.formfields} onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName"></label>
                <input placeholder='First Name'
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    label="firstName"
                />
                {formik?.errors.firstName}
                <label htmlFor="lastName"></label>
                <input placeholder='Last Name'
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    label="lastName"
                />{formik?.errors.lastName}
                <label htmlFor="email"></label>
                <input placeholder='Email'
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    label="email"
                />{formik?.errors.email}
                <label htmlFor="phoneNumber">Phone Number</label>
                <input placeholder='Phone Number'
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    autoComplete="phoneNumber"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    label="phoneNumber"
                />{formik?.errors.phoneNumber}
                <label htmlFor="password"></label>
                <input placeholder='Password'
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    label="password"
                />{formik?.errors.password}

                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
export default SignupForm