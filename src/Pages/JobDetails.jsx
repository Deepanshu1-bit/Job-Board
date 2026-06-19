import React, { useContext } from 'react'
import { JobData } from '../Context/JobContext';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobs } = useContext(JobData)
  const { id } = useParams();

  const job = jobs.find((item) => { return item.id === Number(id) })

  const clicksavejob = (() => {
    const prev = JSON.parse(localStorage.getItem('Saved Jobs')) || []

    const alreadySaved = prev.some((item) => item.id === job.id)
    if (alreadySaved) return alert('Job already saved!')

    const updatedJobs = [...prev, job]
    localStorage.setItem('Saved Jobs', JSON.stringify(updatedJobs))
    return updatedJobs
  })

  return (
    <div className='p-4 sm:p-6 flex justify-center'>
      <div className='border border-[#9898AA] bg-zinc-900 p-4 rounded-2xl w-80  md:mt-20 h-130 md:h-120 md:w-150 hover:border-t-4 hover:border-t-red-400  hover:shadow-xl hover:shadow-gray-900'>
        <div className=' h-15 flex justify-end md:h-25'>
          <img src={job.logo} alt={`${job.company}`} className='w-17  h-17  md:w-25 md:h-25 rounded-2xl' />
        </div>
        <div className=' flex flex-col gap-5'>
          <h3 className=' mt-5 text-2xl md:text-4xl  font-semibold'>{job.title}</h3>
          <p className=' text-[#9898AA] flex gap-2 md:text-md font-medium '>{job.company} · {job.location} · {job.type} · {job.salary} LPA</p>
          <p className='  text-[#9898AA] flex gap-2 md:text-md font-medium tracking-wider md:tracking-wide'>{job.description}</p>
          <div className=' flex gap-2 flex-wrap '>
            {job.skills.map((item, index) => {
              return <span key={index} className='border border-zinc-600 text-zinc-400 bg-zinc-800 hover:bg-[#252533] rounded-3xl py-1 px-2'>{item}</span>
            })}
          </div>
          <div className='flex gap-4'>
            <button onClick={clicksavejob} className=' border-blue-400 p-3 w-33 md:w-65 rounded-2xl bg-blue-500 flex justify-center gap-2 items-center active:scale-95 transition-transform duration-150' >
              Save Job</button>
            <Link to={'/apply'}>
              <button className=' border-red-400 bg-red-500 p-3 w-34 md:w-65 rounded-2xl  flex justify-center gap-2 items-center active:scale-95 transition-transform duration-150' >
                Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default JobDetails