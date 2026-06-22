import React from 'react'
import SearchBar from '../Components/SearchBar'
import FilterPanel from '../Components/FilterPanel'
import JobList from '../Components/JobList'

const Home = () => {
    return (
        <div className=' p-8 sm:p-6 flex flex-col md:items-center '>
            <div className='md:w-180'>
                <div className=' bg-zinc-900 rounded-2xl p-5 mb-10 md:p-6 md:mb-10 md:mt-10'>
                    <span className='flex justify-center'>
                        <h1 className='text-2xl md:text-6xl font-bold'>Find your next  <span className='text-red-500 underline hover:text-blue-400'> Job</span></h1>
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
