'use client'
import React, { useState } from 'react'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import DashNav from '@/components/dashboardnav/page'
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { TimePicker } from 'antd';
import { addShipmentDetails,addDeliveryTiming, setStep,setSelectedReceiverId} from '@/redux/reducerSlice/orderSlice'

function CreateShipment() {

    const dispatch = useDispatch();
    const [step, setStep] = useState(1)
    const [defaultOpenValue, setDefaultOpenValue] = React.useState(null);

    const [selectedTime, setSelectedTime] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    // Function to generate time options in 12-hour format with AM/PM
    // const generateTime = () => {
    //     let time = [];
    //     for (let h = 1; h <= 12; h++) {
    //         for (let m = 0; m < 60; m += 15) {
    //             const hour = (h < 10 ? '0' : '') + h;
    //             const minute = (m === 0 ? '00' : m);
    //             const period = h < 12 ? 'AM' : 'PM'; // Determine AM/PM based on hour
    //             time.push(`${hour}:${minute} ${period}`);
    //         }
    //     }
    //     for (let h = 1; h <= 12; h++) {
    //         for (let m = 0; m < 60; m += 15) {
    //             const hour = (h < 10 ? '0' : '') + (h === 12 ? 12 : h);
    //             const minute = (m === 0 ? '00' : m);
    //             const period = h < 12 ? 'PM' : 'AM'; // Determine AM/PM based on hour
    //             time.push(`${hour}:${minute} ${period}`);
    //         }
    //     }
    //     return time;
    // };

    React.useEffect(() => {
        const currentTime = dayjs();
        const twoHoursAhead = currentTime.add(2, 'hour');
        setDefaultOpenValue(twoHoursAhead);
    }, []);

    // Function to handle time selection
    const handleTimeSelection = (time) => {
        setSelectedTime(time);
        setShowOptions(false); // Hide options after selection
    }

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const week = today.toLocaleString('default', { weekday: 'long' });

    const nextDays = [];
    for (let i = 1; i <= 5; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        nextDays.push({
            number: nextDay.getDate(),
            name: nextDay.toLocaleString('default', { weekday: 'long' })
        });
    }


    const SenderInfo = () => {
        const dispatch= useDispatch()
        return (
            <div>
                <div className='flex flex-col my-3'>
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Pickup Address
                    </h2>
                    <span className='text-xs text-gray-700 dark:text-gray-200'>Shipping from</span>
                </div>
                <div className='flex flex-row-2 gap-5 max-[425px]:m-2 justify-start'>
                    <div className="flex items-center flex-col w-[30rem] max-sm:w-full bg-white border shadow-sm rounded-xl p-4 max-sm:p-3 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className='w-64 max-sm:w-40' src='NewAddress.svg' />

                        <Link href={'/map'} className='flex gap-2 justify-center items-center'>
                            <div className='inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </div>
                            <span className='text-lg font-bold text-red-600'>New Address</span>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col my-5'>
                        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Pickup dates
                        </h2>
                    </div>

                    <div className='flex gap-x-4 overflow-x-auto no-scrollbar'>
                        <Button type='button' onClick={() => setShowOptions(!showOptions)} className='flex flex-col py-8 px-10 items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointr-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                            <span className='font-bold'>{day}<p className='font-medium text-xs'>{week}</p></span>
                        </Button>
                        {nextDays.map((day, index) => (
                            <Button
                                key={index}
                                type='button'
                                className='flex flex-col py-8 px-10 items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointr-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                            >
                                <span className='font-bold'>{day.number}<p className='font-medium text-xs'>{day.name}</p></span>
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    {showOptions && (<div className='flex flex-col my-3'>
                        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Pickup time
                        </h2>

                    </div>
                    )}
                    
                    
                    {showOptions && (
                    <TimePicker className='border rounded-lg w-[10rem] px-3 py-2 border-gray-400' onChange={onChange} 
                    defaultOpenValue={defaultOpenValue} // 2 hrs ahead
                    format="hh:mm A"
                    changeOnScroll= {true}
                    use12Hours={true}
                    size='large'
                    showNow={false}
                    scrollTo={defaultOpenValue}/>
                    )}

                    {/* <div className='flex max-w-60 gap-x-5 items-center'>

                        <div className="relative">
                            {showOptions && (
                                <div className="mt-2 w-max  bg-transparent no-scrollbar overflow-y-auto max-h-48">
                                    {generateTime().map((time, index) => (
                                        <div
                                            key={index}
                                            className="py-2 px-3 text-md font-semibold cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleTimeSelection(time)}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className='relative flex items-center'>
                            {showOptions && (<span className='relative flex m-auto w-14 justify-center text-center text-lg text-gray-600 font-medium'>To</span>
                            )}
                        </div>

                        <div className="relative">
                            {showOptions && (
                                <div className="mt-2 w-max  bg-transparent no-scrollbar overflow-y-auto max-h-48">
                                    {generateTime().map((time, index) => (
                                        <div
                                            key={index}
                                            className="py-2 px-3 text-md font-semibold cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleTimeSelection(time)}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div> */}

                    
                </div>
            </div>
        )
    }

    const handleNext = () => {
        // if (step === 1) {
        //   handleSave();
        // }
        // dispatch(setStep(step + 1));
        setStep(step + 1)
        console.log(step)
    };

    dayjs.extend(customParseFormat);
    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };

    return (
        <div>
            <DashNav>
                <div className='mx-2'>
                    <div className='w-full sticky top-10 pb-6'>
                        <div className="py-1.5 grid gap-3 md:flex md:justify-between items-center ">
                            <div className='mx-auto'>
                                <h2 className="flex text-lg font-semibold text-gray-700 dark:text-gray-200 justify-center" >
                                    Send Shipment
                                </h2>
                            </div>
                        </div>
                        <div className='bg-white w-full rounded-lg py-6 shadow-md'>
                            <div className=' max-w-[60rem] max-sm:max-w-full items-center px-10 max-sm:py-4 max-sm:px-5 rounded-lg mx-auto'>
                                <ul class="relative flex flex-row gap-x-2 justify-center items-center">
                                    <li class="shrink basis-0 flex-1 group relative">
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span class="w-10 h-10 flex justify-center items-center flex-shrink-0 bg-red-500 font-medium text-white rounded-full dark:bg-gray-700 dark:text-white">
                                                <svg width="25" height="25" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M3.5 13.5h-2a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-2" />
                                                        <path d="M4.5 10L7 7.5L9.5 10M7 7.5v6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3">
                                            <span class="block text-sm font-medium text-gray-800 dark:text-white">
                                                From
                                            </span>
                                        </div>
                                    </li>
                                    <div>
                                        <div class="absolute bottom-[-23px] max-sm:bottom-[-30px] left-1/2 transform -translate-x-1/2 flex justify-center items-center max-sm:text-nowrap">
                                            <span className='font-semibold text-md max-sm:text-[12px]'>Where is the shipment location?</span>
                                        </div>
                                    </div>
                                    <li class="shrink basis-0 flex-1 group relative">
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span class="w-10 h-10 flex justify-center items-center flex-shrink-0 bg-gray-300 font-medium text-white rounded-full dark:bg-gray-700 dark:text-white">
                                                <svg width="25" height="25" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1" />
                                                        <path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3">
                                            <span class="block text-sm ml-3 font-medium text-gray-300 dark:text-white">
                                                To
                                            </span>
                                        </div>

                                    </li>
                                    <div class="absolute bottom-[-20px] max-sm:bottom-[-15px] left-1/2 transform hidden -translate-x-1/2 flex justify-center items-center max-sm:text-nowrap">
                                        <span className='font-semibold text-md max-sm:text-[12px]'>Where is the shipment location?</span>
                                    </div>
                                    <li>
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span class="w-10 h-10 flex justify-center items-center flex-shrink-0 bg-gray-300 font-medium text-white rounded-full dark:bg-gray-700 dark:text-white">
                                                <svg width="25" height="25" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                                        <rect width="13" height="13" x=".5" y=".5" rx="1" />
                                                        <path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3">
                                            <span class="block text-sm font-medium text-gray-300 dark:text-white">
                                                What
                                            </span>
                                        </div>
                                    </li>
                                    <div class="absolute bottom-[-20px] max-sm:bottom-[-15px] left-1/2 transform hidden -translate-x-1/2 flex justify-center items-center max-sm:text-nowrap">
                                        <span className='font-semibold text-md max-sm:text-[12px]'>Where is the shipment location?</span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {step == 1 && <SenderInfo />}

                    {showOptions && (<div className='realtive flex my-6 justify-center'>
                        <button onClick={handleNext}
                            type="button"
                            className="flex w-[10rem] max-[425px]:w-full rounded-md bg-red-600 px-3 py-2 text-sm justify-center font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300">
                            Next
                        </button>
                    </div>
                    )}
                </div>
            </DashNav >
        </div >
    )
}

export default CreateShipment