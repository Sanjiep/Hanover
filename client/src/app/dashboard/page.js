import React from 'react'
import Link from 'next/link'
import PrelineScript from '@/components/PrelineScript'
import DashNav from '@/components/dashboardnav/page'

function Dashboard() {

    return (
        <div>
            <DashNav>
                <div className='grid xl:grid-cols-4 gap-4 mb-5 sm:grid-cols-2 '>
                    <div class="flex flex-col items-start justify-center bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="p-2 md:p-4">
                            <div className='flex gap-4'>
                                <svg className='bg-[#d5ffd7] border-[#d5ffd7] rounded-xl border-5' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0ac216" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4" /><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /></svg>
                                <div className='grid'>
                                    <h3 class="text-md font-semibold text-gray-500 dark:text-white">
                                        Successful Delivery
                                    </h3>
                                    <p class="mt-2 text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
                                        100
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="p-2 md:p-4">
                            <div className='flex gap-4'>
                                <svg className='bg-[#b7ddff] border-[#b7ddff] rounded-xl border-5' width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#2e63f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m8-3V4M8 8H3" />
                                </svg>
                                <div className='grid'>
                                    <h3 class="text-md font-semibold text-gray-500 dark:text-white">
                                        On Going Delivery
                                    </h3>
                                    <p class="mt-2 text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
                                        20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="p-2 md:p-4">
                            <div className='flex gap-4'>
                                <svg className='bg-[#f6ecca] border-[#f6ecca] rounded-xl border-5' width="40" height="40" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="#FF9966" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="6" cy="12.49" r="1" />
                                        <circle cx="10.5" cy="12.49" r="1" />
                                        <path d="M8.38 3.53A4 4 0 1 0 2 7.62m2.5-3.11L6 3.01m.5 6.49v-1H5a2 2 0 0 0-2 2v2" />
                                        <path d="M13.5 12.49v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2" />
                                    </g>
                                </svg>
                                <div className='grid'>
                                    <h3 class="text-md font-semibold text-gray-500 dark:text-white">
                                        Pending Delivery
                                    </h3>
                                    <p class="mt-2 text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
                                        50
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start justify-center bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div class="p-2 md:p-4">
                            <div className='flex gap-4'>
                                <svg className='bg-[#ffcaca] border-[#ffcaca] rounded-xl border-5' width="40" height="40" viewBox="0 0 24 24" stroke='1.5' xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#DC3023" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.812 4.793L12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25m8.32 4.32L20 7.5M12 12v9m0-9L4 7.5m12-2.25l-4.35 2.447M9.086 9.139L8 9.75M3 3l18 18" />
                                </svg>

                                <div className='grid'>
                                    <h3 class="text-md font-semibold text-gray-500 dark:text-white">
                                        Cancelled Delivery
                                    </h3>
                                    <p class="mt-2 text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
                                        20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row gap-5 p-5 justify-center'>
                    <div id='#form-modals' className="flex-1 max-w-lg bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl hover:bg-red-100 dark:bg-slate-900 dark:border-gray-700 dark:border-t-red-500 dark:shadow-slate-700/[.7] overflow-hidden relative">
                        <div className="p-4 md:p-5">
                            <div className='absolute opacity-20 mt-[1.5rem] lg:ml-[380px] md:ml-[190px] sm:ml-[300px] min-sm:ml-[100px]'>
                                <svg width="125" height="125" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="currentColor">
                                        <path d="M14.5 24.823v1.96c0 .22-.24.35-.43.24l-2.8-1.69a.663.663 0 0 1-.31-.56v-1.96c0-.22.24-.35.43-.24l2.8 1.69c.19.12.31.33.31.56" />
                                        <path d="M16.89 1.289h.003l10.921 6.642c.557.343.896.956.896 1.602v12.44c0 .936-.482 1.838-1.314 2.336l-10.543 6.406a1.903 1.903 0 0 1-1.996 0L4.311 24.307A2.733 2.733 0 0 1 3 21.973V9.533c0-.636.332-1.261.908-1.6l10.931-6.65a1.984 1.984 0 0 1 2.052.006m-1.03 1.714L6.083 8.95l3.51 2.145l9.79-5.951zm6.815 4.143l-9.805 5.952l3 1.832l9.905-5.898zM5 21.973c0 .259.137.496.35.625l9.513 5.78V16.659l-3.103-1.895v1.788c0 .24-.26.38-.46.27l-2.68-1.63a.314.314 0 0 1-.14-.26V12.76L5 10.634zm21.36.625l.008-.004a.724.724 0 0 0 .342-.622v-11.17l-9.847 5.865v11.702z" />
                                    </g>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Create Shipment
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/create-order">
                                Create Order
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div id='#form-modals' className="flex-1 max-w-lg bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl hover:bg-red-100 dark:bg-slate-900 dark:border-gray-700 dark:border-t-red-500 dark:shadow-slate-700/[.7] overflow-hidden relative">
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
                            <Link className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/track-order">
                                Track Order
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </DashNav>
        </div>
    )
}

export default Dashboard