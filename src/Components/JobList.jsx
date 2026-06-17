import React from 'react'
import { useContext } from "react";
import { JobData } from "../Context/JobContext";
import { Link } from 'react-router-dom';
const JobList = () => {
  const { jobs, searchQuery, activeFilter } = useContext(JobData)

  const displayedJobs = (searchQuery && activeFilter) ? jobs.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase().trim().replace(/\s+/g, " ")) &&
    item.type === activeFilter // Search + Filter
  ) : (searchQuery && !activeFilter) ? jobs.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase().trim().replace(/\s+/g, " ")) // Search only
  }) : (activeFilter && !searchQuery) ? jobs.filter((item) => {
    return item.type === activeFilter // Filter only  
  }) : jobs.slice(0, 10)

  const getTypeStyle = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-[#1E3A5A] text-[#5299D3]";
      case "Remote":
        return "bg-[#1E3838] text-[#4DB8A0]";
      case "Hybrid":
        return "bg-[#3A2E1E] text-[#D3A05A]";
      default:
        return "bg-zinc-800 text-zinc-300";
    }
  };
  return (
    <div className='pt-2 max-h-90 mt-7 flex flex-col gap-5 overflow-scroll scrollbar-none'>
      {displayedJobs.map((item) => {
        return (
          <Link key={item.id} to={`/jobs/${item.id}`}>
            <div className='border  border-zinc-600 rounded-2xl ' key={item.id} >
              <div className=' border border-[#1E1E28] pb-1 rounded-2xl flex justify-between bg-zinc-800 hover:bg-[#252533] transition-colors duration-200 '>
                <div className=' border-green-700 flex flex-1 gap-2 min-w-0'>
                  <img src={item.logo} alt={item.company} className=' m-2 w-12 h-12 rounded' />
                  <span className=' flex flex-col justify-center'>
                    <span className=' text-lg md:text-2xl'>
                      {item.title}
                    </span>
                    <div className=' border-red-900 flex flex-wrap gap-3 items-center text-xs text-[#9898AA] '>
                      <span className=''>
                        {item.company} - {item.location}
                      </span>
                      <span className={`border p-1 self-start flex  items-center rounded-2xl text-xs ${getTypeStyle(item.type)}`}>{item.type}</span>
                    </div>
                  </span>
                </div>
                <span className=' h-12 flex flex-col justify-center'>

                  <span className=' m-1 p-2 h-5 flex items-center rounded-2xl text-xs bg-[#735A30] text-[#C8AD7B]'>{item.salary}</span>
                  <span className=' flex justify-center text-xs text-[rgb(149,147,138)]'>{item.postedDaysAgo}d ago</span>
                </span>
              </div>
            </div>
          </Link>

        )
      })}
    </div>
  )
}

export default JobList