import React from 'react'
import Link from 'next/link'
import PrelineScript from '@/components/PrelineScript'
import DashNav from '@/components/dashboardnav/page'

function Dashboard() {

    return (
        <div>
            <DashNav>
                <div className='flex flex-col md:flex-row gap-5 p-5 justify-center'>
                    <Link href={'/create-shipment'}><div className="flex-1 max-w-lg bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl hover:bg-red-100 dark:bg-slate-900 dark:border-gray-700 dark:border-t-red-500 dark:shadow-slate-700/[.7] overflow-hidden relative">
                        <div className="p-4 md:p-5">
                            <div className='absolute opacity-20 mt-[1.5rem] lg:ml-[375px] md:ml-[190px] sm:ml-[300px] min-sm:ml-[100px]'>
                                <svg width="125" height="125" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="m16 16l2 2l4-4" />
                                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15" />
                                        <path d="M3.29 7L12 12l8.71-5M12 22V12" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Create Shipment
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Create Order
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    </Link>
                    <div className="flex-1 max-w-lg bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl hover:bg-red-100 dark:bg-slate-900 dark:border-gray-700 dark:border-t-red-500 dark:shadow-slate-700/[.7] overflow-hidden relative">
                        <div className="p-4 md:p-5">
                            <div className='absolute opacity-20 mt-[1.5rem] lg:ml-[378px] md:ml-[190px] sm:ml-[300px] min-sm:ml-[100px]'>
                                <svg width="125" height="125" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15" />
                                        <path d="M3.29 7L12 12l8.71-5M12 22V12" />
                                        <circle cx="18.5" cy="15.5" r="2.5" />
                                        <path d="M20.27 17.27L22 19" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Track Order
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Track Order
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </DashNav>
        </div>
    )
}

export default Dashboard