//Created at (2:09:56): https://youtu.be/A6g8xc0MoiY?si=dak_QM2UK6AQCkWX&t=7796
//Built out (2:11:30)
'use client'; //(2:12:08)

// import SearchManufacturer  from "./SearchManufacturer";
import {SearchManufacturer}  from "./";
import { useState } from "react";

import Image from 'next/image';

//Add SearchButton "component" here since we'll only be using it in SearchBar.tsx (3:33:55)
//Can't use {} because 'SearchButton' cannot be used as a JSX component
    // const SearchButton = ({ otherClasses }:  otherClasses: string }) => {
    //   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>

    //   </button>
    // }

// Use () for immediate return arrow function instead:
    const SearchButton = ({ otherClasses }:  {otherClasses: string }) => (
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
          src="/magnifying-glass.svg"
          width={40}
          height={40}
          alt="magnifying glass"
          className="object-contain"
        />
      </button>
    )



const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');


    const handleSearch = () => {
        //update cars we are showing by updating the fetch call to our API (3:33:30): https://youtu.be/A6g8xc0MoiY?si=dI6QPADENQymPNJX&t=12810

    }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />

            <SearchButton otherClasses="sm:hidden" />
        </div>


{/* Below search button, create another div for the second input  */}
        <div className="searchbar__item">
            <Image 
              src="/model-icon.png"
              width={25}
              height={25}
              className="absolute w-[20px] h-[20px] ml-4"
              alt="car model"
            />

            <input 
              type="text"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Tiguan"
              className="searchbar__input"
            />

            <SearchButton otherClasses="sm:hidden"/>
        </div>
            <SearchButton otherClasses="max-sm:hidden"/>

    </form>
  )
}
export default SearchBar