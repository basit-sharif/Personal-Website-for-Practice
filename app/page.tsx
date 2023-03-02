"use client"
import Buttons from "@/app/Buttons"
import { Biometric } from "@/typesAndArray/BioMetric"
import { NavbarItems } from "@/typesAndArray/BioMetric"
import { QuarterData } from "@/typesAndArray/Quarterdata"
import { useState } from "react"
import Twitter from "./components/images/twitter"
import Youtube from "./components/images/youtube"
import GridSystemReuse from "./gridSystem"
import QuarterSystemReuse from "./Quarters"

export default function Page() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div>
      <div className="sticky top-0 right-0 left-0 bg-blue-800 flex items-center justify-between py-1 sm:px-4 lg:px-14 z-20">
        <img className="w-16 h-16 " src="/logotransparent.png" alt="Logo" />
        <nav className="flex sm:space-x-4 lg:space-x-12 md:space-x-10 items-center">
          <ul className="hidden sm:flex lg:space-x-10 md:space-x-8 sm:space-x-6 text-white font-mono text-lg">
            {
              NavbarItems.map((item: any) => (
                <li key={item.label} className="cursor-pointer hover:-mt-1 transition-all duration-200">{item.label}</li>
              ))
            }
          </ul>

          <div className="space-x-2 mr-2 hidden sm:flex">
            <Buttons>Log In</Buttons>
            <Buttons>Sign Up</Buttons>
          </div>
          <div className="cursor-pointer space-x-2 flex sm:hidden text-white ">
            Log In
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="flex sm:hidden cursor-pointer px-6">
            {mobileNav ? (<Twitter />) :
              (<Youtube />)
            }
          </div>
        </nav>
      </div>
      <div className={`${mobileNav ? "flex" : "hidden"} fixed z-20 flex-col sm:hidden w-full bg-slate-200 text-center space-y-1 px-2 mt-1`}>
        {
          NavbarItems.map((item: any) => (
            <div className="w-full py-2 bg-blue-300 hover:bg-blue-400 active:bg-purple-500 hover:scale-105 active:scale-100">
              <li key={item.label} className="cursor-pointer list-none">{item.label}</li>
            </div>
          ))
        }
      </div>
      <div className="relative">
        <main className=" flex justify-evenly flex-col-reverse sm:flex-row items-center py-24 pl-0 sm:m-4 ">
          <div className="h-96 w-11/12 sm:w-1/2 pr-0 sm:pr-0 md:pr-10 ">
            <p className='bg-basit-400 font-DancingScript'>President Initiative & Artificial Intelligence Computing (PIAIC)</p>
            <h1>Become A Web 3.0 and Metaverse Developer With Panaverse</h1>
            <p className="text-gray-800 text-xl py-3">A one and quater year Program for absolute Beginners by Danial Nagori and Hira and Zia and Sir Qasim.You will be able to earn Money in six(6) Months ans so on.</p>
            <div className="flex space-x-8 pt-8 bg-haseeb-400">
              <Buttons>Apply Now</Buttons>
              <Buttons>Get Enrolled</Buttons>
            </div>
          </div>
          <div>
            <img className="w-96" src="logotransparent.png" alt="Logo" />
          </div>
        <img className="w-16 absolute right-0 -z-10 " src="dots.png" alt="Logo" />
        </main>
        <img className="hidden sm:block w-40 absolute top-72 -z-10" src="curvearrow.png" alt="Logo" />
      </div>
      <section className="min-h-7xl py-20">
        <div className="items-center sm:items-start flex flex-col  sm:flex-row justify-center space-x-0 sm:space-x-7 space-y-12 sm:space-y-0 ">
          <div className="w-64 h-[22rem] bg-blue-200 rounded-2xl">
            <img className="h-52 " src="/iot.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus1</h3>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-96 sm:h-auto pb-3 md:h-96 bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/mam-hira.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab totam cumque quia ducimus similique eius!</h3>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-[26rem]  sm:h-auto pb-3 md:h-[26rem] bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/sir-danial.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum suscipit aperiam, rem nulla, eaque incidunt eos magni quia.</h3>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-[28rem]  sm:h-auto pb-3 md:h-[28rem] bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/cloundNative.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sapiente quia nam deserunt cum non iusto! Harum ullam alias perspiciatis tempora aperiam maiores, eum sunt itaque ipsam in voluptate.</h3>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
        </div>
      </section>
      <GridSystemReuse data={Biometric} />
      <QuarterSystemReuse data={QuarterData} />

    </div>
  )
}

// hover:ring-4