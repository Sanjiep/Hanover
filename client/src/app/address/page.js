import React from 'react'
import DashNav from '@/components/dashboardnav/page'
import Map from '@/components/map/page'

function Address() {
  return (
    <div>
        <DashNav>
          <div className='w-[20rem] h-full absolute top-1 left-13 bg-red-500 z-10'>
            <h1>Hello</h1>
          </div>
          <Map/>
        </DashNav>
    </div>
  )
}

export default Address