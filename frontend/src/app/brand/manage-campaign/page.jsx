'use client';
import React, { useEffect, useState } from 'react'
import Footer from '@/app/(main)/Footer';
import Navbar from '@/app/(main)/Navbar';
import { enqueueSnackbar } from 'notistack';
import Link from 'next/link';

const manageCampaign = () => {

  const [campaigns, setCampaigns] = useState([]);

  const getCampData = async () => {
    const res = await fetch('http://localhost:5000/campaign/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setCampaigns(data);
  }

  useEffect(() => {
    getCampData();
  }, []);

  const deleteCamp = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/campaign/delete/' + id, {
      method: 'DELETE',
    });

    console.log(res.status);
    getCampData();
    enqueueSnackbar('Tournament Deleted Successfully', { variant: 'success' });
  }

  const displayCampCards = () => {
    return campaigns.map((camp) => {
      return (
        <div key={camp._id} className="flex flex-col items-center overflow-hidden rounded-lg md:flex-row shadow-md shadow-gray-900 hover:shadow-lg hover:shadow-gray-600">
          <Link
            href={`/influencer/campaign-details/${camp._id}`}
            className="group select-none relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
          >
            <img
              src={"http://localhost:5000/" + camp.image}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>

          <div className="flex flex-col gap-2 p-4 lg:p-6 justify-between h-full w-full">
            <h2 className="text-2xl font-bold text-gray-800">
              <Link
                href='/browse-brands'
                className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                {camp.brand}
              </Link>
            </h2>
            <h2 className="text-lg font-semibold text-gray-800">
              <p
                href="#"
                className="transition duration-100 select-none hove:text-indigo-500 active:text-indigo-600"
              >
                {camp.name}
              </p>
            </h2>
            
            <div className="flex gap-2 justify-center">
              <Link
                href={`/influencer/campaign-details/${camp._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                View
              </Link>

              <button
                onClick={() => deleteCamp(camp._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className=''>

      <Navbar />

      <div className='min-h-dvh'>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {displayCampCards()}
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default manageCampaign;