// Created (1:17:40): https://youtu.be/A6g8xc0MoiY?si=KCOoJIrSjGnFJyhB&t=5860

'use client'; //turn into client side component (not defaut server component)

import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        // type={"button"} //made dynamic at 1:55:10
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        // onClick={() => {}}
        onClick={handleClick}

    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}
export default CustomButton