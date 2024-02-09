import React from 'react'
import Layout from '@/components/pageLayout/page'
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
function TrackOrder() {
    const variants = ["underlined"];
    return (
        <div>
            <Layout>
            <div className="max-w-[60rem] px-8 h-auto md:h-56 flex flex-col sm:flex-row items-center max-sm:mx-auto my-10 sm:space-x-10">
                    {variants.map((variant) => (
                        <div key={variant} className="flex flex-col w-full flex-wrap md:flex-nowrap mb-3 mx-10 justify-center md:mb-0 gap-4">
                            <Input type="text" color="danger" variant={variant} placeholder="Type your tracking number" />
                            <div>
                                <span className='text-gray-900 opacity-60 max-sm:text-sm'> Need login to </span><Link href={'/login'}><span className='text-md font-medium text-red-500 hover:text-red-700 hover:underline max-sm:text-sm'>Advanced tracking</span></Link>
                            </div>
                        </div>
                    ))}
                    <Button className='py-2 max-sm:text-sm px-7 text-md font-semibold text-white bg-red-500 hover:bg-red-700 rounded-md'>Track</Button>
                </div>
            </Layout>
        </div>
    )
}

export default TrackOrder