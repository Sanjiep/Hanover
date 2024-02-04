import React from 'react'

function ContactData() {
    return (
        <div>
            <tr>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="ps-6 py-3">
                        <label for="hs-at-with-checkboxes-1" className="flex">
                            <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                            <span className="sr-only">Checkbox</span>
                        </label>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-red-50 dark:bg-gray-700">
                                <span className="font-medium text-gray-800 leading-none dark:text-gray-200">C</span>
                            </span>
                            <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Christina Bersh</span>
                                <span className="block text-sm text-gray-500">christina@site.com</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Nepal</span>
                        <span className="block text-sm text-gray-500">Kathmandu, Bouddha</span>
                    </div>
                </td>

                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-x-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">+977-9808434615</span>
                        </div>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">28 Dec, 12:12</span>
                    </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-1.5">
                        <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                            <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
                                <div className="py-2 first:pt-0 last:pb-0">
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Edit
                                    </a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Sent Parcel
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
        </div>
    )
}

export default ContactData