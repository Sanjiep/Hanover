"use client";

import React from "react";
import Layout from "@/components/pageLayout/page";
import { Autocomplete, AutocompleteItem, Select, SelectItem } from "@nextui-org/react";
import { cityList } from "./data";
function sentParcel() {
  return (
    <div>
      <Layout>
        <div
          className="relative bg-opacity-50 bg-cover m-6 h-[32rem] bg-repeat bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7363190/pexels-photo-7363190.jpeg")',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 1, 1, 0.7))",
            }}
          ></div>
          <div className="relative flex justify-between z-5 max-w-5xl sm:px-6 py-lg:px-8 lg:py-14 m-auto">
            <div className="relative bg-white border w-full rounded-md shadow sm:p-7 dark:bg-slate-900">
              <div className="text-center mb-5">
                <h2 className="text-xl md:text-xl font-medium text-gray-800 dark:text-gray-200">
                  Sent your <span className="font-bold text-2xl text-red-500">Parcel</span>

                </h2>
              </div>

              <div className="flex flex-col">
                <div className="mb-3 gap-2 flex items-center max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  <div className="before:absolute before:opacity-80 before:border-gray-400 before:border-dashed before:border before:h-12 mt-6 before:-ml-[18px]"></div>
                  <Autocomplete
                    label="From"
                    placeholder="Select a city"
                    className="max-w-full"
                  >
                    {cityList.map((city) => (
                      <AutocompleteItem key={city.value} value={city.value}>
                        {city.label}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>
                </div>

                <div className="w-full flex gap-3 items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <Autocomplete
                    label="To"
                    placeholder="Select a city"
                    className="mb-2"
                  >
                    {cityList.map((city) => (
                      <AutocompleteItem key={city.value} value={city.value}>
                        {city.label}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>


                </div>
                <button
                  type="submit"
                  className="flex max-w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-300">
                  Processed
                </button>
              </div>
            </div>
            <div className="flex flex-wrap max-w-lg pl-10 content-center">
              <h3 className="font-bold text-4xl text-gray-100">
                Get your shipment picked up from your{" "}
                <span className="font-bold text-4xl text-red-500">
                  doorstep
                </span>
              </h3>
              <p className="mt-5 font-small text-md text-white">
                Send your parcel from the comfort of your home or office
              </p>
            </div>

          </div>

        </div>
      </Layout>
    </div>
  );
}

export default sentParcel;
