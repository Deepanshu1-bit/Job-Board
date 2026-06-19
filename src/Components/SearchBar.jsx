import React, { useState , useContext} from 'react'
import { JobData } from '../Context/JobContext';

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(JobData)

    return (
        <div>
            <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} type='search' placeholder='Search by job role...' className='border border-white rounded-2xl p-3 mt-5 w-70 md:mt-10 md:w-100  hover:border-blue-300' />

        </div>
    )
}

export default SearchBar
