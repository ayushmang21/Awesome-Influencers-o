'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewInfluencer = () => {

  const { id } = useParams();

  const [influencer, setInfluencer] = useState([]);

  const getInfluencerData = async () => {
    const res = await fetch('http://localhost:5000/influencer/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setInfluencer(data);
  }

  useEffect(() => {
    getInfluencerData();
  }, []);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        {
          influencer !== null ? (
            <div className="relative flex">
              <div className="min-h-screen lg:w-1/3" />
              <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block" />
              <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                  {influencer.firstName} {influencer.lastName}
                </h1>
                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                  <img
                    className="object-contain object-center lg:w-[32rem] rounded-full h-96"
                    src={"http://localhost:5000/" + influencer.pfp}
                    alt=""
                  />
                  <div className="mt-8 lg:px-10 lg:mt-0">
                    <h3 className="mt-6 text-lg font-medium text-blue-500">
                      Phone - {influencer.phone}
                    </h3>
                    <h3 className="mt-6 text-lg font-medium text-blue-500">
                      Email - {influencer.email}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Brand Not Found
              </h1>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default viewInfluencer;