import React from 'react'
import Image from 'next/image'

const NavBarProfile = () => {
    return (
        <>
            <div className='items-center' >
                <Image
                    src="/user-avatar.png"
                    alt="user avatar"
                    width={34}
                    height={34}
                    className='rounded-full object-cover'
                />
            </div>
        </>
    )
}

export default NavBarProfile