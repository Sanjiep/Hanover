import React from 'react'
import DashNav from '@/components/dashboardnav/page'

function CreateOrder() {
    return (
        <div>
            <DashNav>
                {/* <div className="relative bg-opacity-50 bg-local bg-cover bg-repeat" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7363190/pexels-photo-7363190.jpeg")' }}>
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))' }}></div> */}
                <div className=' relative z-5 max-w-lg sm:px-6 xl px-4 py-lg:px-8 lg:py-14 ml-24'>
                    <div className='grid ml-auto justify-end text-start'>
                        <h3 className='font-bold text-3xl text-gray-100'>Get your shipment picked up from your <span className='font-bold text-3xl text-red-500'>doorstep</span></h3>
                        <p>Send your parcel from the comfort of your home or office</p>
                    </div>
                    <div className="bg-transparent border rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                                Form details
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Manage your payment methods.
                            </p>
                        </div>

                        <div>
                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                                <label hmtlFor="af-payment-billing-contact" className="inline-block text-sm font-medium dark:text-white">
                                    Billing contact
                                </label>

                                <div className="mt-2 space-y-3">
                                    <input id="af-payment-billing-contact" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="First Name" />
                                    <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Last Name" />
                                    <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                                <label hmtlFor="af-payment-billing-address" className="inline-block text-sm font-medium dark:text-white">
                                    Billing address
                                </label>

                                <div className="mt-2 space-y-3">
                                    <input id="af-payment-billing-address" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Street Address" />
                                    <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Apt, Syuite, Building (Optional)" />
                                    <div className="grid sm:flex gap-3">
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Zip Code" />
                                        <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                            <option selected>City</option>
                                            <option>City 1</option>
                                            <option>City 2</option>
                                            <option>City 3</option>
                                        </select>
                                        <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                            <option selected>State</option>
                                            <option>State 1</option>
                                            <option>State 2</option>
                                            <option>State 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                                <label hmtlFor="af-payment-payment-method" className="inline-block text-sm font-medium dark:text-white">
                                    Payment method
                                </label>

                                <div className="mt-2 space-y-3">
                                    <input id="af-payment-payment-method" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Name on Card" />
                                    <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Card Number" />
                                    <div className="grid sm:flex gap-3">
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Expiration Date" />
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="CVV Code" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Cancel
                            </button>
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </DashNav>
        </div >
    )
}

export default CreateOrder