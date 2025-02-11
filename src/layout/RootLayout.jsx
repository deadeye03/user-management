import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
function RootLayout() {
    return (
        <div className='rootLayout'>
            <header>
                <nav className='navbar'>
                    <ul>
                        <Link to='/' style={{color:'white'}}>User.Io</Link>
                        <Link to='/user/createUser' className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative text-4xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                + Create new user
                            </span>
                        </Link>
                    </ul>
                </nav>
            </header>
            <main className='main'>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
