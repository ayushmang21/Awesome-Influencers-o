'use client';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import Link from 'next/link';


const brandSignUpSchema = Yup.object().shape({
    brandName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    tagline: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    logo: Yup.string()
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .required('Required')
        .matches(/[0-9]/, 'Number is Required')
        .matches(/[a-z]/, 'LowerCase is Required')
        .matches(/[A-Z]/, 'UpperCase is Required')
        .matches(/[^\w]/, 'Special Character is Required'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords Must Match !')
        .required('Required')
});

const brandSignUp = () => {

    const [bLogo, setbLogo] = useState('');

    const uploadLogo = async (e) => {
        const file = e.target.files[0];
        setbLogo(file);
        const fd = new FormData();
        fd.append('myfile', file);
        fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd,
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Logo Uploaded Successfully');
                    BsignupForm.setFieldValue('logo', file.name);
                    enqueueSnackbar('Logo Uploaded Successfully', { variant: 'success' });
                } else {
                    console.log('Logo Upload Failed');
                    enqueueSnackbar('Logo Upload Failed', { variant: 'error' });
                }

            });
    }

    const router = useRouter();

    const BsignupForm = useFormik({
        initialValues: {
            brandName: '',
            tagline: '',
            logo: '',
            description: '',
            email: '',
            password: '',
            confirm: ''
        },
        onSubmit: async (values, { resetForm }) => {
            values.logo = bLogo.name;
            console.log(values);

            const response = await fetch('http://localhost:5000/brand/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            console.log(response.status);
            console.log(response.statusText);

            if (response.status === 200) {
                enqueueSnackbar('Sign Up Successful', { variant: 'success' });
                resetForm();
                router.push("/brandLogin")
            } else {
                enqueueSnackbar('Sign Up Failed', { variant: 'error' });
            }
        },
        validationSchema: brandSignUpSchema
    });

    return (
        <div>
            <div className="hero min-h-screen bg-center bg-cover"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/19546368/pexels-photo-19546368/free-photo-of-ferris-wheel-in-a-park-in-winter.jpeg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='bg-white bg-opacity-30 p-6 my-10 rounded-3xl'>
                        <h1 className="text-[#7480ff] bg-black p-3 rounded-3xl mb-5 text-3xl font-bold">Brand Sign Up</h1>
                        <div className="max-w-md">
                            <form onSubmit={BsignupForm.handleSubmit} >
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Brand Name
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.brandName && BsignupForm.errors.brandName}</span>
                                    <input
                                        id="brandName"
                                        type="text"
                                        placeholder="Brand Name"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BsignupForm.handleChange}
                                        value={BsignupForm.values.brandName}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Tagline
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.tagline && BsignupForm.errors.tagline}</span>
                                    <input
                                        id='tagline'
                                        type="text"
                                        placeholder="Tagline"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BsignupForm.handleChange}
                                        value={BsignupForm.values.tagline}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Logo
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.logo && BsignupForm.errors.logo}</span>
                                    <input
                                        id='logo'
                                        type="file"
                                        placeholder="Logo"
                                        accept='image/jpeg, image/png'
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={uploadLogo}
                                        
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                                        Description
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.description && BsignupForm.errors.description}</span>
                                    <textarea
                                        id='description'
                                        placeholder="Description"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BsignupForm.handleChange}
                                        value={BsignupForm.values.description}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Email address
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.email && BsignupForm.errors.email}</span>
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="johnsnow@example.com"
                                        onChange={BsignupForm.handleChange} value={BsignupForm.values.email}
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Password
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.password && BsignupForm.errors.password}</span>
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="Enter your password"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BsignupForm.handleChange}
                                        value={BsignupForm.values.password}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Confirm password
                                    </label>
                                    <span className='text-red-500'>{BsignupForm.touched.confirm && BsignupForm.errors.confirm}</span>
                                    <input
                                        id='confirm'
                                        type="password"
                                        placeholder="Enter your password"
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                                        onChange={BsignupForm.handleChange}
                                        value={BsignupForm.values.confirm}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary hover:text-white">Sign Up
                                </button>
                            </form>

                            <div className="flex items-center justify-between mt-6">
                                <span className="w-1/5 border-b dark:border-gray-300 md:w-1/4" />
                                <Link
                                    href="/brandLogin"
                                    className="text-sm text-gray-500 uppercase dark:text-gray-100 hover:underline"
                                >
                                    or Login Now
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

export default brandSignUp;