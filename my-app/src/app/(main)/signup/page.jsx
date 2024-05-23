'use client';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .matches(/^[a-zA-Z]+$/, 'Only Alphabets are Allowed')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .matches(/^[a-zA-Z]+$/, 'Only Alphabets are Allowed')
    .required('Required'),
  phone: Yup.string()
    .required('Required')
    .min(9, 'Too Short!').max(11, 'Too Long!')
    .matches(/^[0-9]+$/, 'Only Numbers are Allowed'),
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

const Signup = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/influencer/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('User Added Successfully', { variant: 'success' });
        router.push("/login");
        resetForm();
      } else {
        enqueueSnackbar('User Not Added', { variant: 'error' });
      }
    },
    validationSchema: signupSchema
  });

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

              <form  onSubmit={signupForm.handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <span className='text-red-500'>{signupForm.touched.firstName && signupForm.errors.firstName}</span>
                    <input
                      id='firstName'
                      type="text"
                      placeholder="John"
                      onChange={signupForm.handleChange} value={signupForm.values.firstName}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last name
                    </label>
                    <span className='text-red-500'>{signupForm.touched.lastName && signupForm.errors.lastName}</span>
                    <input
                      id='lastName'
                      type="text"
                      placeholder="Snow"
                      onChange={signupForm.handleChange} value={signupForm.values.lastName}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Phone number
                    </label>
                    <span className='text-red-500'>{signupForm.touched.phone && signupForm.errors.phone}</span>
                    <input
                      id='phone'
                      type="text"
                      placeholder="XXX-XX-XXXX-XXX"
                      onChange={signupForm.handleChange} value={signupForm.values.phone}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <span className='text-red-500'>{signupForm.touched.email && signupForm.errors.email}</span>
                    <input
                      id='email'
                      type="email"
                      placeholder="johnsnow@example.com"
                      onChange={signupForm.handleChange} value={signupForm.values.email}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                    <span className='text-red-500'>{signupForm.touched.password && signupForm.errors.password}</span>
                    <input
                      id='password'
                      type="password"
                      placeholder="Enter your password"
                      onChange={signupForm.handleChange} value={signupForm.values.password}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Confirm password
                    </label>
                    <span className='text-red-500'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
                    <input
                      id='confirm'
                      type="password"
                      placeholder="Enter your password"
                      onChange={signupForm.handleChange} value={signupForm.values.confirm}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:bg-gray-100 dark:text-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className="flex items-center mt-9 mx-auto justify-center w-1/2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#69a600] rounded-lg hover:bg-[#4e7b00] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up</span>
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

export default Signup;