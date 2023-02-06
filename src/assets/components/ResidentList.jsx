import React from 'react'
import ResidentsCard from './ResidentsCard'

const ResidentList = ({pagination}) => {
return (
    <section className='residentList'>
    {
        pagination()?.map(residentUrl => <ResidentsCard key={residentUrl} residentUrl={residentUrl} /> )
    }
    </section>
)
}

export default ResidentList