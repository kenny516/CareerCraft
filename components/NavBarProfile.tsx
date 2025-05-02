"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { logout } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'

const NavBarProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(auth);
        await logout();
        redirect('/sign-in');
    }

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center gap-3 p-2 rounded-full hover:bg-dark-200 transition-colors'
            >
                <Image
                    src="/user-avatar.png"
                    alt="user avatar"
                    width={34}
                    height={34}
                    className='rounded-full object-cover'
                />
                <span className='sr-only'>Menu utilisateur</span>
            </button>

            {isOpen && (
                <div className='absolute right-0 mt-2 w-48 card-border animate-fadeIn'>
                    <div className='card p-2'>
                        <Button
                            onClick={handleLogout}
                            className='w-full justify-start text-destructive-100 hover:text-destructive-200 hover:bg-dark-200'
                            variant="ghost"
                        >
                            Se déconnecter
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBarProfile