'use client';

import { Checkbox, Button, Switch } from "@nextui-org/react";
import React, { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { addUserDetails } from "../redux/reducerSlice/userSlice";
import { UseDispatch, useDispatch } from "react-redux";

const Login = () => {
    const router = useRouter();

    const dispatch = useDispatch()
    const logInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('Password required')
    });

    const loginUser = async (values) => {
        try {
            const res = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.status === 200) {
                toast.success('Login successful');
                // Redirect to the appropriate page upon successful login
                dispatch(addUserDetails(data))
                router.push('/dashboard');
            } else {
                toast.error(data.msg);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An unexpected error occurred');
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: logInSchema,
        onSubmit: (values) => {
            loginUser(values)
        },
    });


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form onSubmit={formik.handleSubmit}>

            {/* header*/}
            <div className="flex min-h-full pt-8 pb-20 flex-1 flex-col justify-center px-4 py-5 lg:px-8">
                <div className="sm:mx-auto sm:w-lg sm:max-w-sm">
                    <Link href='/'><img
                        className="mx-auto h-24 w-auto"
                        src="hanover.svg"
                        alt="Hanover"
                    />
                    </Link>

                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                {/* email input*/}
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={formik.handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    label='email'
                                    placeholder='Enter your email'
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>




                        <div>
                            <div className='relative'>
                                <div className="flex items-center justify-between pb-2">
                                    <label htmlFor="password" className="block text-center text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>

                                    {/* forget password*/}
                                    <div className="text-sm">
                                        <Link href="/resetpassword" className="font-semibold text-red-600 hover:text-red-400">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Password input*/}




                                <div className="flex items-center">

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        placeholder='Enter your password' label="password" id="password" name="password" className={`py-3 px-4 block w-full border-gray-200 border-1 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${isVisible ? 'text-black' : null}`} required aria-describedby="password-error" type={isVisible ? 'text' : 'password'}
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


                                    <div className="invisible absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">



                                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p> */}
                            </div>
                        </div>

                        {/* Remember me*/}
                        <div>
                            <Switch size="sm" className='font-medium' color='#dc2626'>Remember me</Switch>
                        </div>

                        {/* Sign In button*/}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300">
                                Sign in
                            </button>
                        </div>
                    </div>

                    {/* Create account */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/register" className="font-medium leading-6 text-red-600 hover:underline decoration-2">
                            Create account
                        </Link>
                    </p>
                    {/* DIVIDER */}

                    <div
                        class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p
                            class="mx-4 mb-0 text-center font-medium dark:text-neutral-200">
                            Or continue with
                        </p>
                    </div>
                    <div className="flex justify-items-center mt-5 gap-5 items-center">
                        <Button className='px-12 py-2 font-semibold bg-transparent border-1 border-black' radius="sm" size='md'><img className='w-5 ' src="google.svg" />
                            Google</Button>
                        <Button className='px-12 font-semibold bg-transparent border-1 border-black' radius="sm" size='md'><img className='w-5 ' src="github.svg" />
                            GitHub</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login