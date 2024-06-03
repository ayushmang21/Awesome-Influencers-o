import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-black">
                <div className="container px- py-8 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                                Subscribe our newsletter to get update.
                            </h1>
                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input
                                    id="footerEmail"
                                    type="text"
                                    className="px-4 py-2 text-gray-800 bg-white border rounded-md dark:bg-white dark:text-gray-800 dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-200 placeholder-gray-600"
                                    placeholder="Email Address"
                                />
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none rounded-lg hover:bg-white hover:text-black focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Quick Link
                            </p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a
                                    href="#"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Who We Are
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Our Philosophy
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Our Socials
                            </p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a
                                    href="#"
                                    className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-100 dark:hover:text-gray-300 hover:underline hover:text-blue-500"
                                >
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>

                                    Instagram
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-100 dark:hover:text-gray-300 hover:underline hover:text-blue-500"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current mr-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                                    </svg>
                                    Facebook
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center transition-colors duration-300 dark:text-gray-100 dark:hover:text-gray-300 hover:underline hover:text-blue-500"
                                >
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                    Twitter ( X )
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 dark:border-white-700" />

                    <div className="flex text-center justify-center text-white">
                        <h1>Trademarks Reserved @ 2024</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;