import React, { useContext} from 'react'
import { JobData } from '../Context/JobContext';

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(JobData)

    return (
        <div className='flex justify-center'>
            <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} type='search' placeholder='Search by job role...' className='border border-zinc-500  rounded-2xl p-3 mt-5 w-70 md:mt-10 md:w-150  hover:border-blue-300 shadow-lg shadow-gray-700' />
        </div>
    )
}

export default SearchBar
