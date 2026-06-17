import React from 'react'
import SearchBar from '../Components/SearchBar'
import FilterPanel from '../Components/FilterPanel'
import JobList from '../Components/JobList' 

const Home = () => {
    return (
        <div className=' p-8 sm:p-6 flex flex-col md:items-center '>
            <div>
                <div className=' -mx-8 sm:-mx-6 p-9 pt-3 md:pt-9 sm:px-6 '>
                    <span>
                        <h3 className='text-2xl md:text-6xl font-bold'>Find your next job</h3>
                    </span>
                    <SearchBar />
                </div>
                <FilterPanel />
                <JobList />
            </div>
        </div>
    )
}

export default Home
