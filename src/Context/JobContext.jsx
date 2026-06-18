import { createContext, useState } from "react";
import jobsData from "../Data/jobs.json";

export const JobData = createContext()

const JobContext = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setactiveFilter] = useState('')  

  const [jobs, setjobs] = useState(() => {
    const posted = JSON.parse(localStorage.getItem('Posted Jobs'))
    const savedpostedjobs = Array.isArray(posted) ? posted : []
    return [...jobsData, ...savedpostedjobs]
  })

  return (
    <JobData.Provider value={{ jobs, setjobs, searchQuery, setSearchQuery, activeFilter, setactiveFilter }}>
      {children}
    </JobData.Provider>
  );
};

export default JobContext;