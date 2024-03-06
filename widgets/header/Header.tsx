'use client'
import Image from "next/image";
import Nav from "../nav/Nav";
import style from './header.module.scss'
import Link from 'next/link';

import logo from '@/image/logo.svg'
import { useState } from "react";
import { usePathname } from "next/navigation";

const navList = [
	{ name: 'Home', link: '/' },
	{ name: 'Pokédex', link: '/pokedex' },
]

const pathMass = []

const Header = () =>{

	const [openMobileNav, setOpenMonileNav] = useState(false)

	const [headerActive, setHeaderActive] = useState(true)

	const pathname = usePathname()

	

	navList.forEach(item => {
		pathMass.push(item.link)
	})

	// openMobileNav ? style.activeMobile : null

    return (
        <header className={style.header +' '+ (!pathMass.includes(pathname) ? style.none : null)}>
            <div className="container">
                <div className={style.header__row}>
                    <Link href='/'><Image src={logo} alt="pokemon"/></Link>
                    <button className={style.burger} onClick={() => setOpenMonileNav(!openMobileNav)}>
											<svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.876953" width="30.9375" height="5.5" rx="2" fill="#212121" />
													<rect x="0.876953" y="8.25" width="30.9375" height="5.5" rx="2" fill="#212121" />
													<rect x="0.876953" y="16.5" width="30.9375" height="5.5" rx="2" fill="#212121" />
											</svg>
										</button>
                    <Nav openMobileNav={openMobileNav} setOpenMonileNav={setOpenMonileNav} navList={navList}/>
                </div>
            </div>
        </header>
    )
}
export default Header;