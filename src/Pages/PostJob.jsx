import React, { useContext, useState } from 'react'
import { JobData } from '../Context/JobContext'

const PostJob = () => {
  const { jobs } = useContext(JobData)

  const [JobTitle, setJobTitle] = useState('')
  const [Company, setCompany] = useState('')
  const [Location, setLocation] = useState('')
  const [JobType, setJobType] = useState('')
  const [Salary, setSalary] = useState('')
  const [Description, setDescription] = useState('')

  const newJob = {
    id: jobs.length + 1,
    title: JobTitle,
    company: Company,
    location: Location,
    type: JobType,
    salary: Salary,
    postedDaysAgo: 1,
    description: Description
  }

  const AddPostedJobs = ((e) => {
    e.preventDefault()
    if (!JobTitle || !Company || !JobType || !Location || !Salary || !Description) {
      alert('Fill all fields!')
      return
    }

  })

  return (
    <form className='flex justify-center mt-20' >
      <div className='border border-[#9898AA] bg-zinc-900 flex flex-col gap-5 rounded-2xl w-85 md:w-150 p-4'>
        <h1 className='text-2xl font-bold'>Post a new job</h1>
        <input value={JobTitle} onChange={(e) => { setJobTitle(e.target.value) }} type='search' placeholder='Job title' className='border border-[#9898AA] rounded p-3' />{/* Job title------------------ */}
        <div className='flex gap-4'>
          <span>
            <input value={Company} onChange={(e) => { setCompany(e.target.value) }} className='border border-[#9898AA] rounded p-2 w-36 md:w-68' type='text' placeholder='Company' />{/*Company------------------ */}
          </span>
          <span>
            <input value={Location} onChange={(e) => { setLocation(e.target.value) }} className='border border-[#9898AA] rounded p-2 w-36 md:w-68' type='text' placeholder='Location' />{/*Location------------------ */}
          </span>
        </div>
        <div className='flex gap-4'>
          <div className="relative">
            <select value={JobType} onChange={(e) => { setJobType(e.target.value) }} className="appearance-none border border-[#9898AA] text-[#9898AA] bg-zinc-900 rounded p-2 pr-10 w-36 md:w-68">{/*Job type------------------ */}
              <option value="" disabled defaultValue>Job type</option>
              <option value={'Full-time'}>Full-Time</option>
              <option value={'Remote'}>Remote</option>
              <option value={'Hybrid'}>Hybrid</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"> {/*Arrow svg------------------ */}
              <svg
                className="w-3 h-3 text-[#9898AA]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <span>
            <input value={Salary} onChange={(e) => { setSalary(e.target.value) }} className='border border-[#9898AA] rounded p-2 w-36 md:w-68' type='text' placeholder='Salary' /> {/*Salary------------------ */}
          </span>
        </div>
        <textarea value={Description} onChange={(e) => { setDescription(e.target.value) }} className='border border-[#9898AA] rounded p-2 scrollbar-none' rows='5' placeholder='Description...'></textarea>{/*Description------------------ */}
        <button type='submit' onClick={AddPostedJobs} className='p-3 rounded-2xl bg-blue-500 flex justify-center active:scale-95 transition-transform duration-150' >Post Job</button>
      </div>
    </form>
  )
}

export default PostJob