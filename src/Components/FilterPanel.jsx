import React, { useContext } from 'react'
import { JobData } from '../Context/JobContext'

const FilterPanel = () => {
    const { setactiveFilter } = useContext(JobData)
    return (
        <div className=' flex gap-3'>
            <button className='border rounded-full  px-4 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200  hover:border-blue-400 hover:bg-zinc-800 hover:text-blue-300' onClick={() => { setactiveFilter('') }}>All</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200  hover:border-blue-400 hover:bg-zinc-800 hover:text-blue-300' onClick={() => { setactiveFilter('Full-time') }}>Full-Time</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200 hover:border-blue-400 hover:bg-zinc-800 hover:text-blue-300' onClick={() => { setactiveFilter('Remote') }}>Remote</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200 hover:border-blue-400 hover:bg-zinc-800 hover:text-blue-300' onClick={() => { setactiveFilter('Hybrid') }}>Hybrid</button>
        </div>
    )
}

export default FilterPanel
