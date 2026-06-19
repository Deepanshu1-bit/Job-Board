import React, { useState } from 'react'

const ApplyForm = () => {

  const [FullName, setFullName] = useState('')
  const [Email, setEmail] = useState('')
  const [MobileNumber, setMobileNumber] = useState('')
  const [ResumeLink, setResumeLink] = useState('')

  const applicantdetails = {
    Name: FullName,
    Email: Email,
    MobileNumber: MobileNumber,
    Resume: ResumeLink
  }

  const submitform = ((e) => {
    e.preventDefault()
    if (!FullName || !Email || !MobileNumber || !ResumeLink) {
      return alert('Fill all feilds')
    }

    if (MobileNumber.length !== 10 || isNaN(MobileNumber)) {
      return alert('Enter a valid 10 digit mobile number')
    }
    const existing = JSON.parse(localStorage.getItem('Applicant Details'))
    const existingarr = Array.isArray(existing) ? existing : []

    const alreadyApplied = existingarr.some((item) => item.Email === Email || item.MobileNumber === MobileNumber)
    if (alreadyApplied) {
      return alert('You have already applied!')
    }

    localStorage.setItem('Applicant Details', JSON.stringify([...existingarr, applicantdetails]))

    setFullName('')
    setEmail('')
    setMobileNumber('')
    setResumeLink('')
  })

  return (
    <form onSubmit={submitform} className='flex justify-center mt-20' >
      <div className='border border-[#9898AA] bg-zinc-900 flex flex-col gap-5 rounded-2xl w-85 md:w-150 p-4'>
        <input value={FullName} onChange={(e) => { setFullName(e.target.value) }} type='text' placeholder='Full Name' className='border border-[#9898AA] rounded p-3' />{/* Full name------------------ */}
        <div className='flex gap-4'>
          <span>
            <input value={Email} onChange={(e) => { setEmail(e.target.value) }} className='border border-[#9898AA] rounded p-2 w-36 md:w-68' type='email' placeholder='E-mail' />{/*E-Mail------------------ */}
          </span>
          <span>
            <input value={MobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} className='border border-[#9898AA] rounded p-2 w-36 md:w-68' type='text' placeholder='Mobile Number' />{/*Mobile Number------------------ */}
          </span>
        </div>
        <input value={ResumeLink} onChange={(e) => setResumeLink(e.target.value)} type='url' placeholder='Resume link' className='border border-[#9898AA] rounded p-3' /> {/*Resume Link------------------ */}

        <button onClick={submitform} type='submit' className='p-3 rounded-2xl bg-blue-500 flex justify-center active:scale-95 transition-transform duration-150' >Submit</button>
      </div>
    </form>
  )
}

export default ApplyForm
