import React from 'react'
import AdminNavbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
        <AdminNavbar />
        {children}
    </>
  )
}

export default Layout;