//Built out around (1:35:00): https://youtu.be/A6g8xc0MoiY?si=YEJwSnO4amPSiNlG&t=5700
'use client';
import Image from 'next/image';

// import { CustomButton } from "@/components";
import CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll = () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book, or rent a car — quickly and easily!
            </h1>

            <p className="hero__subtitle">
                Streamline your car rental experience with our effortless booking process.
            </p>
{/* props added to CustomButton at (1:41:05): https://youtu.be/A6g8xc0MoiY?si=d-OUXCWIWLcpY3bi&t=6065 */}
            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
{/* Add image at (1:45:33): https://youtu.be/A6g8xc0MoiY?si=ky4GdkVKYJ2_-xhH&t=6333 */}
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            {/* self closing hero__image-overlay div moved outside of hero__image div to get blue background to layout right (2:06:30) */}
                <div className="hero__image-overlay" />
        </div>
{/* end of image div */}

    </div>
  )
}
export default Hero