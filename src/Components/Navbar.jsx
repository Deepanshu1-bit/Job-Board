import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='border-2 border-zinc-800 bg-[rgb(20,21,25)] p-3  flex items-center justify-between gap-3 text-sm md:text-base'>
            {/* Logo             */}
            <span className=' flex gap-1 shrink-0 items-center'>
                <Link to={'/'}>
                    <svg className='w-10'
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>

                </Link>
            </span>
            {/* --------Saved job and post Job btns---------------------------------- */}
            <span className=' flex gap-5 md:gap-10'>
                <Link to={'/Saved-job'} className='border rounded p-1 flex items-center active:bg-zinc-800 md:border-0 md:border-b-2 md:border-transparent md:hover:border-b-purple-500'>Saved Job</Link>
                <Link to={'/post-job'} className='border border-zinc-700 p-1 flex rounded gap-1 shrink-0 items-center active:bg-zinc-800 hover:bg-zinc-800'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Post Job
                </Link>
            </span>
        </div >
    )
}

export default Navbar
