import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentsCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {
        axios.get(residentUrl)
        .then((res)=> setResidentInfo(res.data))
        .catch((err)=> console.log(err))
        },[])
return (
  
    <section className='residentCard'>
        <div>
            <img src={residentInfo?.image} alt="" />
        </div>
        <div className='statusOfCharacters'>
            <div className={`circleOfStatus ${residentInfo?.status}`}></div>
            <h3>{residentInfo?.status}</h3>
        </div>
        <div className='residentCardInfo'>
            <h3>{residentInfo?.name}</h3>
            <ul>
                <li><span>Specie: </span>{residentInfo?.species}</li>
                <li><span>Origin:</span>{residentInfo?.origin.name} </li>
                <li ><span>Episodes where appears:</span>{residentInfo?.episode.length}</li>
            </ul>
        </div>

    </section>
)
}

export default ResidentsCard