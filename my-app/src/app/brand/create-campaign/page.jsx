'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import Navbar from '@/app/(main)/Navbar';
import Footer from '@/app/(main)/Footer';
import { useRouter } from 'next/navigation';

const createCampaignSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  brand: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
  image: Yup.string()
    .required('Required'),
  lastDate: Yup.date()
    .min(new Date(), 'Invalid Date')
    .required('Required'),
});

const createCampaign = () => {

  const [cImage, setCImage] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setCImage(file);
    const fd = new FormData();
    fd.append('myfile', file);
    fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Logo Uploaded Successfully');
          createCampaign.setFieldValue('image', file.name);
          enqueueSnackbar('Logo Uploaded Successfully', { variant: 'success' });
        } else {
          console.log('Logo Upload Failed');
          enqueueSnackbar('Logo Upload Failed', { variant: 'error' });
        }

      });
  }

  const router = useRouter();

  const createCampaign = useFormik({
    initialValues: {
      name: '',
      brand: '',
      description: '',
      image: '',
      lastDate: '',
    },
    onSubmit: async (values, { resetForm }) => {
      values.image = cImage.name;
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/campaign/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('Campaign Created Successfully', { variant: 'success' });
        resetForm();
        router.push('/influencer/browse-campaign');
      } else {
        enqueueSnackbar('Failed to Create Campaign', { variant: 'error' });
      }
    },
    validationSchema: createCampaignSchema
  });

  return (
    <>
      <Navbar />

      <div className=''>
        <section className="bg-gradient-to-r from-[#f97794] via-[#623aa2] to-[#111111] min-h-dvh">

          <div className="py-10 px-8 mx-auto max-w-2xl lg:py-10">

            <h2 className="mb-12 text-5xl font-bold text-gray-900 dark:text-white text-center">Create a New Campaign</h2>

            <form onSubmit={createCampaign.handleSubmit} className=''>

              <div className='bg-white bg-opacity-30 p-6 rounded-3xl '>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block p-2.5 w-full text-sm rounded-lg dark:bg-gray-100 dark:placeholder-gray-500 dark:text-black focus:ring-0"
                      placeholder="Type Campaign Name"
                      required=""
                      onChange={createCampaign.handleChange}
                      value={createCampaign.values.name}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      Brand Name
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="block p-2.5 w-full text-sm rounded-lg dark:bg-gray-100 dark:placeholder-gray-500 dark:text-black focus:ring-0"
                      placeholder="Type Brand Name"
                      required=""
                      onChange={createCampaign.handleChange}
                      value={createCampaign.values.brand}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={6}
                      className="block p-2.5 w-full text-sm rounded-lg dark:bg-gray-100 dark:placeholder-gray-500 dark:text-black focus:ring-0"
                      placeholder="Your description here"
                      required=""
                      onChange={createCampaign.handleChange}
                      value={createCampaign.values.description}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      Image
                    </label>
                    <input
                      id="image"
                      type='file'
                      className="block p-2.5 w-full text-sm rounded-lg dark:bg-gray-100 dark:placeholder-gray-500 dark:text-black focus:ring-0"
                      placeholder="Image"
                      accept='image/jpeg, image/png, image/webp'
                      required=""
                      onChange={uploadImage}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      Last Date
                    </label>
                    <input
                      id="lastDate"
                      type="date"
                      placeholder='DD/MM/YYYY'
                      className="block p-2.5 w-full text-sm rounded-lg dark:bg-gray-100 dark:text-gray-500 dark:focus:border-8 dark:border-gray-700"
                      required=""
                      onChange={createCampaign.handleChange}
                      value={createCampaign.values.lastDate}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-1/2 px-5 py-2.5 mt-10 sm:mt-11 text-sm font-medium text-center 
                        text-white bg-primary-700 rounded-lg focus:ring-2 focus:ring-primary-200 dark:focus:ring-white hover:bg-primary-800 dark:hover:bg-gray-700 border-2 dark:border-gray-700
                          mx-auto"
                >
                  Create Campaign
                </button>

              </div>

            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default createCampaign;