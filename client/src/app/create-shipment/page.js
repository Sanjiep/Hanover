"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import DashNav from "@/components/dashboardnav/page";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { TimePicker } from "antd";
import {
    addShipmentDetails,
    addDeliveryTiming,
    setStep,
    setSelectedReceiverId,
    addPickupTiming,
} from "@/redux/reducerSlice/orderSlice";
import {
    Tooltip,
    Select,
    SelectItem,
    Button,
    Autocomplete,
    AutocompleteItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Checkbox
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { countryList } from "./country";
import axios from "axios";
import * as Yup from 'yup';
import PrelineScript from "@/components/PrelineScript";
import { useFormik } from "formik";

function CreateShipment() {
    const dispatch = useDispatch();
    const router = useDispatch();
    const { step } = useSelector((state) => state.order);
    const [defaultOpenValue, setDefaultOpenValue] = React.useState(null);

    const [showOptions, setShowOptions] = useState(false);

    React.useEffect(() => {
        const currentTime = dayjs();
        const twoHoursAhead = currentTime.add(2, "hour");
        setDefaultOpenValue(twoHoursAhead);
    }, []);


    const SenderInfo = () => {
        const [selectedDateIndex, setSelectedDateIndex] = useState(null);
        const [selectedTime, setSelectedTime] = useState(null);
        const [showOptions, setShowOptions] = useState(false);

        const today = new Date();
        const nextDays = [];
        for (let i = 1; i <= 5; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            nextDays.push({
                number: nextDay.getDate(),
                name: nextDay.toLocaleString("default", { weekday: "long" }),
            });
        }

        const pickupDate = (index) => {
            setSelectedDateIndex(index);
            setShowOptions(true);
        };

        const pickupTime = (time, timeString) => {
            setSelectedTime(timeString);
        };

        return (
            <div className="max-w-[35rem] mx-auto">
                <div className="flex flex-col my-3">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Pickup Address
                    </h2>
                    <span className="text-xs text-gray-700 dark:text-gray-200">
                        Shipping from
                    </span>
                </div>
                <div className="flex flex-row-2 gap-5 max-[425px]:m-2 justify-center">
                    <div className="flex items-center flex-col w-[30rem] max-sm:w-full bg-white border shadow-sm rounded-xl p-4 max-sm:p-3 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-64 max-sm:w-40" src="NewAddress.svg" />

                        <Link
                            href={"/address"}
                            className="flex gap-2 justify-center items-center"
                        >
                            <div className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-plus"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-red-600">
                                New Address
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col my-5">
                        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Pickup dates
                        </h2>
                    </div>

                    <div className="flex gap-x-4 overflow-x-auto no-scrollbar">
                        {/* <Button type='button' onClick={pickupDate} className='flex flex-col py-8 px-10 items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointr-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                            <span className='font-bold'>{day}<p className='font-medium text-xs'>{week}</p></span>
                        </Button> */}
                        {nextDays.map((day, index) => (
                            <Button
                                onClick={() => pickupDate(index)}
                                key={index}
                                type="button"
                                className={`flex flex-col py-8 px-10 items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${selectedDateIndex === index ? 'text-red-500 border-red-500' : ''}`}>
                                <span className="font-bold">
                                    {day.number}
                                    <p className={`font-medium text-xs  ${selectedDateIndex === index ? 'text-gray-700' : ''} text-gray-00`}>{day.name}</p>
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>

                <div>
                    {showOptions && (
                        <div className="flex flex-col my-3">
                            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                Pickup time
                            </h2>
                        </div>
                    )}

                    {showOptions && (
                        <TimePicker
                            className="border rounded-lg w-[10rem] px-3 py-2 border-gray-400"
                            onChange={pickupTime}
                            defaultOpenValue={defaultOpenValue} // 2 hrs ahead
                            format="hh:mm"
                            changeOnScroll={true}
                            use12Hours={true}
                            size="large"
                            showNow={false}
                            scrollTo={defaultOpenValue}
                        />
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
        );
    };

    const ReceiverInfo = () => {
        const [contactList, setContactList] = useState([]);
        const { userDetails } = useSelector((state) => state.user);
        const { isOpen, onOpen, onOpenChange } = useDisclosure();

        const ShipmentInfoSchema = Yup.object().shape({
            country: Yup.string()
                .required('Required!'),

            city: Yup.string()
                .required('Required!'),

            street: Yup.string()
                .required('Required!'),

            name: Yup.string()
                .required('Required!'),

            phoneNumber: Yup.string()
                .required('Required!'),
        });

        const formik = useFormik({
            initialValues: {
                country: '',
                city: '',
                street: '',
                name: '',
                phoneNumber: '',
            },
            validationSchema: ShipmentInfoSchema,
            onSubmit: (values) => {
                console.log(values)
            },
        });

        const fetchContact = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:${process.env.NEXT_PUBLIC_API_URL}/contact?userId=${userDetails._id}`
                );
                setContactList(data.contactList);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        };

        useEffect(() => {
            // Fetch contacts when userDetails._id changes
            if (userDetails && userDetails._id) {
                fetchContact();
            }
        }, [userDetails, fetchContact]);

        return (
            <form onSubmit={formik.handleSubmit} className="max-w-[40rem] mx-auto justify-center grid">
                <div className="flex flex-col my-3">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Select Country<span className="text-red-500">*</span>
                    </h2>
                    <div className="flex w-full flex-wrap md:flex-nowrap md:mb-0 gap-4">
                        {/* <Autocomplete
                            onInputChange={formik.handleChange}
                            value={formik.values.country}
                            onBlur={formik.handleBlur}
                            name="country"
                            variant="bordered"
                            size="sm"
                            defaultItems={countryList}
                            label="Select country"
                            className="max-w-md"
                        >
                            {(item) => (
                                <AutocompleteItem key={item.value}>
                                    {item.label}
                                </AutocompleteItem>
                            )}
                        </Autocomplete> */}
                        <div class="relative w-full">
                            <select onChange={formik.handleChange}
                                value={formik.values.country}
                                onBlur={formik.handleBlur}
                                name="country"
                                label="country"
                                id="country"
                                data-hs-select='{ "hasSearch": true, "searchPlaceholder": "Search...", "searchClasses": "block w-full text-sm border-gray-200 rounded-lg focus:border-red-500 focus:ring-red-500 before:absolu before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-no dark:focus:ring-1 dark:focus:ring-gray-600 py-2 px-3", "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-slate-900", "placeholder": "Select country...", "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200 data-title></span></button>", "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 fl text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-red-5 focus:ring-red-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-4 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600", "dropdownClasses": "mt-2 max-h-72 pb-1 px-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidd overflow-y-auto dark:bg-slate-900 dark:border-gray-700", "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-no focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800", "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-8 dark:text-gray-200\" data-title></div></div></div>" }'
                            >
                                <option value="">Choose</option>

                                <option value="IN" data-hs-select-option='{"icon": "<img class=\"inline-block size-6\" src=\"flag-for-india.svg\" alt=\"India\" />"}'>
                                    India
                                </option>

                                <option value="NP" data-hs-select-option='{"icon": "<img class=\"inline-block size-6\" src=\"flag-for-nepal.svg\" alt=\"Nepal\" />"}'>
                                    Nepal
                                </option>

                            </select>

                            <div class="absolute top-1/2 end-3 -translate-y-1/2">
                                <svg class="flex-shrink-0 size-3.5 text-gray-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
                            </div>
                        </div>
                    </div>
                    {formik.errors.country && formik.touched.country && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.country}</div>}
                </div>

                <div className="max-w-md mb-3 grid grid-cols-2 gap-3">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            City<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                onBlur={formik.handleBlur}
                                label='city'
                                name="city"
                                type="text"
                                placeholder="City"
                                id="city"
                                className={`py-3 px-4 block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 ${formik.errors.city && formik.touched.city ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                required
                            />
                            {formik.errors.city && formik.touched.city && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.city}</div>}
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Street<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.street}
                                onBlur={formik.handleBlur}
                                label='street'
                                name="street"
                                type="text"
                                placeholder="Street"
                                id="street"
                                className={`py-3 px-4 capitalize block w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 ${formik.errors.street && formik.touched.street ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                required
                            />
                            {formik.errors.street && formik.touched.street && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.street}</div>}
                        </div>
                    </div>
                </div>

                <div className="max-w-md mb-3">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Description
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Describe"
                            id="description"
                            className={`py-3 px-4 block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                        />
                    </div>
                </div>

                <div className="max-w-md mb-3">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            label='name'
                            name="name"
                            type="text"
                            placeholder="Name"
                            id="name"
                            className={`py-3 px-4 block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 ${formik.errors.name && formik.touched.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                            required
                        />

                        <button
                            onClick={onOpen}
                            className="focus:outline-none absolute right-4"
                            type="button"
                        >
                            <svg
                                className="text-2xl text-default-400 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill="#dc2626"
                                    d="M11.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM7 10.75V11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75ZM4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Z"
                                />
                            </svg>
                        </button>
                        <Modal
                            className="max-sm:h-1/2 overflow-auto"
                            size="md"
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 sticky top-0 bg-white">
                                            Contact List
                                            <button className="absolute right-5" onClick={onClose}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#242424"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-x"
                                                >
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </button>
                                        </ModalHeader>
                                        <ModalBody>
                                            {contactList.length > 0 &&
                                                contactList.map((items) => (
                                                    <div
                                                        className="ps-2 lg:ps-3 xl:ps-2 pe-2 py-3 bg-gray-100 hover:bg-red-50 rounded-lg cursor-auto"
                                                        key={items._id}
                                                    >
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-300 dark:bg-gray-700">
                                                                <span className="font-medium text-gray-800 leading-none dark:text-gray-200">
                                                                    {items.firstName[0]}
                                                                </span>
                                                            </span>
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                                    {items.firstName} {items.lastName}
                                                                </span>
                                                                <span className="block text-sm text-gray-500">
                                                                    {items.email}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </ModalBody>
                                        <ModalFooter className="hidden sm:flex">
                                            <Button
                                                className="text-white"
                                                color="primary"
                                                onPress={onClose}
                                            >
                                                Close
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                    {formik.errors.name && formik.touched.name && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.name}</div>}
                </div>

                <div className="max-w-md">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Phone Number<span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}
                            label='phoneNumber'
                            name="phoneNumber"
                            type="text"
                            placeholder="Phone Number"
                            id="phoneNumber"
                            className={`py-3 px-4 block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-red-500 focus:ring-red-500'} focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                            required
                        />
                    </div>
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className='text-red-500 dark:text-gray-300 text-sm pt-1'>{formik.errors.phoneNumber}</div>}
                </div>

                <div class="flex items-center mt-3">
                    <Checkbox color="primary" size="md" radius="full" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                    }>
                        <label class="text-sm font-medium text-gray-600 ms-1 dark:text-gray-400">Add to Contact List</label>
                    </Checkbox>
                </div>
            </form>
        );
    };

    const ShipmentInfo = () => {
        const [isActive, setIsActive] = useState(false);

        const toggleButton = () => {
            setIsActive(!isActive);
        };

        const [estimatedWeight, setEstimatedWeight] = useState("0.5");
        const handleEstimatedWeightChange = (e) => {
            setEstimatedWeight(e.target.value);
        };

        const unit = [
            { label: "Kg", value: "kg" },
            { label: "Lb", value: "lb" },
        ];

        const [selectedUnit, setSelectedUnit] = useState("kg"); // Set default value to "kg"

        const handleChange = (event) => {
            setSelectedUnit(event.target.value);
        };

        const [activeIndex, setActiveIndex] = useState(null);

        const handleClick = (index) => {
            setActiveIndex(index);
        };

        return (
            <div>
                <div className="flex justify-center mt-4 mb-5">
                    <div
                        className={`flex w-max ${isActive
                            ? "bg-gray-200 dark:bg-gray-700"
                            : "bg-gray-200/[0.5] dark:bg-gray-700/[0.7] "
                            } hover:bg-gray-200 dark:hover:bg-gray-700/[0.7] rounded-xl transition`}
                    >
                        <nav className="flex space-x-1" aria-label="Tabs">
                            <button
                                type="button"
                                className={`hs-tab-active:bg-white hs-tab-active:text-red-500 hs-tab-active:shadow-md flex gap-1 items-center text-sm max-sm:text-xs text-gray-500 hover:text-gray-700 font-medium rounded-lg py-3 px-5 dark:text-gray-400 dark:hover:text-white dark:hs-tab-active:bg-gray-800 transition duration-200 ease-out dark:hs-tab-active:text-gray-400 ${isActive ? "" : "active"
                                    }`}
                                id="ctc-component-multi-toggle-tab-preview-item"
                                data-hs-tab="#ctc-component-multi-toggle-tab-preview"
                                aria-controls="ctc-component-multi-toggle-tab-preview"
                                role="tab"
                                onClick={toggleButton}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Document
                            </button>
                            <button
                                type="button"
                                className={`hs-tab-active:bg-white hs-tab-active:text-red-500 hs-tab-active:shadow-md text-sm max-sm:text-xs flex gap-1 items-center text-gray-500 hover:text-gray-700 font-medium rounded-lg py-3 px-5 dark:text-gray-400 dark:hover:text-white dark:hs-tab-active:bg-gray-800 transition duration-200 ease-out dark:hs-tab-active:text-gray-400 ${isActive ? "active" : ""
                                    }`}
                                id="ctc-component-multi-toggle-tab-html-item"
                                data-hs-tab="#ctc-component-multi-toggle-tab-html"
                                aria-controls="ctc-component-multi-toggle-tab-html"
                                role="tab"
                                onClick={toggleButton}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                    >
                                        <path d="M12 8V4m-1 12H8m-2.5 4h13a1.5 1.5 0 0 0 1.5-1.5V8.236a1 1 0 0 0-.106-.447l-1.341-2.683A2 2 0 0 0 16.763 4H7.237a2 2 0 0 0-1.789 1.106L4.106 7.789A1 1 0 0 0 4 8.236V18.5A1.5 1.5 0 0 0 5.5 20Z" />
                                        <path stroke-linejoin="round" d="M5 8h14" />
                                    </g>
                                </svg>
                                Parcel
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="max-w-md flex mx-auto flex-row gap-3 mt-5 mb-5">
                    <div className="basis-3/5">
                        <div className="flex justify-between items-center">
                            <label className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                                Estimated weight<span className="text-red-500">*</span>
                            </label>

                            {/* <div id="hs-vertically-centered-modal" class="hs-overlay sm:hidden hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                    <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                        <div class="flex justify-between items-center py-3 px-4 dark:border-gray-700">
                                            <div className='max-w-[20rem] text-center items-center p-2'>
                                                <h1 className='font-bold text-md text-gray-800 mb-3'>Estimated value.</h1>
                                                <p className='font-normal text-sm text-wrap flex text-center '>Please ensure that weight is accurate to avoid any delay caused by weight difference. Price may change in case weight was different.</p>
                                            </div>
                                        </div>
                                        <div class="flex justify-center w-full items-center py-2 px-4 dark:border-gray-700">
                                            <button type="button" class="py-2 px-4 mx-auto w-full inline-flex justify-center items-center text-center gap-x-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div
                                data-hs-overlay="#hs-vertically-centered-modal"
                                className="cursor-pointer"
                            >
                                <Tooltip
                                    content={
                                        <div className="max-w-[20rem] text-center items-center mt-3 mb-3 p-2">
                                            <h1 className="font-bold text-md text-gray-800 mb-3">
                                                Estimated value.
                                            </h1>
                                            <p className="font-normal text-sm text-wrap flex text-start ">
                                                Please ensure that weight is accurate to avoid any delay
                                                caused by weight difference. Price may change in case
                                                weight was different.
                                            </p>
                                        </div>
                                    }
                                    closeDelay="100"
                                    showArrow
                                    placement="top"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                        >
                                            <path d="M0 0h24v24H0z" />
                                            <path
                                                fill="#dc2626"
                                                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2zm0 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15zm1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673z"
                                            />
                                        </g>
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                value={`${isActive ? '' : estimatedWeight}`}
                                onChange={handleEstimatedWeightChange}
                                id="weight"
                                placeholder={`${isActive ? "0.5 ,1.0 ,1.5 ...etc" : "0.5"}`}
                                className={`py-3 px-4 max-sm:text-xs font-semibold placeholder:font-normal block w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                required
                            />
                        </div>
                    </div>

                    <div className="basis-2/5">
                        <label className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                            Unit
                        </label>
                        <div className="relative">
                            <Select
                                className="rounded-lg sm:w-50 lg:w-200 text-gray-600 font-semibold"
                                style={{ height: "45px", borderRadius: "0.5rem", color: "red" }} // Set the width and height here
                                size="large" // You can adjust the size: 'small', 'medium', 'large'
                                variant="bordered"
                                defaultSelectedKeys={[selectedUnit]} // Set the default selected value
                                onChange={handleChange}
                            >
                                {unit.map((item) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>

                {isActive &&
                    <div className="transition duration-200 ease-out">
                        <div className="max-w-md flex mx-auto flex-row gap-3 mt-5 mb-5">
                            <div className="basis-3/5">
                                <label className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                                    Item Description
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="itemDescription"
                                        placeholder="ex. Shoes, apparel"
                                        className={`py-3 px-4 max-sm:text-xs font-normal block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="basis-2/5 ">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                                        Declared Value<span className="text-red-500">*</span>
                                    </label>

                                    <div
                                        data-hs-overlay="#hs-vertically-centered-modal"
                                        className="cursor-pointer"
                                    >
                                        <Tooltip
                                            content={
                                                <div className="max-w-[20rem] text-center items-center mt-3 mb-3 p-2">
                                                    <h1 className="font-bold text-md text-gray-800 mb-3">
                                                        Goods declared value
                                                    </h1>
                                                    <p className="font-normal text-sm text-wrap flex text-start">
                                                        A shipment's declared value represents the selling price
                                                        or fair market value of the contents of the shipment.
                                                    </p>
                                                </div>
                                            }
                                            closeDelay="100"
                                            showArrow
                                            placement="top"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 24 24"
                                            >
                                                <g
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                >
                                                    <path d="M0 0h24v24H0z" />
                                                    <path
                                                        fill="#dc2626"
                                                        d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2zm0 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15zm1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673z"
                                                    />
                                                </g>
                                            </svg>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="itemValue"
                                        placeholder=""
                                        className={`py-3 px-4 max-sm:text-xs font-semibold block capitalize w-full border-gray-200 border-1 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-5 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600`}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-md flex mx-auto flex-col gap-3 mt-5 mb-5">
                            <h1 className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                                Your Shipments fit into a
                            </h1>

                            <div className="flex gap-x-4 max-sm:gap-x-2 justify-between">
                                <div onClick={() => handleClick(1)} className={`border-2 rounded-md text-gray-600 border-gray-400 py-2 px-10 max-sm:px-5 items-center text-center cursor-pointer ${activeIndex === 1 ? 'text-red-500 border-red-500' : ''} `}>
                                    <svg
                                        className="w-auto h-12 max-sm:h-10"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_211_100275)">
                                            <path
                                                d="M16 17C16 17.5304 16.2107 18.0391 16.5858 18.4142C16.9609 18.7893 17.4696 19 18 19C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17C20 16.4696 19.7893 15.9609 19.4142 15.5858C19.0391 15.2107 18.5304 15 18 15C17.4696 15 16.9609 15.2107 16.5858 15.5858C16.2107 15.9609 16 16.4696 16 17Z"
                                                stroke="currentColor"
                                                stroke-width="1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M5 16V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17V12H6C5.20435 12 4.44129 12.3161 3.87868 12.8787C3.31607 13.4413 3 14.2044 3 15V16H13C13.3706 14.9292 14.0369 13.9852 14.9218 13.2773C15.8067 12.5694 16.8739 12.1265 18 12V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H15"
                                                stroke="currentColor"
                                                stroke-width="1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6 9H9"
                                                stroke="currentColor"
                                                stroke-width="1"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_211_100275">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className={`text-gray-600 ${activeIndex === 1 ? 'text-red-500' : ''} text-xs  font-semibold`}>Small</p>
                                </div>

                                <div onClick={() => handleClick(2)} className={`border-2 rounded-md text-gray-600 ${activeIndex === 2 ? 'text-red-500 border-red-500' : ''} border-gray-400 py-2 px-10 max-sm:px-5 items-center text-center cursor-pointer`}>
                                    <svg
                                        className="w-auto h-12 max-sm:h-10"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="currentColor"
                                            stroke="none"
                                        >
                                            <path
                                                stroke-width="1.5"
                                                d="M1720 3731 c-469 -7 -501 -12 -669 -93 -133 -64 -665 -472 -802 -615 -87 -91 -123 -141 -171 -238 -70 -140 -73 -156 -73 -410 0 -218 1 -233 24 -288 45 -112 144 -207 258 -249 50 -19 85 -22 264 -26 l206 -4 13 -41 c20 -69 69 -153 124 -212 205 -221 567 -221 772 0 55 59 104 143 125 213 l12 42 757 0 757 0 12 -42 c21 -70 70 -154 125 -213 205 -221 567 -221 772 0 55 59 104 143 124 212 l13 41 206 4 c179 4 214 7 264 26 114 42 214 137 258 249 22 53 24 72 24 243 0 177 -1 188 -28 260 -53 145 -172 267 -311 319 -33 12 -249 53 -509 96 -249 41 -462 78 -474 82 -13 5 -167 132 -343 283 -176 151 -344 287 -373 303 -99 52 -157 58 -567 61 -206 2 -562 0 -790 -3z m-220 -216 c0 -2 -47 -74 -104 -159 -57 -84 -109 -171 -116 -191 -30 -92 8 -197 92 -252 l42 -28 1175 -6 c810 -4 1202 -10 1261 -18 254 -35 838 -143 880 -163 84 -41 170 -154 170 -223 0 -24 -2 -25 -69 -25 -79 0 -112 -19 -131 -74 -9 -27 -8 -42 4 -69 20 -48 60 -67 141 -67 l67 0 -7 -32 c-12 -55 -48 -111 -93 -143 l-44 -30 -202 -3 -203 -3 -12 43 c-21 70 -70 154 -125 213 -205 221 -567 221 -772 0 -55 -59 -104 -143 -125 -212 l-12 -43 -757 0 -757 0 -12 43 c-21 69 -70 153 -125 212 -205 221 -567 221 -772 0 -55 -59 -104 -143 -125 -212 l-12 -43 -189 0 c-201 0 -237 7 -286 53 -28 26 -57 80 -67 125 l-7 32 67 0 c81 0 121 19 141 67 12 27 13 42 4 69 -19 55 -52 74 -132 74 -52 0 -70 4 -74 15 -12 31 17 143 60 230 73 149 162 231 616 577 218 166 284 201 430 232 62 14 180 21 180 11z m850 -205 c0 -159 -3 -212 -12 -215 -7 -3 -203 -4 -435 -3 l-423 3 142 213 141 212 294 0 293 0 0 -210z m600 184 c25 -12 68 -39 96 -60 58 -44 394 -334 394 -340 0 -2 -198 -4 -440 -4 l-440 0 0 216 0 216 173 -4 c149 -3 178 -6 217 -24z m-1535 -1285 c63 -30 123 -90 155 -154 20 -41 25 -65 25 -135 -1 -77 -4 -91 -34 -148 -38 -70 -70 -101 -145 -140 -43 -22 -64 -26 -136 -26 -70 -1 -94 4 -135 24 -260 128 -238 495 35 594 63 23 170 16 235 -15z m2560 0 c63 -30 123 -90 155 -154 20 -41 25 -65 25 -135 -1 -77 -4 -91 -34 -148 -38 -70 -70 -101 -145 -140 -43 -22 -64 -26 -136 -26 -70 -1 -94 4 -135 24 -260 128 -238 495 35 594 63 23 170 16 235 -15z"
                                            />
                                            <path
                                                stroke-width="1.5"
                                                d="M2623 2655 c-33 -14 -63 -59 -63 -95 0 -37 30 -81 65 -96 50 -20 256 -19 300 2 31 14 65 64 65 94 0 30 -34 80 -65 94 -44 21 -255 22 -302 1z"
                                            />
                                            <path
                                                stroke-width="1.5"
                                                d="M1253 2023 c-30 -6 -70 -49 -78 -83 -9 -42 19 -95 61 -115 43 -20 83 -13 118 21 75 76 6 197 -101 177z"
                                            />
                                            <path
                                                stroke-width="1.5"
                                                d="M3790 2012 c-24 -13 -39 -31 -49 -59 -13 -36 -12 -43 5 -79 25 -51 84 -75 129 -53 71 35 89 119 38 171 -38 37 -79 44 -123 20z"
                                            />
                                        </g>
                                    </svg>
                                    <p className={`text-gray-600  ${activeIndex === 2 ? 'text-red-500' : ''} text-xs font-semibold `}>Medium</p>
                                </div>

                                <div onClick={() => handleClick(3)} className={`border-2 rounded-md focus:border-red-500 focus:ring-red-500 text-gray-600 border-gray-400 py-2 px-10 max-sm:px-5 items-center text-center ${activeIndex === 3 ? 'text-red-500 border-red-500' : ''} cursor-pointer`}>
                                    <svg
                                        className="w-auto h-12 max-sm:h-10 mx-auto"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 22 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 1V5.06574C4 5.46509 4.44507 5.70328 4.77735 5.48177L6.72265 4.1849C6.8906 4.07293 7.1094 4.07293 7.27735 4.1849L9.22265 5.48177C9.55493 5.70329 10 5.46509 10 5.06574V1"
                                            stroke="currentColor"
                                            stroke-width="1"
                                        />
                                        <path
                                            d="M7.25 14.75C7.25 15.1478 7.09196 15.5294 6.81066 15.8107C6.52936 16.092 6.14782 16.25 5.75 16.25C5.35217 16.25 4.97064 16.092 4.68934 15.8107C4.40803 15.5294 4.25 15.1478 4.25 14.75M7.25 14.75C7.25 14.3522 7.09196 13.9706 6.81066 13.6893C6.52936 13.408 6.14782 13.25 5.75 13.25C5.35217 13.25 4.97064 13.408 4.68934 13.6893C4.40803 13.9706 4.25 14.3522 4.25 14.75M7.25 14.75H13.25M4.25 14.75H2.375C2.07663 14.75 1.79048 14.6315 1.5795 14.4205C1.36853 14.2095 1.25 13.9234 1.25 13.625V10.25M13.25 14.75H15.5M13.25 14.75V10.25M1.25 10.25V2.615C1.24841 2.34117 1.34846 2.07649 1.53079 1.87218C1.71312 1.66787 1.96475 1.53846 2.237 1.509C5.57005 1.16303 8.92995 1.16303 12.263 1.509C12.828 1.567 13.25 2.047 13.25 2.615V3.573M1.25 10.25H7.25H13.25M18.5 14.75C18.5 15.1478 18.342 15.5294 18.0607 15.8107C17.7794 16.092 17.3978 16.25 17 16.25C16.6022 16.25 16.2206 16.092 15.9393 15.8107C15.658 15.5294 15.5 15.1478 15.5 14.75M18.5 14.75C18.5 14.3522 18.342 13.9706 18.0607 13.6893C17.7794 13.408 17.3978 13.25 17 13.25C16.6022 13.25 16.2206 13.408 15.9393 13.6893C15.658 13.9706 15.5 14.3522 15.5 14.75M18.5 14.75H19.625C20.246 14.75 20.754 14.246 20.715 13.626C20.5141 10.3236 19.4019 7.14156 17.502 4.433C17.321 4.17928 17.0848 3.97002 16.811 3.82103C16.5373 3.67204 16.2333 3.58723 15.922 3.573H13.25M13.25 3.573V10.25"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <p className={`text-gray-600 ${activeIndex === 3 ? 'text-red-500' : ''} text-xs font-semibold`}>Large</p>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm max-sm:text-xs font-semibold text-gray-700 dark:text-gray-200">
                                    Upload image<span className="text-red-500">*</span>
                                </label>
                                <input type="file" class="block w-full text-sm border-2 rounded-md text-gray-600 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold  file:bg-red-600 file:text-white hover:file:bg-red-700 file:disabled:opacity-50 file:disabled:pointer-events-none dark:file:bg-red-500 dark:hover:file:bg-red-400" />
                            </div>
                        </div>
                    </div>
                }
                <PrelineScript />
            </div>
        );
    };

    const handleBack = () => {
        dispatch(setStep(step - 1));
    };

    const handleNext = () => {
        if (step === 3) {
            //   handleSave();
        }
        dispatch(setStep(step + 1));
    };

    return (
        <div>
            <DashNav>
                <div className="mx-2">
                    <div className="w-full sticky z-20 top-10 pb-6">
                        <div className="py-1.5 grid gap-3 md:flex md:justify-between items-center ">
                            <div className="mx-auto">
                                <h2 className="flex text-lg font-semibold text-gray-700 dark:text-gray-200 justify-center">
                                    Send Shipment
                                </h2>
                            </div>
                        </div>
                        <div className="bg-white w-full rounded-lg py-6 shadow-md">
                            <div className=" max-w-[60rem] max-sm:max-w-full items-center px-10 max-sm:py-4 max-sm:px-5 rounded-lg mx-auto">
                                <ul class="relative flex flex-row gap-x-2 justify-center items-center">
                                    <li class="shrink basis-0 flex-1 group relative">
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span class="w-10 h-10 flex justify-center items-center flex-shrink-0 bg-red-500 font-medium text-white rounded-full dark:bg-gray-700 dark:text-white">
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 14 14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
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
                                            <span className="font-semibold text-md max-sm:text-[12px]">
                                                {step === 1
                                                    ? "Where is the shipment located?"
                                                    : step === 2
                                                        ? "Where the receiver address?"
                                                        : "What are you shipping"}
                                            </span>
                                        </div>
                                    </div>
                                    <li class="shrink basis-0 flex-1 group relative">
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span
                                                class={`w-10 h-10 flex justify-center items-center flex-shrink-0 ${step >= 2 ? "bg-red-500" : "bg-gray-300"
                                                    } font-medium text-white rounded-full dark:bg-gray-700 dark:text-white`}
                                            >
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 14 14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1" />
                                                        <path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3">
                                            <span
                                                class={`block text-sm ml-3 font-medium ${step >= 2 ? "text-gray-800" : "text-gray-300"
                                                    } dark:text-white`}
                                            >
                                                To
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle">
                                            <span
                                                class={`w-10 h-10 flex justify-center items-center flex-shrink-0 ${step == 3 ? "bg-red-500" : "bg-gray-300"
                                                    } font-medium text-white rounded-full dark:bg-gray-700 dark:text-white`}
                                            >
                                                <svg
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 14 14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <rect width="13" height="13" x=".5" y=".5" rx="1" />
                                                        <path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3">
                                            <span
                                                class={`block text-sm font-medium ${step >= 3 ? "text-gray-800" : "text-gray-300"
                                                    } dark:text-white`}
                                            >
                                                What
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {step == 1 && <SenderInfo />}
                    {/* {step == 2 && route.push('')} */}
                    {step == 2 && <ReceiverInfo />}
                    {step == 3 && <ShipmentInfo />}

                    <div className="flex my-6 gap-10 max-sm:gap-5 w-full justify-center">
                        {step >= 2 && (
                            <div className="realtive">
                                <button
                                    onClick={handleBack}
                                    type="button"
                                    className="flex w-[10rem] max-sm:w-full rounded-md bg-red-600 px-3 py-2 text-sm justify-center font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300"
                                >
                                    Back
                                </button>
                            </div>
                        )}
                        <div className="realtive">
                            {step < 3 ? (
                                <button
                                    onClick={handleNext}
                                    type="submit"
                                    className="flex w-[10rem] max-sm:w-full rounded-md bg-red-600 px-3 py-2 text-sm justify-center font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    onClick={""}
                                    type="submit"
                                    className="flex w-[10rem] max-sm:w-full rounded-md bg-red-600 px-3 py-2 text-sm justify-center font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300"
                                >
                                    Confirm
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </DashNav>
            <PrelineScript />
        </div>
    );
}

export default CreateShipment;
