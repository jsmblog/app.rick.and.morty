import React from 'react'
import { numbersPage } from '../../utils/NumbersPagination'

const Pagination = ({  setPage, RESIDENT_PER_PAGE , location}) => {
return (
<section className='pagination'>
    <div className='paginationNumbers'>
        {
        numbersPage(  location,RESIDENT_PER_PAGE).map( numbersPage => <h4   onClick={()=>setPage(numbersPage)} key={numbersPage}> <span className='paginationNumberPage'>{numbersPage}</span> </h4> )
        }
    </div>
</section>
)
}

export default Pagination