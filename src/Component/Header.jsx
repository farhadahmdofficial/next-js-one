

'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import React from 'react';

const Header = () => {

    const pathname = usePathname(); // ২. বর্তমান পথ (Path) জানার জন্য এটি কল করুন

    // // ৩. একটি কমন ফাংশন যা চেক করবে লিঙ্কটি একটিভ কি না
    // const getActiveStyle = (path) => {
    //     return pathname === path 
    //         ? "text-white bg-green-600 font-bold px-3 py-1 rounded-lg" // একটিভ থাকলে এই ক্লাস
    //         : "text-green-700 hover:text-green-900"; // একটিভ না থাকলে এই ক্লাস
    // };

    const links = <>

    {/* <li><Link href="/" className={getActiveStyle('/')}>Home</Link></li>
        <li><Link href="/foods" className={getActiveStyle('/foods')}>Foods</Link></li>
        <li><Link href="/contact" className={getActiveStyle('/contact')}>Contact</Link></li> */}

        <li><Link href="/" className={pathname=== "/" ? "text-white bg-green-600 font-bold px-3 py-1 rounded-lg" : "text-green-700 hover:text-green-900"}>Home</Link></li>

        <li><Link href="/foods" className={pathname=== "/foods" ? "text-white bg-green-600 font-bold px-3 py-1 rounded-lg" : "text-green-700 hover:text-green-900"}>Foods</Link></li>


        <li><Link href="/contact" className={pathname=== "/contact" ? "text-white bg-green-600 font-bold px-3 py-1 rounded-lg" : "text-green-700 hover:text-green-900"}>Contact</Link></li>

    </>
    return (
        <div>
            <div className="navbar rounded-2xl bg-green-200 mt-4 shadow-sm   w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <h3 className='text-2xl text-yellow-600 font-bold'>Food</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1 text-green-600">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Header;