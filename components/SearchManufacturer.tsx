//Added (2:13:30): https://youtu.be/A6g8xc0MoiY?si=BEnPz6kD0NKlj3g-&t=8010

'use client';
import { SearchManufacturerProps } from '@/types'

//(2:17:38)
import { Combobox, Transition } from '@headlessui/react';

import Image from 'next/image'
import {useState, Fragment} from 'react' //(2:22:25) we don't want to introduce additional elements into the dom, so use fragment

import { manufacturers } from '@/constants';


// At (2:15:08) accept props: https://youtu.be/A6g8xc0MoiY?si=jYI8-6M5r2hQX0jK&t=8108
const SearchManufacturer = ({ manufacturer, setManufacturer} : SearchManufacturerProps) => {

    const [query, setQuery] = useState('');

    const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );


  return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" alt="car logo" width={20} height={20} className="ml-4" />                  
                    </Combobox.Button>

                    <Combobox.Input 
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition 
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        

                            <Combobox.Options>
                                {/* map over all of the options (2:23:27), filter (2:27:00) */}

                                    {/* No create option in our case */}
                                        {filteredManufacturers.length === 0 && query !== "" ?  (
                                            // if query doesn't match any stored options
                                                <Combobox.Option
                                                    value={query}
                                                    // value={setQuery('')}
                                                    className="search-manufacturer__option"                                     
                                                >
                                                    Create "{query}"
                                                </Combobox.Option>

                                        ) : (
                                   
                                    filteredManufacturers.map((item) => (
                                            <Combobox.Option
                                                key={item}
                                                className={({ active}) => `relative search-manufacturer__option 
                                                ${active ? 'bg-primary blue text-whate' : 'text-gray-900'}
                                                `}
                                                value={item}
                                            >
                                                {/* {item} */}
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                            {item}
                                                            </span>

                                                            {/* Show an active blue background color if the option is selected */}
                                                            {selected ? (
                                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                                            ></span>
                                                            ) : null}
                                                    </>
                                    )}

                                            </Combobox.Option>
                                        ))
                                    )} {/* remove closing ')' if you remove the create query above */}                                  
                            </Combobox.Options>
                    </Transition>

                </div>
            </Combobox>
        </div>
  )
}
export default SearchManufacturer