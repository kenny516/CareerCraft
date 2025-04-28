import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavBarProfile from './NavBarProfile'

const NavBar = async () => {
    return (
        <nav className='flex justify-between'>
            <Link href='/' className='flex items-center gap-2'>
                <Image
                    src='/logo.svg'
                    alt='Logo'
                    width={38}
                    height={38}
                />
                <h2 className='text-primary-100'>CareerCraft</h2>
            </Link>
            <NavBarProfile />
        </nav>
    )
}

export default NavBar