import React from 'react'

const ResidentForm = ({handleSubmit }) => {
return (
    <div className='residentForm'>
        <form onSubmit={handleSubmit} >
    <input className='residentFormInput' type="text" id="idLocation" placeholder='Type a location id of the 1 to 126' />
    <button>
    Search
    </button>
    
</form>
    </div>
)
}

export default ResidentForm