import React from 'react'
import PrelineScript from '@/components/PrelineScript'
import DashNav from '@/components/dashboardnav/page'

function Profile() {
    return (
        <div>
            <DashNav>
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Profile
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Manage your name, password and account settings.
                            </p>
                        </div>

                        <form>
                            <div className="grid mb-4 sm:grid-cols-12 gap-2 sm:gap-6">
                                <div className="sm:col-span-3">
                                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Profile photo
                                    </label>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="flex items-center gap-5">
                                        <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="avatar.png" alt="Avatar" />
                                        <div className="flex gap-x-2">
                                            <div className="relative cursor-pointer">
                                                <input type="file" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
                                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                        <polyline points="17 8 12 3 7 8" />
                                                        <line x1="12" x2="12" y1="3" y2="15" />
                                                    </svg>
                                                    Upload photo
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label for="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Full name
                                    </label>
                                    <div className="hs-tooltip inline-block">
                                        <button type="button" className="hs-tooltip-toggle ms-1">
                                            <svg className="inline-block w-3 h-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </button>
                                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                                            Display your full name
                                        </span>
                                    </div>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Maria" />
                                        <input type="text" className="py-2 border px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Boone" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label for="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Email
                                    </label>
                                </div>

                                <div className="sm:col-span-9">
                                    <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm text-sm rounded-lg focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="you@example.com" />
                                </div>



                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label for="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                            Phone
                                        </label>
                                        <span className="text-sm text-gray-400 dark:text-gray-600">
                                            (Optional)
                                        </span>
                                    </div>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input id="af-account-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-lg border text-sm relative focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="+977-9876543210" />
                                    </div>


                                </div>


                                {/* <div className="sm:col-span-3">
                                    <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Password
                                    </label>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="space-y-2">
                                        <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter current password" />
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none border dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter new password" />
                                    </div>
                                </div> */}

                            </div>

                            
                                <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-5 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                                    <div className="sm:col-span-12">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            Security
                                        </h2>
                                        
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label for="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Password
                                    </label>
                                </div>

                                <div className="sm:col-span-9">
                                    <div className="space-y-2">
                                        <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 border shadow-sm rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter current password" />
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none border dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter new password" />
                                    </div>
                                    </div>
                                </div>



                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Cancel
                                </button>
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <PrelineScript />
            </DashNav>
        </div>
    )
}

export default Profile