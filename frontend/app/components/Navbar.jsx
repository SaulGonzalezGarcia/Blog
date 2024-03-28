'use client';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import  Link from "next/link";

const NavBar = () => {

    const session = useSession();

        return(
            <nav className='bg-gray-800 dark:bg-gray-900'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    
                </div>

            </nav>
        )
}