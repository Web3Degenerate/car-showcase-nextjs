import Image from 'next/image'
import {Hero, SearchBar, CustomFilter, CarCard} from '@/components'

//At (2:40:30) import rapid api utility function fetchCars: https://youtu.be/A6g8xc0MoiY?si=WkfftVejN6AfziSQ&t=9630
import { fetchCars } from '@/utils';


// export default async function Home() {  //(2:40:40) we can make entire Home function async to use await

export default async function Home({ searchParams }) {  // (3:45:10) - get searchParams from url through PROPS


  // const allCars = await fetchCars();
  // (3:45:19) pass in searchParams for manufacturer and model: 
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '', 
    year: searchParams.year || 2022, 
    fuel: searchParams.fuel || '', 
    limit: searchParams.limit || 10, // how many cars see at start.
    model: searchParams.model || '',
  });


  // console.log("RapidAPI all cars fetch request returned: ",allCars)
  console.log(allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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

                {/* At (2:42:44) display cars from Rapid API fetchCars() */}
                {!isDataEmpty ? (
                  <section>
                    <div className="home__cars-wrapper">
                      {allCars?.map((car) => (
                        <CarCard car={car} />
                      ))}
                    </div>
                  </section>
                ) : (
                  <div className="home__error-container">
                      <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                      <p>{allCars?.message}</p>
                  </div>
                )}

        </div>

    </main>
  )
}
