import React, { useContext, useEffect, useState } from 'react'
import { JobData } from '../Context/JobContext'

const SavedJobs = () => {
    const [savedData, setsavedData] = useState(
        JSON.parse(localStorage.getItem('Saved Jobs')) || []
    )

    const deletejob = ((id) => {
        const updated = savedData.filter((item) => item.id !== id)
        localStorage.setItem('Saved Jobs' , JSON.stringify(updated))
        setsavedData(updated)
    })

    return (
        <div>
            <h3 className='flex flex-col gap-4'>{savedData.map((item) => {
                return <div key={item.id}>
                    <div className='border border-[#9898AA] bg-zinc-900 p-4 rounded-2xl w-80  md:mt-5 h-130 md:h-105 md:w-250'>
                        <div className=' h-15 flex justify-end md:h-25'>
                            <img src={item.logo} alt={`${item.company}`} className='w-17  h-17  md:w-25 md:h-25 rounded-2xl' />
                        </div>
                        <div className=' flex flex-col gap-5'>
                            <h3 className=' mt-5 text-2xl md:text-4xl  font-semibold'>{item.title}</h3>
                            <p className=' text-[#9898AA] flex gap-2 md:text-md font-medium '>{item.company} · {item.location} · {item.type} · {item.salary}</p>
                            <p className='  text-[#9898AA] flex gap-2 md:text-md font-medium tracking-wider md:tracking-wide'>{item.description}</p>
                            <div className=' flex gap-2 flex-wrap '>
                                {item.skills.map((item, index) => {
                                    return <span key={index} className='border border-zinc-600 text-zinc-400 bg-zinc-800 hover:bg-[#252533] rounded-3xl py-1 px-2'>{item}</span>
                                })}
                            </div>
                            <div className='flex gap-4'>
                                <button className=' border-blue-400 p-3  md:w-80 rounded-2xl bg-blue-500 flex justify-center gap-2 items-center active:scale-95 transition-transform duration-150' >
                                    Apply</button>
                                <button onClick={() => deletejob(item.id)} className='border-red-400 bg-red-500 p-3  md:w-80 rounded-2xl  flex justify-center gap-2 items-center active:scale-95 transition-transform duration-150'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}</h3>
        </div>
    )
}

export default SavedJobs
