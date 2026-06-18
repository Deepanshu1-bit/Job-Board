import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import JobDetails from './Pages/JobDetails';
import SavedJobs from './Components/SavedJobs';
import PostJob from './Pages/PostJob';
const App = () => {
  return (
    <div className='bg-black text-white w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='/Saved-job' element={<SavedJobs />} />
        <Route path='/post-job' element={<PostJob />} />
      </Routes>
    </div>
  )
}

export default App 