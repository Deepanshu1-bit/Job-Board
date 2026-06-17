import React from 'react'

const FilterPanel = () => {
    return (
        <div className=' flex gap-3 mt-5 md:mt-10'>
            {/* Jb kisi filter ko select kre toh ye properties lg jay like toggle */}
            {/*border-sky-800 bg-sky-950 text-sky-200*/}
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200'>Full-Time</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200'>Part-Time</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200'>Remote</button>
            <button className='border rounded-full  px-2 py-2 text-xs border-zinc-600 bg-zinc-800 text-zinc-200'>Internship</button>
        </div>
    )
}

export default FilterPanel
