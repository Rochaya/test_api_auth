import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-container top-10 w-full h-40 flex justify-center items-center sm:h-20 bg-purple-600">
            <ul className='list-container flex-col  items-center w-50 absolute top-2 pb-5 sm:flex sm:relative sm:flex-row sm:justify-center sm:top-0'>
                <li>
                    <Link to="/" className='text-white py-1 mx-1 sm:py-0'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/profil" className='text-white py-1 mx-1 sm:py-0'>
                        S'inscrire/Se connecter
                    </Link>
                </li>
            </ul>
        </nav>
      )
}
