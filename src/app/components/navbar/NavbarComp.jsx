"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

import style from "./index.module.css"

export default function NavbarComp() {

  const navDatas = [
    {
      name: "News",
      link: "/"
    },
    {
      name: "Conditions",
      link: "/"
    },
    {
      name: "Community",
      link: "/"
    },
    {
      name: "Transportations",
      link: "/"
    }
  ]

  

	const [showNavbar, setNavbar] = useState(false);

	// Close navbar outside
	const menuRef = useRef(null);
	useEffect(() => {
		const handler = (e) => {
			if (!menuRef.current?.contains(e)) {
				setNavbar(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

  return (
    <div className={style.navbar}>
      <div className={style.navbar_logo}>
        <img src="/libraries/images/svg/nav-logo.svg" alt=""/>
      </div>
      <button className="md:hidden text-holy text-xl" onClick={() => setNavbar(true)}>
        <HiMiniBars3BottomRight/>
      </button>
      <ul className={`${style.nav_lists} ${showNavbar ? "right-0" : "right-[-100%]"}`}>
        <li className={style.nav_mark}>
          <img className="w-[100px] h-auto" src="/libraries/images/svg/nav-logo.svg" alt=""/>
          <button  onClick={() => setNavbar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-holy">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
        {navDatas.map((nav, i) => (
          <li className={`${style.nav_list}`} key={i}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
