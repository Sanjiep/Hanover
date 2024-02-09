import React from 'react'
import Layout from '@/components/pageLayout/page'
import Link from 'next/link'

function HelpCenter() {
    return (
        <div>
            <Layout>
                <div className="bg-gray-50 rounded-lg  border shadow-md max-w-5xl mt-10 mb-32 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <h2 className='font-bold text-4xl m-2'>Let’s get you the right help</h2>
                        <p className='font-medium text-sm mb-2'>Select the category that fits the type of support you need</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/register">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-10 h-10 text-gray-800 dark:text-gray-200" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0m8 12h6m-3-3v6M6 21v-2a4 4 0 0 1 4-4h4" />
                                    </svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Create Your Account
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Create an account and send unlimited shipment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="faq">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-10 h-10 text-gray-800 dark:text-gray-200" width="25" height="25" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2" />
                                    </svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            FAQs
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Everything you need to know about Hanover shipment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="contact">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-10 h-10 text-gray-800 dark:text-gray-200" width="25" height="25" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="m12.167 17.802l-.006-.014a7.798 7.798 0 0 1-.36-.094l-.009-.003A7.985 7.985 0 0 1 8.708 16a8 8 0 1 1 13.257-6.75c.039.413-.3.75-.715.75c-.414 0-.745-.337-.793-.749A6.5 6.5 0 1 0 11.496 16l.04.017c.2.082.406.154.616.217A2 2 0 0 1 16 17a2 2 0 0 1-3.833.802m-.986 1.272a9.514 9.514 0 0 1-4.53-3.054A3 3 0 0 0 4 19v.715C4 23.433 8.21 26 14 26s10-2.708 10-6.285V19a3 3 0 0 0-3-3h-3.645a3.5 3.5 0 0 1-6.174 3.074M19 10c0-1.512-.67-2.867-1.731-3.784a5 5 0 1 0-5.624 8.195A3.486 3.486 0 0 1 14 13.5a3.49 3.49 0 0 1 2.356.911A5 5 0 0 0 19 10" />
                                    </svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Customer Support
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Report a problem or return package
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/create-shipments">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-10 h-10 text-gray-800 dark:text-gray-200" width="25" height="25" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 .5v4M8.5 11H11M.5 4.5h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8h0Z" />
                                            <path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5" />
                                        </g>
                                    </svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Send Shipments
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Check prices and send shipments in few clicks
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/track-order">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-11 h-11 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /><circle cx="18.5" cy="15.5" r="2.5" /><path d="M20.27 17.27 22 19" /></svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Track Shipments
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Get the latest updates and location of your package
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/shipments-charges">
                            <div className="p-4 md:p-5">
                                <div className="flex">
                                    <svg className="mt-1 flex-shrink-0 w-11 h-11 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></svg>
                                    <div className="grow ms-5">
                                        <h1 className="group-hover:text-red-600 text-base font-bold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                            Shipping Rates
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Check our service and shipping charges
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default HelpCenter


