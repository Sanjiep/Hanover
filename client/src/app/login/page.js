import React from 'react'
import { Checkbox, Button, Divider, Switch } from "@nextui-org/react";
import Link from 'next/link';
import PageLayout from '@/components/pageLayout/page'
import Nav from '@/components/navbar/page'
import Footer from '@/components/footer/page'

const login = () => {
    return (
        <div>
            <PageLayout>
            {/* header*/}
            <div className="flex min-h-full pt-10 pb-20 flex-1 flex-col justify-center px-4 py-5 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <Link href='/'><img
                        className="mx-auto h-24 w-auto"
                        src="hanover.svg"
                        alt="Hanover"
                    />
                    </Link> */}

                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                {/* email input*/}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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

                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Remember me*/}
                        <div>
                        <Switch defaultSelected size="sm" className='font-medium' color='#dc2626'>Remember me</Switch>
                        </div>

                        {/* Sign In button*/}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300">
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* Create account */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link href="/register" className="font-semibold leading-6 text-red-600 hover:text-red-400">
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
                    <div className="flex mt-5 gap-5 items-center">
                        <Button className='px-12 py-2 font-semibold bg-transparent border-1 border-black' radius="sm" size='md'><img className='w-5 ' src="google.svg"/>
                            Google</Button>
                        <Button className='px-12 font-semibold bg-transparent border-1 border-black' radius="sm" size='md'><img className='w-5 ' src="github.svg"/>
                            GitHub</Button>
                    </div>
                </div>
            </div>

            </PageLayout>
        </div>
    )
}

export default login