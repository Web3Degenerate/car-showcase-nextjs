//Added (2:37:20): https://youtu.be/A6g8xc0MoiY?si=jLc_7djl2dVQnY0S&t=9440

//Code Snippet (JavaScipt => fetch): https://rapidapi.com/apininjas/api/cars-by-api-ninjas/
    // const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    // const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': '90bcb74ed9msh7f7c9472c115d55p1af45cjsna5b8acde22f7',
    // 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    // 	}
    // };

    // try {
    // 	const response = await fetch(url, options);
    // 	const result = await response.text();
    // 	console.log(result);
    // } catch (error) {
    // 	console.error(error);
    // }

//import CarProps for generateCarImageURL (3:24:15)
import { CarProps } from "@/types"

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '90bcb74ed9msh7f7c9472c115d55p1af45cjsna5b8acde22f7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    // const carModel = 'corolla' - Start up again at (3:22:37): https://youtu.be/A6g8xc0MoiY?si=S396jPt1oL57-v6d&t=12157 
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', 
        { headers: headers,  
        });

    const result = await response.json();

    return result;   
}

//Added (2:51:55) from: https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/utils/index.ts
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


//Added (3:23:50): https://youtu.be/A6g8xc0MoiY?si=QhVdx7NgSium_Z1B&t=12230
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    //Key: Please use the following customer key (hrjavascript-mastery)

    //set up endpoint
    const url = new URL('https://cdn.imagin.studio/getimage');

    //Destructure the Make, Year and Model form CarProps
    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery')

    //append a make
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;

}