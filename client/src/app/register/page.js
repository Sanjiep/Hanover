'use client'

import React from 'react'
import { useState } from 'react'
import { Input, Checkbox } from '@nextui-org/react'
import PageLayout from '@/components/pageLayout/page'
import Link from 'next/link'
import './styles.css'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const SignupForm = () => {
    const router = useRouter()

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
        .required('First name required'),

        lastName: Yup.string()
        .required('Last name required'),

        phoneNumber: Yup.string()
        // .matches(/^\d+$/, 'Phone number should only contain digits')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
        
        password: Yup.string()
            .required('Password required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            ),
        confirmPassword: Yup.string()
            .required('Confirm password required')
            .oneOf([Yup.ref('password'), null], "Passwords doesn't match!"),
            
        email: Yup.string().email('Invalid email').required('Email required'),
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
                const errorData = await res.json(); // Assuming the server returns JSON with an error message
                throw new Error(errorData.msg || 'Registration failed!');
            }
            
            const data = await res.json();
            toast.success(data.msg);
            router.push('/login')
        } catch (error) {
            toast.error(error.message || 'Something is wrong!!');
        }
    };


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            registerUser(values)
        },
    });

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleKeyPress = (event) => {
        // Allow only numeric characters
        const isNumeric = /^[0-9]*$/.test(event.key);
        if (!isNumeric) {
            event.preventDefault();
        }
    };

    const handleInputChange = (event) => {
        // Limit the input to 15 characters
        const inputValue = event.target.value.slice(0, 10);
        formik.setFieldValue('phoneNumber', inputValue);
    };


    return (
        <form onSubmit={formik.handleSubmit}>

            <div className="h-full">
                <div className="dark:bg-slate-900 flex h-full items-center">
                    <div className="w-full max-w-xl mx-auto">
                        <div className="p-4 mt-3 sm:p-5">
                            <div className="text-center">
                                <Link href='/'><img
                                    className="mx-auto h-24 w-auto"
                                    src="hanover.svg"
                                    alt="Hanover"
                                />
                                </Link>
                                <h1 className="block text-2xl mt-5 font-bold text-gray-800 dark:text-white">Sign up</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Already have an account?
                                    <Link className="text-red-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/login"> Sign in here
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-5">
                                <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                    </svg>
                                    Sign up with Google
                                </button>

                                <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">Or</div>


                                {/* Form starts */}
                                <div class="grid grid-cols-2 gap-4">

                                    <div>
                                        <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First name{formik.touched.firstName && formik.errors.firstName && <span className="text-red-500">*</span>}</label>
                                        <div className="relative">
                                            <input type="text" placeholder='First name' id="firstName" onChange={formik.handleChange}
                                                value={formik.values.firstName}
                                                onBlur={formik.handleBlur}
                                                label='firstName'
                                                name="firstName"
                                                className={`py-3 px-4 block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 ${formik.errors.firstName && formik.touched.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`} required />
                                        </div>
                                        {formik.errors.firstName && formik.touched.firstName && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.firstName}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last name{formik.touched.lastName && formik.errors.lastName && <span className="text-red-500">*</span>}</label>
                                        <div className="relative">
                                            <input type="text" placeholder='Last Name' id="lastName"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.lastName}
                                                label='lastName'
                                                name="lastName"
                                                className={`py-3 px-4 capitalize block w-full border-gray-200 border-1 rounded-lg ${formik.errors.lastName && formik.touched.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} text-sm focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`} required />

                                        </div>
                                        {formik.errors.lastName && formik.touched.lastName && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.lastName}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                                            Email{formik.touched.email && formik.errors.email && <span className="text-red-500">*</span>}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                id="email"
                                                name="email"
                                                label="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                className={`py-3 px-4 block w-full border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none ${formik.errors.email && formik.touched.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                                required
                                                aria-describedby="email-error"
                                            /> {formik.errors.email && formik.touched.email && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.email}</div>}
                                            <div className="invisible absolute inset-y-0 end-0 flex items-center pointer-events-none pe-2">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-invisible="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                            {/* <p className="invisible text-xs text-red-600 mt-2" id="email-error">
                                                    Please include a valid email address so we can get back to you
                                                </p> */}
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm mb-2 dark:text-white">Phone Number{formik.touched.phoneNumber && formik.errors.phoneNumber && <span className="text-red-500">*</span>}</label>
                                        <div className="relative">
                                            <input type="number" placeholder='Phone number' id="phoneNumber" name="phoneNumber"
                                                onChange={handleInputChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.phoneNumber}
                                                label='phoneNumber'
                                                onKeyPress={handleKeyPress}
                                                className={`py-3 px-4 block appearance-none w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`} required aria-describedby="phoneNumber-error" />
                                            {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.phoneNumber}</div>}
                                        </div>
                                    </div>


                                </div>



                                <div className="grid gap-y-3 pt-3">

                                    <div className='relative'>
                                        <label htmlFor="password" variant="bordered" className="block text-sm mb-2 dark:text-white">Password{formik.touched.password && formik.errors.password && <span className="text-red-500">*</span>}</label>
                                        <div className="grid">

                                            <div className="flex items-center">
                                                <input placeholder='Enter your password' label="password" id="password" name="password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    className={`py-3 px-4 block w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-gray-500 disabled:opacity-50 ${formik.errors.password && formik.touched.password ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${isVisible ? 'text-black' : null}`} required aria-describedby="password error" type={isVisible ? 'text' : 'password'}
                                                />

                                                <button className="focus:outline-none absolute right-4" type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <svg className="text-2xl opacity-80 text-default-400 pointer-events-none" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Edit / Show">
                                                                <g id="Vector">
                                                                    <path d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    ) : (
                                                        <svg className="text-2xl opacity-80 text-default-400 pointer-events-none" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Edit / Hide">
                                                                <path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {formik.errors.password && formik.touched.password && (<div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.password}</div>
                                            )}

                                            <div className="invisible absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">



                                                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-invisible="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* <p className="invisible text-xs text-red-600 mt-1" id="passworde rror">8+ characters required</p> */}
                                    </div>


                                    <div className='relative'>
                                        <label htmlFor="confirmPassword" variant="bordered" className="block text-sm mb-2 dark:text-white">Confirm Password{formik.touched.confirmPassword && formik.errors.confirmPassword && <span className="text-red-500">*</span>}</label>
                                        <div className="grid">

                                            <div className="flex items-center">
                                                <input placeholder='Confirm your password' label="confirmPassword" id="confirmPassword"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.confirmPassword}
                                                    name="confirmPassword" className={`py-3 px-4 block w-full border-gray-200 border-1 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${isVisible ? 'text-black' : null}`} required aria-describedby="confirmPassword-error" type={isVisible ? 'text' : 'password'}
                                                />

                                                <button className="focus:outline-none absolute right-4" type="button" onClick={toggleVisibility}>
                                                    {isVisible ? (
                                                        <svg className="text-2xl opacity-80 text-default-400 pointer-events-none" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Edit / Show">
                                                                <g id="Vector">
                                                                    <path d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    ) : (
                                                        <svg className="text-2xl opacity-80 text-default-400 pointer-events-none" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="Edit / Hide">
                                                                <path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.confirmPassword}</div>}


                                            <div className="invisible absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-invisible="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <p className="invisible text-xs text-red-600 mt-2" id="confirmPassword-error">Password does not match the password</p> */}

                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="mt-0.5 cursor-pointer border-gray-200 rounded text-red-600 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <div className="ms-3">
                                            <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <Link className="text-red-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Terms and Conditions</Link></label>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
};
export default SignupForm