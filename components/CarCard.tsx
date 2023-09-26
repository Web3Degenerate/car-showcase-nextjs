//Added (2:45:38): https://youtu.be/A6g8xc0MoiY?si=st8GtKgAXsArhotK&t=9938
'use client';
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';

import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';

//(3:03:56) import CarDetails
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

    // (2:49:40) destructure the CarProps properties
    const {city_mpg, year, make, model, transmission, drive} = car;

    const carRent = calculateCarRent(city_mpg, year); 

    //Added for CustomButton 'View More'
    const [isOpen, setIsOpen] = useState(false) 

  return (
    <div className="car-card group">

            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                    {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image 
                    // src="/hero.png" // Updated with Imagin images (3:28:35)
                    src={generateCarImageUrl(car)}
                    alt="car model"
                    // width={50}
                    // height={50}
                    fill
                    priority
                    className="object-contain"
                />
            </div>


            <div className="relative flex w-full mt-2">

                    <div className="flex group-hover:invisible w-full justify-between text-gray">
                        {/* Transmission */}
                                <div className="flex flex-col justify-center items-center gap-2">
                                        <Image 
                                            src="/steering-wheel.svg"
                                            width={20}
                                            height={20}
                                            alt="steering wheel"
                                        />
                                        <p className="text-[14px]">
                                            {transmission == 'a' ? 'Automatic' : 'Manual'}
                                        </p>
                                </div>
                        {/* Tire */}
                                <div className="flex flex-col justify-center items-center gap-2">
                                        <Image 
                                            src="/tire.svg"
                                            width={20}
                                            height={20}
                                            alt="tire"
                                        />
                                        <p className="text-[14px]">
                                            {drive.toUpperCase()}
                                        </p>
                                </div>
                        {/* Gas */}
                                <div className="flex flex-col justify-center items-center gap-2">
                                        <Image 
                                            src="/gas.svg"
                                            width={20}
                                            height={20}
                                            alt="gas"
                                        />
                                        <p className="text-[14px]">
                                            {city_mpg} MPG
                                        </p>
                                </div>
                    </div>

                {/* Button */}
                        <div className="car-card__btn-container">
                            <CustomButton 
                                title="View More" 
                                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                                textStyles="text-white text-[14px] leading-[17px] font-bold"
                                rightIcon="/right-arrow.svg"
                                handleClick={() => setIsOpen(true)}
                            />
                        </div>                   
            </div>

    {/* Add Modal at (3:03:16): https://youtu.be/A6g8xc0MoiY?si=gKW9QlfJ3atZD0KF&t=10996 */}

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />

    </div>
  )
}
export default CarCard