'use client';
import Footer from '@/app/(main)/Footer';
import Navbar from '@/app/(main)/Navbar';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const campaignDetails = () => {

  const { id } = useParams();

  const [campDetail, setCampDetail] = useState([]);

  const getCampDetail = async () => {
    const res = await fetch('http://localhost:5000/campaign/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setCampDetail(data);
  }

  useEffect(() => {
    getCampDetail();
  }, []);

  return (
    <>
      <Navbar />

      <div className='bg-zinc-800'>
        {
          campDetail !== null ? (
            <div className="container flex justify-center w-full min-h-screen px-6 py-10 mx-auto">

              <div className=" flex items-center">

                <div>
                  <img
                    className="object-contain object-center w-[500px] rounded-lg "
                    src={"http://localhost:5000/" + campDetail.image}
                    alt=""
                  />
                </div>

                <div className="lg:px-10">

                  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white text-center py-3">
                    {campDetail.name}
                  </h1>

                  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white p-3 mt-6">
                    {campDetail.brand}
                  </h1>

                  <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 p-3">
                    {campDetail.description}
                  </p>

                  <h3 className="mt-6 text-lg font-medium dark:text-gray-300 px-3">
                    Created On - {campDetail.createdOn}
                  </h3>

                  <h3 className="mt-6 text-lg font-medium dark:text-gray-300 px-3">
                    Last Date - {campDetail.lastDate}
                  </h3>

                </div>
              </div>

            </div>
          ) : (
            <div className="container flex justify-center content-center flex-wrap w-full min-h-screen mx-auto my-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Campaign Not Found
              </h1>
            </div>
          )
        }
      </div>

      {/* <Footer /> */}

    </>
  )
}

export default campaignDetails;