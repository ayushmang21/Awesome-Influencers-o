'use client';
import React, { useEffect, useState } from 'react'
import Footer from '@/app/(main)/Footer';
import Navbar from '@/app/(main)/Navbar';
import Link from 'next/link';
// import { useParams } from 'next/navigation';

const browseCampaign = () => {

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

  const displayCampCards = () => {
    return campaigns.map((camp) => {
      return (
        <div key={camp._id} className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
          <Link
            href="#"
            className="group select-none relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
          >
            <img
              src={"http://localhost:5000/" + camp.image}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </Link>
          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              <Link
                href={`/view-brand/${camp._id}`}
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
            <p className="text-gray-500 overflow-y-auto h-24 pr-2 my-1">
              {camp.description}
            </p>
            <div>
              <Link
                href={`/influencer/campaign-details/${camp._id}`}
                className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                View Campaign
              </Link>
            </div>
          </div>
        </div>
      );
    })
  }

  return (
    <>
      <Navbar />

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Campaigns
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">

            {/* article - start */}
            {displayCampCards()}
            {/* article - end */}

          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default browseCampaign;