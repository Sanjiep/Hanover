'use client'

import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import {products} from './data'
import DashNav from '@/components/dashboardnav/page'

function calculate() {
    return (
        <div>
            <DashNav>
                <div className='max-w-lg'>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold text-gray-800 mb-2'>Calculate</h1>
                    </div>
                    <div>
                        <label for="hs-inline-add-on" class="block text-sm font-medium mb-2 text-gray-400 dark:text-white">Destination</label>
                        <div class="relative">
                            <input type="text" id="hs-inline-add-on" name="hs-inline-add-on" class="py-3 px-4 mb-5 ps-16 border block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="City" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <span class="text-sm font-semibold text-gray-400">From</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="relative">
                            <input type="text" id="hs-inline-add-on" name="hs-inline-add-on" class="py-3 px-4 ps-16 border block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="City" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <span class="text-sm font-semibold text-gray-400">To</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="hs-inline-add-on" class="block text-sm font-medium mb-2 text-gray-400 dark:text-white">Package</label>
                        <div class="relative">
                            <Select
                                label="Package Type"
                                placeholder="Select package"
                                startContent={''}
                                defaultSelectedKeys={["cat"]}
                                className="max-w-xs"
                            >
                                {products.map((product) => (
                                    <SelectItem key={product.value} value={product.value}>
                                        {product.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </DashNav >
        </div >
    )
}

export default calculate