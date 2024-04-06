import React from 'react'
import HeaderComp from '../header/HeaderComp'
import NavbarComp from '../navbar/NavbarComp'
import FooterComp from '../footer/FooterComp'

export default function Layout({children}) {
  return (
    <>
        <NavbarComp/>
        <HeaderComp/>
        {children}
        <FooterComp/>
    </>
  )
}
