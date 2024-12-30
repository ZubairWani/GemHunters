import React from 'react'
import './MainLayout.scss'
import { Header } from '../../Header/Header'
import { Footer } from '../../Footer/Footer'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
