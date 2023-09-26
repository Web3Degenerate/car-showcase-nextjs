// Added at 1:42:45: https://youtu.be/A6g8xc0MoiY?si=XybQ1AVYHEdRWRWh&t=6165
// interface will specify how a specific structure should look like. What variables and values should it have.

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

//Set types for SearchManufacturer component
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void; //function takes manufacturer as a string and doesn't return anything, it's just a setter state.
}