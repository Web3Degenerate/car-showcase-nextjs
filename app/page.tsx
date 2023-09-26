import Image from 'next/image'
import {Hero, SearchBar, CustomFilter} from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden">
        <Hero />

{/* Set up car catalogue at (2:07:40): https://youtu.be/A6g8xc0MoiY?si=K1S6mkiLweF3SK5n&t=7660 */}

      {/* Catalogue div wrapper */}
        <div className="mt-12 padding-x padding-y max-width" id="discover">

                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                      <p>Explore the cars you might like.</p>
                </div>

      {/* filters added (2:09:02) */}
                <div className="home__filters">
                      <SearchBar />


                      <div className="home__filter-container">
                          <CustomFilter title="fuel" />
                          <CustomFilter title="year" />


                      </div>

                </div>

        </div>

    </main>
  )
}
