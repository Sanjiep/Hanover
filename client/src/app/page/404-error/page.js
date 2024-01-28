import React from 'react'

function PageNotFound() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mx-auto h-screen xl:px-0 dark:bg-gray-900">
                <div className="block md:max-w-lg">
                    <img src='/404-error.svg' alt='error image'/>
                </div>
                <div className="text-center xl:max-w-4xl">
                    <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Page not found</h1>
                    <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
                    <a href='/' className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        Go back home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound