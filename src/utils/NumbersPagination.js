//*function what make an pagination (numbers) 
export const numbersPage = (location , RESIDENT_PER_PAGE ) => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENT_PER_PAGE);
    const arrayPage = []
    for(let i =1; i <= quantityPages ;i++) {
    arrayPage.push(i)
    }
    return arrayPage
  }