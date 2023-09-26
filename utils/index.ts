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

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '90bcb74ed9msh7f7c9472c115d55p1af45cjsna5b8acde22f7',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    // const carModel = 'corolla'
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', 
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