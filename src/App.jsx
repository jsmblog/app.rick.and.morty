
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './assets/components/LocationInfo'
import Pagination from './assets/components/Pagination'
import ResidentForm from './assets/components/ResidentForm'
import ResidentList from './assets/components/ResidentList'
import { getRandomNumber } from './utils/handleRandom'
import portal from './assets/imagenes/portal-removebg-preview.png'

//!Resident perpage
const RESIDENT_PER_PAGE = 12;

function App() {
  //*states
  /**************************** **/
  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)
/**************************** **/
  //*functions
  /**************************** **/
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

 //*pagination 
  const pagination = () => {
   
    const maxLimit = page * RESIDENT_PER_PAGE;
    const minLimit = maxLimit - RESIDENT_PER_PAGE;
    const newResidents = location?.residents.slice(minLimit , maxLimit);
    return newResidents
  }
 
  /**************************** **/
  //* useEFfect of API rick and Morty 
  /**************************** **/
  useEffect(() => {
    setPage(1)
  const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation

  const url = `https://rickandmortyapi.com/api/location/${dimension}` 
  axios.get(url)
  .then((res)=> setLocation(res.data) )
  .catch((err)=> console.log(err)  )
  },[nameLocation])
/**************************** **/
  return (
    <div className="App">
      <ResidentForm portal={portal} handleSubmit={handleSubmit} />
      <LocationInfo  location={location}/>
      <Pagination location={location} RESIDENT_PER_PAGE={RESIDENT_PER_PAGE}  setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENT_PER_PAGE={RESIDENT_PER_PAGE}  setPage={setPage} />
      <div className='sms'><h2>Hecho con <span id='heart'> ♥</span> por Joel</h2></div>
    </div>
  )
}

export default App
