'use client'

import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import DashNav from '@/components/dashboardnav/page'
import PrelineScript from '@/components/PrelineScript'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function ContactOrder() {

    const ContactData = (props) => {
        return (
            <tr>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="ps-6 py-3">
                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                            <span className="sr-only">Checkbox</span>
                        </label>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-300 dark:bg-gray-700">
                                <span className="font-medium text-gray-800 leading-none dark:text-gray-200">{props.items.firstName[0]}</span>
                            </span>
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{props.items.firstName} {props.items.lastName}</span>
                                <span className="block text-sm text-gray-500">{props.items.email}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{props.items.country}</span>
                        <span className="block text-sm text-gray-500">{props.items.address}</span>
                    </div>
                </td>

                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{props.items.phoneNumber}</span>
                        </div>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">28 Dec, 12:12</span>
                    </div>
                </td>
                {/* <td className="h-px w-px whitespace-nowrap">
                    <div className="hs-dropdown inline-flex">
                    <button id="hs-dropdown" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </button>

                        <div className="hs-dropdown-menu border transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown">
                            <div className="py-2 first:pt-0 last:pb-0">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M8 18h1" /><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" /></svg>
                                    Edit
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg>
                                    Sent Parcel
                                </a>
                            </div>
                            <div className="py-2 first:pt-0 last:pb-0">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-500 hover:bg-red-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                    <svg className="flex-shrink-0 w-4 h-4" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2" />
                                    </svg>
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </td> */}
                <td class="h-px w-px whitespace-nowrap">
                    <div class="px-6 py-1.5">
                        <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <Dropdown>
                                <DropdownTrigger>
                                        <svg className="flex-shrink-0 w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                </DropdownTrigger>
                                <DropdownMenu 
                                    aria-label="Action event example"
                                    onAction={(key) => alert(key)}
                                >
                                    <DropdownItem key="edit">
                                        <a className="flex items-center gap-x-3.5 rounded-lg text-sm text-gray-800  focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M8 18h1" /><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" /></svg>
                                            Edit
                                        </a>
                                    </DropdownItem>
                                    <DropdownSection showDivider>
                                        <DropdownItem key="sent parcel">
                                            <a className="flex items-center gap-x-3.5 rounded-lg text-sm text-gray-800  focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" /><path d="M12 3v6" /></svg>
                                                Sent Parcel
                                            </a>
                                        </DropdownItem>

                                    </DropdownSection>
                                    <DropdownItem variant='light' key="delete" className='hover:bg-red-100' >
                                        <div className="py-2 first:pt-0 last:pb-0">
                                            <a className="flex items-center gap-x-3.5 rounded-lg text-sm text-red-500 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                                <svg className="flex-shrink-0 w-4 h-4" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2" />
                                                </svg>
                                                Delete
                                            </a>
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </td >
            </tr >
        )
    }
    const [contactList, setContactList] = useState([])
    const { userDetails } = useSelector(state => state.user)

    const fetchContact = async () => {
        const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/contact?userId=${userDetails._id}`)
        const data = await res.json()
        setContactList(data.contactList);
        console.log(data.contactList);
    }

    useEffect(() => {
        fetchContact()
    }, [])

    const addContact = async (values) => {
        values.userId = userDetails._id
        try {
            const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (res.ok) {
                fetchContact();
                toast.success('Contact added successfully');
            } else {
                // Handle non-OK response
                toast.error('Failed to add contact. Please check your data.');
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error during fetch:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

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
            // props?.fetchContacts()
            // console.log(values);
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
                                            Contacts
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Create contact list.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                View all
                                            </a>

                                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#modal-contact" href="#" >
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
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
                                                        <svg claclassNamess="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
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
                                                            <div className="relative">
                                                                <input type="text" onChange={formik.handleChange} value={formik.values.country} id="countrt" name="country" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Country' />
                                                            </div>

                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="address" className="block text-sm mb-2 dark:text-white">Address</label>
                                                            <div className="relative">
                                                                <input type="text" onChange={formik.handleChange} value={formik.values.address} id="address" name="address" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Address' />
                                                            </div>
                                                        </div>

                                                        <div className="grid items-center">
                                                            <label htmlFor="phoneNumber" className="block text-sm mb-2 dark:text-white">Phone Number</label>
                                                            <div className="relative">
                                                                <input type="tel" onChange={formik.handleChange} value={formik.values.phoneNumber} id="phoneNumber" name="phoneNumber" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required placeholder='Phone Number' />
                                                            </div>
                                                        </div>

                                                        <button type='submit' className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#modal-contact">Add</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-800">
                                        <tr>
                                            <th scope="col" className="ps-6 py-3 text-start">
                                                <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                    <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                                                    <span className="sr-only">Checkbox</span>
                                                </label>
                                            </th>

                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Address
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Phone Number
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
                                            <th scope="col" class="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                        {contactList.length > 0 && contactList.map((items) => {
                                            return <ContactData items={items} />
                                        })}

                                    </tbody>
                                </table>


                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{contactList.length}</span> results
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                Prev
                                            </button>

                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Next
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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

export default ContactOrder