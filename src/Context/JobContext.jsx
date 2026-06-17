import { createContext, useRef, useState } from "react";
import jobsData from "../Data/jobs.json";

export const JobData = createContext()
const JobContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setactiveFilter] = useState('')
  return (
    <JobData.Provider value={{ jobs: jobsData, searchQuery, setSearchQuery , activeFilter, setactiveFilter}}>
      {children}
    </JobData.Provider>
  );
};

export default JobContext;
