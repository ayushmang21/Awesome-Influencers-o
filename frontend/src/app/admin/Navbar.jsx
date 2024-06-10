import React from 'react'
import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <>
      <div className='navbar bg-white'>

        <div className='navbar-center hidden lg:flex'>
          <ul className="menu menu-horizontal px-1 text-base font-semibold">

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/admin/dashboard">DashBoard</Link>
            </li>

            <li className='dropdown dropdown-hover'>
              <div className="">
                <summary className="inline-flex items-center"> Manage </summary>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                  <li>
                    <Link
                      href="/admin/manageuser"
                    >
                      Influencers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/managebrand"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/admin/profile">Profile</Link>
            </li>

          </ul>

        </div>

      </div>
    </>
  )
}

export default AdminNavbar;