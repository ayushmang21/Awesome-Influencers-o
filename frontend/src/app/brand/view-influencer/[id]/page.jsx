'use client';
import Footer from '@/app/(main)/Footer';
import Navbar from '@/app/(main)/Navbar';
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
      <Navbar />

      <section className="" style={{
        background: "linear-gradient(115deg, #000000, #444444)",
      }}>
        {
          influencer !== null ? (
            <div className="relative flex">
              <div className="hidden min-h-screen lg:block" />
              <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                  {influencer.firstName} {influencer.lastName}
                </h1>
                <div className="mt-10 lg:mt-20 lg:flex lg:items-center justify-evenly">
                  <img
                    className="object-contain object-center rounded-full size-96 bg-white"
                    src={"http://localhost:5000/" + influencer.pfp}
                    alt=""
                  />
                  <div className="mt-8 p-4 lg:px-10 lg:mt-0 bg-white text-black rounded-md">
                    <h3 className="text-center text-3xl font-medium mb-2">
                      Details
                    </h3>
                    <h3 className="mt-3 text-lg font-medium">
                      Phone - {influencer.phone}
                    </h3>
                    <h3 className="mt-3 text-lg font-medium">
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

      <Footer />
    </div>
  )
}

export default viewInfluencer;