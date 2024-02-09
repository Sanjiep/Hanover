import React from 'react'
import DashNav from '@/components/dashboardnav/page'
import { Button } from "@nextui-org/react";
import Link from 'next/link';


function CreateOrder() {
    return (
        <div>
            <DashNav>
                <div data-hs-stepper='{"currentIndex": 2}'>
                    <ul class="relative flex flex-row gap-x-2">
                        <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{"index": 1, "isCompleted": true}'>
                            <span class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                                <span class="w-10 h-10 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-red-600 hs-stepper-active:text-white hs-stepper-success:bg-red-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">
                                    <svg width="50" height="50" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3.5 13.5h-2a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-2" />
                                        <path d="M4.5 10L7 7.5L9.5 10M7 7.5v6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                    </g>
                                </svg>
                                    </span>
                                    <svg class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <span class="ms-2 text-sm font-medium text-gray-800">
                                    Step
                                </span>
                            </span>
                            <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-red-600 hs-stepper-completed:bg-teal-600"></div>
                        </li>

                        <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{"index": 2}'>
                            <span class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                                <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-red-600 hs-stepper-active:text-white hs-stepper-success:bg-red-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
                                    <svg class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <span class="ms-2 text-sm font-medium text-gray-800">
                                    Step
                                </span>
                            </span>
                            <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-red-600 hs-stepper-completed:bg-teal-600"></div>
                        </li>

                        <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
      "index": 3
    }'>
                            <span class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                                <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-red-600 hs-stepper-active:text-white hs-stepper-success:bg-red-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
                                    <svg class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <span class="ms-2 text-sm font-medium text-gray-800">
                                    Step
                                </span>
                            </span>
                            <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-red-600 hs-stepper-completed:bg-teal-600"></div>
                        </li>
                    </ul>

                    <div class="mt-5 sm:mt-8">
                        <div data-hs-stepper-content-item='{
      "index": 1,
      "isCompleted": true
    }' class="success" style={{display: 'none'}}>
                            <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                                <h3 class="text-gray-500">
                                    First content
                                </h3>
                            </div>
                        </div>

                        <div data-hs-stepper-content-item='{
      "index": 2
    }' class="active">
                            <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                                <h3 class="text-gray-500">
                                    Second content
                                </h3>
                            </div>
                        </div>

                        <div data-hs-stepper-content-item='{
      "index": 3
    }' style={{display: 'none'}}>
                            <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                                <h3 class="text-gray-500">
                                    Third content
                                </h3>
                            </div>
                        </div>

                        <div data-hs-stepper-content-item='{
      "isFinal": true
    }' style={{display: 'none'}}>
                            <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                                <h3 class="text-gray-500">
                                    Final content
                                </h3>
                            </div>
                        </div>

                        <div class="mt-5 flex justify-between items-center gap-x-2">
                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn>
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Back
                            </button>
                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn>
                                Next
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn style={{display: 'none'}}>
                                Finish
                            </button>
                            <button type="reset" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn style={{display: 'none'}}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className='flex mx-auto h-[5rem] w-[40rem] bg-red-400 items-center justify-between '>
                    <ul class="relative flex flex-row gap-x-2 max-w-xs mx-auto justify-between">
                        <li class="shrink basis-0 flex-1 group">
                            <div class="w-full inline-flex items-center align-middle">
                                <svg width="50" height="50" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3.5 13.5h-2a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-2" />
                                        <path d="M4.5 10L7 7.5L9.5 10M7 7.5v6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                    </g>
                                </svg>
                                <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                            </div>
                        </li>
                        <li class="shrink basis-0 flex-1 group">
                            <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white">
                                    <svg width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1" />
                                            <path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                        </g>
                                    </svg>
                                </span>
                                <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                            </div>
                        </li>

                        <li class="shrink basis-0 flex-1 group">
                            <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white">
                                    <svg width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                            <rect width="13" height="13" x=".5" y=".5" rx="1" />
                                            <path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11" />
                                        </g>
                                    </svg>
                                </span>
                                <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                            </div>
                        </li>
                    </ul>

                </div> */}
                <div className=" py-4 grid gap-3 md:flex md:justify-between md:items-center border-gray-200 dark:border-gray-700">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Sent Shipment
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sent your shipment in easy steps.
                        </p>
                    </div>
                </div>

                <div className='flex gap-5 justify-center'>
                    <div className="flex items-center flex-col w-[30rem] bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className='w-64' src='NewAddress.svg' />

                        <Link href={'/map'} className='flex gap-2 justify-center'>
                            <div className='inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </div>
                            <span className='text-lg font-bold text-red-600'>New Address</span>
                        </Link>
                    </div>
                </div>
            </DashNav >
        </div >
    )
}

export default CreateOrder