'use client'

import React from 'react'
import Nav from '@/components/navbar/page'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '@/app/redux/reducerSlice/countSlice'

function test() {

    const {count} = useSelector(state=>state.count)
    const dispatch = useDispatch()

  return (
    <div>
        <Nav/>
        <div className='p-5 text-center text-base font-semibold'>
            <h1> Count is: <span className='border-gray-800 text-red-500 font-bold text-2xl'>{count}</span> </h1>
            <div className='m-5'>
            <button className='border-2 mr-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='border-2 ml-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(increment())}>Increment</button>
            </div>
        </div>
    </div>
  )
}

export default test