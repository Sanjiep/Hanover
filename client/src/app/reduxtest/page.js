'use client'

import React from 'react'
import Nav from '@/components/navbar/page'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '@/app/redux/reducerSlice/countSlice'
import {inWidth, deWidth, changeBgColor, changeRadius} from '@/app/redux/reducerSlice/boxSlice'

function Test() {

    const {count} = useSelector(state=>state.count)
    const {width, height, background} = useSelector(state=>state.box)
    const dispatch = useDispatch()

  return (
    <div>
        <Nav/>
        <div className='grid p-5 mx-auto text-center text-base font-semibold'>
            <h1> Count is: <span className='border-gray-800 text-red-500 font-bold text-2xl'>{count}</span> </h1>
            <div className='m-5'>
            <button className='border-2 mr-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='border-2 ml-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(increment())}>Increment</button>
            </div>

            <div style={{width:width, height:height, backgroundColor:background, borderRadius:`${changeRadius}px`}} className='grid m-auto border-2 border-gray-900 text-gray-600 place-items-center'>Box</div>
            <div className='m-5'>
            <button className='border-2 ml-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(deWidth())}>Decrease Size</button>
            <button className='border-2 mr-2 text-sm px-3 py-2 rounded-lg' onClick={()=>dispatch(inWidth())}>Incease Size</button>
            </div>
            <div className='mt-2 flex justify-center items-center gap-3 '>
            <input onChange={(e)=>dispatch(changeBgColor(e.target.value))} type="text" placeholder='Colors' className='w-24 border font-medium border-gray-800 outline-none m-2 rounded-md px-2 py-2'/>
            <input onChange={(e)=>dispatch(radius(parseInt(e.target.value)))}  type="text" placeholder='Colors' className='w-24 border font-medium border-gray-800 outline-none m-2 rounded-md px-2 py-2'/>
            <label>Border radius</label>
            <input type="range"
            onDrag={(e)=>dispatch(changeRadius(parseInt(e.target.value)))} 
            min='0' max='50' className='border border-gray-800 outline-none rounded-md w-40 h-0'/>
            </div>
        </div>
    </div>
  )
}

export default Test