'use client';
import Footer from '@/app/(main)/Footer';
import Navbar from '@/app/(main)/Navbar';
import React, { useEffect, useState } from 'react'

const manageUser = () => {

  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const res = await fetch('http://localhost:5000/influencer/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setUsers(data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  const displayUserCards = () => {
    return users.map((user) => {
      return (
        <div key={user._id} className=''>
          <div className="group flex flex-col bg-white border-2 shadow-md shadow-gray-900 rounded-xl hover:shadow-lg hover:shadow-gray-600 transition dark:bg-slate-100 dark:border-gray-900">
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="size-20 rounded-full object-contain object-center"
                    src={"http://localhost:5000/" + user.pfp}
                    alt="Profile Picture"
                  />
                </div>
                <div className="">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-900 dark:text-gray-900">
                    {user.firstName} {user.lastName}
                  </h3>
                </div>
                <div className="ps-3">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
    <Navbar />
    <div className='min-h-96'>
      <>
        {/* Card Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
            {/* Card */}
            {displayUserCards()}
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Section */}
      </>
    </div>
    <Footer />
    </>
  )
}

export default manageUser;