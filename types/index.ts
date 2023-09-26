// Added at 1:42:45: https://youtu.be/A6g8xc0MoiY?si=XybQ1AVYHEdRWRWh&t=6165
// interface will specify how a specific structure should look like. What variables and values should it have.

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

//Set types for SearchManufacturer component
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void; //function takes manufacturer as a string and doesn't return anything, it's just a setter state.
}

// Added (2:47:27) for CarCard component, copy and identify each field returned in the json from rapid Api via test call: https://rapidapi.com/apininjas/api/cars-by-api-ninjas
//use ALT key and click each line to add ';' at the end of each type.
export interface CarProps {
    city_mpg:number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    // year?:number | undefined;
    year:number;

}