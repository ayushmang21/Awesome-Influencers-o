'use client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { Formik } from 'formik';

const influencerProfile = () => {

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

  const submitForm = async (values, { resetForm }) => {
    console.log(values);

    const res = await fetch('http://localhost:5000/influencer/update/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    console.log(res.status);
    console.log(res.statusText);

    if (res.status === 200) {
      enqueueSnackbar('Updated Successfully', { variant: 'success' });
      resetForm();
    } else {
      enqueueSnackbar('Failed to Update', { variant: 'error' });
    }
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        {
          influencer !== null ? (
            <Formik initialValues={influencer} onSubmit={submitForm}>
              {
                ({ values, handleChange, handleSubmit, errors, touched }) => {
                  return (
                    <div>
                      <section className="bg-gradient-to-br from-[#902eba] via-[#3d00a6] to-[#000e17]">
                        <div className="flex justify-center min-h-screen">
                          <div
                            className="hidden bg-cover lg:block lg:w-2/5"
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")'
                            }}
                          ></div>
                          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                            <div className="w-full">
                              <h1 className="text-3xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                              </h1>
                              <p className="mt-6 text-gray-500 dark:text-gray-100">
                                Let’s get you all set up so you can verify your personal account and
                                begin setting up your profile.
                              </p>

                              <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      First Name
                                    </label>
                                    <span className='text-red-500'>{touched.firstName && errors.firstName}</span>
                                    <input
                                      id='firstName'
                                      type="text"
                                      placeholder="John"
                                      onChange={handleChange} value={values.firstName}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      Last name
                                    </label>
                                    <span className='text-red-500'>{touched.lastName && errors.lastName}</span>
                                    <input
                                      id='lastName'
                                      type="text"
                                      placeholder="Snow"
                                      onChange={handleChange} value={values.lastName}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      Phone number
                                    </label>
                                    <span className='text-red-500'>{touched.phone && errors.phone}</span>
                                    <input
                                      id='phone'
                                      type="text"
                                      placeholder="XXX-XX-XXXX-XXX"
                                      onChange={handleChange} value={values.phone}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      Email address
                                    </label>
                                    <span className='text-red-500'>{touched.email && errors.email}</span>
                                    <input
                                      id='email'
                                      type="email"
                                      placeholder="johnsnow@example.com"
                                      onChange={handleChange} value={values.email}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      Password
                                    </label>
                                    <span className='text-red-500'>{touched.password && errors.password}</span>
                                    <input
                                      id='password'
                                      type="password"
                                      placeholder="Enter your password"
                                      onChange={handleChange} value={values.password}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                      Confirm password
                                    </label>
                                    <span className='text-red-500'>{touched.confirm && errors.confirm}</span>
                                    <input
                                      id='confirm'
                                      type="password"
                                      placeholder="Enter your password"
                                      onChange={handleChange} value={values.confirm}
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                  </div>
                                </div>

                                <button
                                  type='submit'
                                  className="flex items-center mt-9 mx-auto justify-center w-1/2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#69a600] rounded-lg hover:bg-[#4e7b00] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                  
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 rtl:-scale-x-100"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>

                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  )
                }
              }
            </Formik>
          ) : (
            <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Influencer Not Found
              </h1>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default influencerProfile;