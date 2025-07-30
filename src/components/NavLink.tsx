'use client'

import Link from "next/link"
import { FC } from "react"

const NavLink: FC<{
    name: string,
    link: string,
    type?: 'link' | 'button'
}> = ({ name, link, type = 'link' }) => {
    return (
        <Link href={link} className={`text-[1.6rem] p-[1rem] capitalize ${type == 'button' ? 'bg-amber-600 text-white rounded-xl' : ''}`}> {name}</Link >
    )
}

export default NavLink