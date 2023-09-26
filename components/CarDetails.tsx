// Added at (3:03:36): https://youtu.be/A6g8xc0MoiY?si=Dy0Vc-9CpVehpAgc&t=11016
'use client'; //(3:08:30) headlessui uses 'use client'

import { CarProps } from '@/types';

import Image from 'next/image';
import {Fragment} from 'react'
// import { JsxFragment } from 'typescript';

//headless ui
import {Dialog, Transition} from '@headlessui/react'

//Pull in utils function to pull images from imagin API (3:30:00)
import {generateCarImageUrl} from '@/utils';



//(3:05:10) create props in the same file. 
interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void; //just a function that is not going to return anything
    //Use another interface we created before
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    
    <>

    {/* Background */}
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

    {/* Build Modal at (3:09:50) */}
                    <div className="fixed inset-0 overflow-y-auto">
                {/* wrapper div */}
                        <div className="flex min-h-full items-center justify-center p-4 text-center"> 
                            
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                                {/* max-h-[90vh] takes 90% of the screen, never full */}
    {/* Close Modal Button - add p-6 padding on Dialog.Panel for text layout (3:21:33) */}                             
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto
                                    transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all 
                                    flex flex-col gap-5">
                                            <button
                                                type="button"
                                                onClick={closeModal}
                                                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                            >
                                                <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
                                                                                                 
                                            </button>

                        {/* Modal Content (3:13:50) */}
                                            <div className="flex-1 flex flex-col gap-3">
                                                {/* image wrapper div */}
                                                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                                            {/* <Image src="/hero.png" alt="car placeholder" fill priority className="object-contain" /> */}
                                                            <Image src={generateCarImageUrl(car)} alt="car placeholder" fill priority className="object-contain" />
                                                            
                                                    </div>

                                                    {/* div for three smaller images down below  */}
                                                    <div className="flex gap-3">
                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                {/* replaced src="/hero.png" on all three images below with 'src={generateCarImageUrl(car, 'angle')}' */}
                                                                    <Image src={generateCarImageUrl(car, '29')} alt="car placeholder" fill priority className="object-contain" />
                                                            </div>

                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                    <Image src={generateCarImageUrl(car, '33')} alt="car placeholder" fill priority className="object-contain" />
                                                            </div>

                                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                                    <Image src={generateCarImageUrl(car, '13')} alt="car placeholder" fill priority className="object-contain" />
                                                            </div>
                                                    </div>
                                            </div>

                                    {/* Car Details in table/row format (3:16:35) */}
                                               {/* Name and Brand  */}
                                                <div className="flex-1 flex flex-col gap-2">
                                                        <h2 className="font-semibold text-xl capitalize">
                                                            {car.make} {car.model}
                                                        </h2>  

                                                        {/* Model Rows of Text. Map over with `Object.entries()` (3:18:55) */}
                                                        <div className="mt-3 flex flex-wrap gap-4">
                                                            {Object.entries(car).map(([key, value]) => (
                                                                <div className="flex justify-between gap-5 w-full text-right"
                                                                key={key}>
                                                                    <h4 className="text-grey capitalize">
                                                                        {key.split("_").join(" ")}
                                                                    </h4>
                                                                    <p className="text-black-100 font-semibold">{value}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                </div>

                            </Dialog.Panel>

                            </Transition.Child>

                        </div>
                    </div>

            </Dialog>
        </Transition>
    </>

  )
}
export default CarDetails