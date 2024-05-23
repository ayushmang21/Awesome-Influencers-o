'use client';
import React from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import Link from 'next/link';

const brandLogin = () => {

    const router = useRouter();

    const BloginForm = useFormik({
        initialValues: {
            brandName: '',
            email: '',
            password: '',
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);

            const response = await fetch('http://localhost:5000/brand/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            console.log(response.status);
            console.log(response.statusText);

            if (response.status === 200) {
                enqueueSnackbar('Login Successful', { variant: 'success' });
                router.push("/")
                resetForm();
            } else {
                enqueueSnackbar('Login Failed', { variant: 'error' });
            }
        },

    });

    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/19546368/pexels-photo-19546368/free-photo-of-ferris-wheel-in-a-park-in-winter.jpeg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='bg-white bg-opacity-30 p-6 rounded-3xl'>
                        <div className="max-w-md">
                            <form onSubmit={BloginForm.handleSubmit}>

                                <h1 className="mb-5 text-white text-3xl font-bold">Brand Login</h1>

                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Brand Name
                                    </label>
                                    <input
                                        id="brandName"
                                        type="text"
                                        placeholder="Brand Name"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BloginForm.handleChange}
                                        value={BloginForm.values.brandName}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Brand Email
                                    </label>
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="Email"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BloginForm.handleChange}
                                        value={BloginForm.values.email}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Password
                                    </label>
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="Password"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BloginForm.handleChange}
                                        value={BloginForm.values.password}
                                    />
                                </div>

                                <button type='submit' className="btn btn-primary">Login</button>
                            </form>
                            <div className="flex items-center justify-between mt-6">
                                <span className="w-1/5 border-b dark:border-gray-300 md:w-1/4" />
                                <Link
                                    href="/brandSignup"
                                    className="text-sm text-gray-500 uppercase dark:text-gray-100 hover:underline"
                                >
                                    or sign up now
                                </Link>
                                <span className="w-1/5 border-b dark:border-gray-300 md:w-1/4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default brandLogin