import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="pt-6 mb-8">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link href="/" className="flex items-center">
                    <div className="bg-blue-500 text-white font-bold text-xl p-3 rounded-lg shadow-md">
                        VH
                    </div>
                </Link>
                <div className="flex items-center space-x-6">
                    <Link href="/about" className="hidden sm:block text-gray-700 hover:text-blue-600 transition duration-200 text-base font-medium">
                        About
                    </Link>
                    <Link href="/register" className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-sm text-base font-medium">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar