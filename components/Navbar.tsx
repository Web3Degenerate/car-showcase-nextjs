//Built out Navbar at (~1:51:00): https://youtu.be/A6g8xc0MoiY?si=Sz-umhOzKtyd-a2Q&t=6660

import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    // z-index of 10 to allow it to show on top of the other content.
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
            </Link>

            {/* otherside of nav bar (right) at (1:53:38)  */}
            <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
  )
}
export default Navbar