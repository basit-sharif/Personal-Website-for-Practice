"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    
    
    return (
        <nav className="w-full bg-black fixed top-0 right-0 left-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h2 className="text-2xl text-cyan-600 font-bold">Logo</h2>
                        </Link>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 " onClick={() => { setNavbar(!navbar) }}>
                                {navbar ? (<img alt="Close" src="/openham.png" />) : (<img alt="Open" src="/openham.png" />)}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={` flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : "hidden"}`}>
                    <ul className="h-screen md:h-auto items-center justify-center md:flex">
                        <li className="text-white pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900" onClick={()=>{setNavbar(!navbar)}}>Home</li>
                        <li className="text-white pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900" onClick={()=>{setNavbar(!navbar)}}>About</li>
                        <li className="text-white pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900" onClick={()=>{setNavbar(!navbar)}}>Blogs</li>
                        <li className="text-white pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900" onClick={()=>{setNavbar(!navbar)}}>Writter</li>
                        <li className="text-white pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900" onClick={()=>{setNavbar(!navbar)}}>Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    //   ? ( : (<img alt="Open" src="/open.png">)
}