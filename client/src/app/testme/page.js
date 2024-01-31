'use client'

import React from 'react'
import PrelineScript from '@/components/PrelineScript'
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { cityList } from './data';
function page() {
  return (
    <div><div className="text-center">
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#modal-contact">
        Open modal
      </button>
    </div>

      <div id="modal-contact" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center mb-8">
                <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Add Contact</h2>
              </div>
              <form>
                <div className="grid gap-y-4">
                  <div className='flex flex-cols-2 gap-4'>
                    <div className="relative">
                      <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
                      <input type="text" id="firstName" name="firstName" className="py-3 px-4 border block w-full border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='First name' />
                    </div>

                    <div className="relative">
                      <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last Name</label>
                      <input type="text" id="lastName" name="lastName" className="py-3 px-4 border block w-full border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Last name' />
                    </div>
                  </div>

                  <div className="grid items-center">
                    <label htmlFor="mail" className="block text-sm mb-2 dark:text-white">Email</label>
                    <div className="relative">
                      <input type="email" id="mail" name="mail" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Email' />
                    </div>
                  </div>

                  <div className="grid items-center">
                    <label htmlFor="address" className="block text-sm mb-2 dark:text-white">Address</label>
                    <Autocomplete
                      placeholder="Address"
                      className="max-w-full"
                      variant= "bordered"
                      size="sm"
                      defaultItems={cityList}
                    >
                      {(city) => <AutocompleteItem key={city.value}>{city.label}</AutocompleteItem>}
                    </Autocomplete>
                  </div>

                  <div className="grid items-center">
                    <label htmlFor="phoneNumber" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                    <div className="relative">
                      <input type="tel" id="phoneNumber" name="phoneNumber" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Phone Number' />
                    </div>
                  </div>

                  <button type="submit" className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PrelineScript />
    </div>
  )
}

export default page