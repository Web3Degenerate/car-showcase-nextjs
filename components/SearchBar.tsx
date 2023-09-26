//Created at (2:09:56): https://youtu.be/A6g8xc0MoiY?si=dak_QM2UK6AQCkWX&t=7796
//Built out (2:11:30)
'use client'; //(2:12:08)

// import SearchManufacturer  from "./SearchManufacturer";
import {SearchManufacturer}  from "./";
import { useState } from "react";



const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {

    }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}
export default SearchBar