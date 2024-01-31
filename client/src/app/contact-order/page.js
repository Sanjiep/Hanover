'use client'

import React from 'react'
// import { useState } from 'react'
import { useFormik } from 'formik';
import DashNav from '@/components/dashboardnav/page'
import PrelineScript from '@/components/PrelineScript'
import { Autocomplete, AutocompleteItem, useSelect } from "@nextui-org/react";
import { CountryList } from './data';
import { useSelector } from 'react-redux';
function ContactList() {

    const { userDetails } = useSelector(state => state.user)

    const addContact = async (values) => {
        values.userId = userDetails._id
        const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });
    }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            address: '',
            phoneNumber: '',
        },
        // validationSchema: contactSchema,
        onSubmit: (values) => {
            addContact(values);
            console.log(values);
        },
    });

    return (
        <DashNav>
            <div className="xl:max-w-[85rem] sm:px-8 lg:px-4 lg:py-5 mx-auto">
                <div className="flex flex-col">
                    <div className="max-m-1.5 flex md:flex-col overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-auto dark:bg-slate-900 dark:border-gray-700">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                            Contact List
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Keys you have generated to connect with third-party clients or access the <a className="inline-flex items-center gap-x-1.5 text-red-600 decoration-2 hover:underline font-medium" href="#">Preline API.</a>
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                View all
                                            </a>

                                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#modal-contact" href="#" >
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                Add Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div id="modal-contact" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
                                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                            <div className="p-4 sm:p-7">
                                                <div className="flex justify-end">
                                                    <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#modal-contact" >
                                                        <span className="sr-only">Close</span>
                                                        <svg claclassNamess="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                    </button>
                                                </div>
                                                <div className="text-center mb-8">
                                                    <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Add Contact</h2>
                                                </div>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="grid gap-y-4">
                                                        <div className='flex flex-cols-2 gap-4'>
                                                            <div className="relative">
                                                                <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
                                                                <input type="text" onChange={formik.handleChange} value={formik.values.firstName} id="firstName" name="firstName" className="py-3 px-4 border block w-full border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='First name' />
                                                            </div>

                                                            <div className="relative">
                                                                <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last Name</label>
                                                                <input type="text" onChange={formik.handleChange} value={formik.values.lastName} id="lastName" name="lastName" className="py-3 px-4 border block w-full border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Last name' />
                                                            </div>
                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="mail" className="block text-sm mb-2 dark:text-white">Email</label>
                                                            <div className="relative">
                                                                <input type="email" onChange={formik.handleChange} value={formik.values.email} id="email" name="email" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Email' />
                                                            </div>
                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="country" className="block text-sm mb-2 dark:text-white">Country</label>
                                                            <Autocomplete id='country' name='country' onChange={(CountryList) => {formik.setFieldValue('country', CountryList); // Update formik state
                                                            }}
                                                                value={formik.values.country}
                                                                placeholder="Country"
                                                                className="max-w-full"
                                                                variant="bordered"
                                                                size="sm"
                                                                defaultItems={CountryList}
                                                            >
                                                                {(country) => <AutocompleteItem key={country.value}>{country.label}</AutocompleteItem>}
                                                            </Autocomplete>
                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="address" className="block text-sm mb-2 dark:text-white">Address</label>
                                                            <div className="relative">
                                                                <input type="text" onChange={formik.handleChange} value={formik.values.address} id="address" name="address" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Addrress' />
                                                            </div>
                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="phoneNumber" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                                                            <div className="relative">
                                                                <input type="tel" onChange={formik.handleChange} value={formik.values.phoneNumber} id="phoneNumber" name="phoneNumber" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Phone Number' />
                                                            </div>
                                                        </div>

                                                        <button type="submit" className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Add</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-900">
                                        <tr>
                                            <th scope="col" className="ps-6 py-3 text-start">
                                                <label for="hs-at-with-checkboxes-main" className="flex">
                                                    <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                                                    <span className="sr-only">Checkbox</span>
                                                </label>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Created by
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        API Key
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Created
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-1" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">Streamlab</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Christina Bersh</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        Successful
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">28 Dec, 12:12</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenrate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-2" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-2" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">Node</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">David Harrison</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                        </svg>
                                                        Warning
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">20 Dec, 09:27</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-2" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-2">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenrate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-3" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-3" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">FrontMail</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700">
                                                            <span className="text-xs font-medium text-gray-800 leading-none dark:text-gray-200">A</span>
                                                        </span>
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Anne Richard</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        Successful
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">18 Dec, 15:20</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-3" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-3">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenerate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-4" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-4" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">MobileAPI</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description" />
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Samia Kartoon</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        Successful
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">18 Dec, 15:20</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-4" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-4">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenrate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-5" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-5" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">RachelsKey</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700">
                                                            <span className="text-xs font-medium text-gray-800 leading-none dark:text-gray-200">D</span>
                                                        </span>
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">David Harrison</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                        </svg>
                                                        Danger
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">15 Dec, 14:41</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-5" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-5">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenrate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 py-3">
                                                    <label for="hs-at-with-checkboxes-6" className="flex">
                                                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-6" />
                                                        <span className="sr-only">Checkbox</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">Gulp</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                                        <div className="grow">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">Brian Halligan</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Copy Key
                                                        <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                        <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                        </svg>
                                                        Successful
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">11 Dec, 18:51</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-table-dropdown-6" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                                        </button>
                                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-6">
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Rename
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Regenrate Key
                                                                </a>
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    Disable
                                                                </a>
                                                            </div>
                                                            <div className="py-2 first:pt-0 last:pb-0">
                                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">6</span> results
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                Prev
                                            </button>

                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Next
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PrelineScript />
        </DashNav>
    )
}

export default ContactList