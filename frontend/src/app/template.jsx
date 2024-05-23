'use client';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({ children }) => {
  return (
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }} >
      {children}
    </SnackbarProvider>
  )
}

export default Template