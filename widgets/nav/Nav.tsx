'use client'
import Link from 'next/link';
import style from './nav.module.scss'
import { usePathname } from 'next/navigation';



const Nav = ({openMobileNav, setOpenMonileNav, navList}) => {

	const pathname = usePathname()

	return (
		<nav className={style.nav + ' ' + (openMobileNav ? style.active : null)}>
			<ul>
				{navList.map(({ name, link }, i) => {
					return (<li key={i}><Link href={link}>{name}</Link>
                        {pathname == link ? <span className={style.line}></span> : null}
						
					</li>)
				})}
			</ul>
			{openMobileNav && <button className={style.close} onClick={() => setOpenMonileNav(false)}>x</button>}
		</nav>
	);
}

export default Nav;