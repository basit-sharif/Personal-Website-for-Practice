import Buttons from "@/app/Buttons"
import { Biometric } from "@/typesAndArray/BioMetric"
import { type } from "os"

export default function Page() {
  return (
    <div>
      <div className="bg-blue-800 flex items-center justify-between py-1 sm:px-4 lg:px-14">
        <img className="w-16 h-16 " src="/logotransparent.png" alt="Logo" />
        <nav className="flex sm:space-x-4 lg:space-x-12 md:space-x-10 ">
          <ul className="hidden sm:flex lg:space-x-10 md:space-x-8 sm:space-x-6 text-white font-mono text-lg">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
          </ul>
          <div className="space-x-2 mr-2">
            <Buttons name="Log In"/>
            <Buttons name="Sign Up" />
            {/* <button className="bg-blue-300 px-6 py-1 rounded-md hover:bg-blue-400 hover:text-gray-900 ">Log In</button> */}
            {/* <button className="bg-blue-300 px-6 py-1 rounded-md hover:bg-blue-400 hover:text-gray-900 ">Sign Up</button> */}
          </div>
        </nav>
      </div>
      <main className="flex justify-evenly flex-col-reverse sm:flex-row items-center py-24 pl-0 sm:m-4 ">
        <div className="h-96 w-11/12 sm:w-1/2 pr-0 sm:pr-0 md:pr-10 ">
          <p>President Initiative & Artificial Intelligence Computing (PIAIC)</p>
          <p className="text-gray-800 text-4xl font-bold py-3">Become A Web 3.0 and Metaverse Developer With Panaverse</p>
          <p className="text-gray-800 text-xl py-3">A one and quater year Program for absolute Beginners by Danial Nagori and Hira and Zia and Sir Qasim.You will be able to earn Money in six(6) Months ans so on.</p>
          <div className="space-x-8 pt-8 ">
            {/* <Buttons name="Apply Now"/>
            <Buttons name="Get Enrolled" /> */}
          </div>
        </div>
        <div>
          <img className="w-96" src="logotransparent.png" alt="Logo" />
        </div>
      </main>
      {/* <section className="min-h-screen py-20">
        <div className="items-center sm:items-start flex flex-col  sm:flex-row justify-center space-x-0 sm:space-x-7 space-y-12 sm:space-y-0 ">
          <div className="w-64 h-[22rem] bg-blue-200 rounded-2xl">
            <img className="h-52 " src="/iot.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus1</h2>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-96 sm:h-auto pb-3 md:h-96 bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/mam-hira.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab totam cumque quia ducimus similique eius!</h2>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-[26rem]  sm:h-auto pb-3 md:h-[26rem] bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/sir-danial.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum suscipit aperiam, rem nulla, eaque incidunt eos magni quia.</h2>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
          <div className="w-64 h-[28rem]  sm:h-auto pb-3 md:h-[28rem] bg-blue-200 rounded-2xl">
            <img className="h-52 w-full" src="/cloundNative.jpg" alt="" />
            <div className="px-2 flex flex-col pt-2 space-y-4">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sapiente quia nam deserunt cum non iusto! Harum ullam alias perspiciatis tempora aperiam maiores, eum sunt itaque ipsam in voluptate.</h2>
              <button className="px-4 h-7 rounded-full bg-blue-800">View More</button>
            </div>
          </div>
        </div>
      </section> */}
      <div className="flex items-center justify-center space-x-10 pb-6 flex-wrap">
        {
          Biometric.map((item: any) => (

            <div className="rounded-lg h-52 bg-blue-700 basis-80 w-40 text-center">
              <h2>{item.name}</h2>
              <p>{item.instructor}</p>
              <h4>{item.students}</h4>
            </div>

          ))
        }
      </div>
    </div>
  )
}
