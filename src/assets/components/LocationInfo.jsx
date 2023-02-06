import React from 'react'


const LocationInfo = ({location }) => {
  return (
    <div className='locationInfo'>
       <div> 
        <h2 className='locationName'>{location?.name}
        </h2><br />
       </div >
            <div><span id='span1' >Type:</span><br />{location?.type}</div>
            <div><span id='span2'>Dimension:</span><br />{location?.dimension}</div>
            <div><span  id='span3'>Populations:</span><br />{location?.residents.length}</div>
    </div>
  )
}

export default LocationInfo