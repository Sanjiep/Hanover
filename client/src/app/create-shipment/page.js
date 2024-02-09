import React from 'react'
import DashNav from '@/components/dashboardnav/page'
import { Button } from "@nextui-org/react";
import Link from 'next/link';


function CreateOrder() {
    return (
        <div>
            <DashNav>
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
                <div className='flex mx-auto h-[5rem] w-[40rem] bg-gray-200 shadow-md border rounded-lg items-center justify-between m-5'>
                        <ul class="relative flex flex-row gap-x-2 max-w-xs mx-auto">
                            <li class="shrink basis-0 flex-1 group">
                                <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                    <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white">
                                        1
                                    </span>
                                    <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li class="shrink basis-0 flex-1 group">
                                <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                    <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white">
                                        2
                                    </span>
                                    <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                </div>
                            </li>

                            <li class="shrink basis-0 flex-1 group">
                                <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                    <span class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-gray-700 dark:text-white">
                                        3
                                    </span>
                                    <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                </div>
                            </li>
                        </ul>
                    
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