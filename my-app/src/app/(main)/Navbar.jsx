import React from 'react'
import { BellIcon, ChevronDownIcon, MenuIcon, SearchIcon, UserCircle } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MenuIcon />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><a>Influencers</a></li>
              <li><a>Brands</a></li>
              <li><a>Campaigns</a></li>
              <li>
                <a>More</a>
                <ul className="p-2">
                  <li><a>About Us</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost italic text-xl">Awesome Influencers</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">

            {/* Home */}
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* Influencers */}
            <li>
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <summary className='inline-flex items-center'>Influencers <ChevronDownIcon size={20} /> </summary>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                  <li><Link href="influencer/browse-campaign">Browse Campaigns</Link></li>
                </ul>
              </div>
            </li>

            {/* Brands */}
            <li>
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <summary className='inline-flex items-center'>Brands <ChevronDownIcon size={20} /> </summary>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                  <li><Link href="/browse-brands">Browse</Link></li>
                  {/* <li><Link href="/brand/manage-campaign">Manage</Link></li> */}
                </ul>
              </div>
            </li>

            {/* Campaigns */}
            <li>
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <summary className='inline-flex  items-center'>Campaigns <ChevronDownIcon size={20} /> </summary>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                  <li><Link href="/brand/create-campaign">Create</Link></li>
                  <li><Link href="/brand/manage-campaign">Manage</Link></li>
                </ul>
              </div>
            </li>

            {/* More */}
            <li>
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <summary className='inline-flex items-center'>More <ChevronDownIcon size={20} /> </summary>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </li>

          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex ">
            <div className="text-base font-semibold">
              <Link href="/brandLogin" className='btn btn-ghost text-base px-2'>Brand</Link>
            </div>
            <div className="divider divider-horizontal divider-neutral mx-0 py-2"></div>
            <div className="">
              <Link href="/login" className='btn btn-ghost text-base px-2'>Influencer</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;