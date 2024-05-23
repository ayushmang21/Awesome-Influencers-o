'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const viewBrand = () => {

    const { id } = useParams();

    const [brand, setBrand] = useState([]);

    const getBrandData = async () => {
        const res = await fetch('http://localhost:5000/brand/getbyid/' + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);

        setBrand(data);
    }

    useEffect(() => {
        getBrandData();
    }, []);

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                {
                    brand !== null ? (
                        <div className="relative flex">
                            <div className="min-h-screen lg:w-1/3" />
                            <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block" />
                            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                    {brand.brandName}
                                </h1>
                                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                                    <img
                                        className="object-contain object-center w-full lg:w-[32rem] rounded-lg h-96"
                                        src={"http://localhost:5000/" + brand.logo}
                                        alt=""
                                    />
                                    <div className="mt-8 lg:px-10 lg:mt-0">
                                        <h1 className="text-2xl font-semibold dark:text-white lg:w-72">
                                            {brand.tagline}
                                        </h1>
                                        <p className="max-w-lg mt-6 dark:text-white">
                                            {brand.description}
                                        </p>
                                        <h3 className="mt-6 text-lg font-medium text-blue-500">
                                            Our Email - {brand.email}
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
        </>
    )
}

export default viewBrand;