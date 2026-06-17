import { createContext, useRef, useState } from "react";
import jobsData from "../Data/jobs.json";

export const JobData = createContext()
const JobContext = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <JobData.Provider value={{ jobs: jobsData, searchQuery, setSearchQuery}}>
      {children}
    </JobData.Provider>
  );
};

export default JobContext;
