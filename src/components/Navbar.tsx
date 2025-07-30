'use client'

import Link from "next/link"
import NavLink from "./NavLink"

const Navbar = () => {

    const menus: Array<{
        id: number,
        name: string,
        link: string,
        type?: 'link' | 'button'
    }> = [
            {
                id: 1,
                name: 'services',
                link: 'services'
            },
            {
                id: 2,
                name: 'barbers',
                link: 'barbers'
            },
            {
                id: 3,
                name: 'shop',
                link: 'shop'
            },
            {
                id: 4,
                name: 'contact',
                link: 'contact'
            },
            {
                id: 5,
                name: 'book now',
                link: 'book-now',
                type: 'button'
            },

        ]
    return (
        <nav className="main-nav border-b border-neutral-300">
            <div className="flex items-center justify-between py-[1.2rem] w-[min(90%,140rem)] mx-auto">
                <Link href={'/'} className="text-[2.2rem] ">Clippers</Link>
                <ul className="nav-list flex items-center gap-4">
                    {menus.map(menu => (
                        <li key={menu.id}>
                            <NavLink name={menu.name} link={menu.link} type={menu.type} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar