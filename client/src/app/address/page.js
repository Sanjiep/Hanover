import React from 'react'
import DashNav from '@/components/dashboardnav/page'
import Map from '@/components/map/page'

function Address() {
  return (
    <div>
      <DashNav>
        
        <div className='sticky top-[4.5rem] z-20'>
          <div class="relative min-[426px]:hidden flex rounded-xl shadow-sm">
            <input type="text" placeholder='Search' class="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />

            <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
              <svg class="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </div>
          </div>
        </div>

        <div className='max-sm:mt-3'>
          <Map />
        </div>
      </DashNav>
    </div>
  )
}

export default Address