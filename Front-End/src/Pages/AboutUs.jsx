import React from 'react'
import { asset } from "../assets/assets";
function AboutUs() {
  return (
    <div className='parent'>
      {/* Header Section */}
      <div className="text-center text-black mb-12 text-4xl font-bold mb-2 ">
        <div className=" inset-0   bg-cover pt-[100px] pb-[50px] " style={{ backgroundImage: `url(${asset.bg})` }} >
          <h1 className="text-black">AboutUs</h1>
          <p className="text-black">Home /AboutUs </p>
        </div>
      </div>
      {/* Give */}
      <div className="max-w-7xl mx-auto p-6">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12">

          <div className="lg:w-1/2 lg:mr-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              <span role="img" aria-label="blood drop">
                🩸
              </span>{' '}
              Give life to reading
            </h2>
            <p className="text-gray-700 mb-4">
              Viverra justo nec ultrices dui. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-gray-700">
              Integer quis auctor elit sed vulputate mi sit amet mauris. Quam lacus suspendisse faucibus interdum posuere lorem.
            </p>
          </div>
          <div className=" pr-[30px] pt-[20px] lg:w-1/2">
            <img
              src={asset.abopic1}
              alt="Writing"
              className="w-full h-auto object-cover border-8 border-red-500"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8">
            <h2 className="text-3xl font-bold mb-4">
              <span role="img" aria-label="stack of books">
                📚
              </span>{' '}
              Seed of knowledge
            </h2>
            <p className="text-gray-700 mb-4">
              Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Accumsan tortor posuere ac ut consequat semper viverra.
            </p>
            <p className="text-gray-700">
              Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={asset.abopic2}
              alt="Reading"
              className="w-full h-auto object-cover border-8 border-red-500"
            />
          </div>
        </div>
        {/* Second Section */}

        <div className="flex flex-col lg:flex-row items-center">
          <div className=" pr-[30px] pt-[30px] lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={asset.abopic3}
              alt="Reading"
              className="w-full h-auto object-cover border-8 border-red-500"
            />
          </div>
          <div className="lg:w-1/2 lg:mr-8">
            <h2 className="text-3xl font-bold mb-4">
              <span role="img" aria-label="stack of books">
                📚
              </span>{' '}
              Best for bookworms
            </h2>
            <p className="text-gray-700 mb-4">
              Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Accumsan tortor posuere ac ut consequat semper viverra.
            </p>
            <p className="text-gray-700">
              Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        </div>
      </div>
      {/* testimonial */}
      {/* Testimonial */}
      <div className='text-[#A02334] testimonials pt-8 pb-12 bg-[#FFEAC5]'>
        <h1 className='underline underline-offset-4 text-center text-4xl lg:text-5xl mb-8'>
          Testimonial
        </h1>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 lg:px-12'>
          <section className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <img
              src={asset.testimonial1}
              alt="Testimonial 1"
              className="w-40 h-40 lg:w-48 lg:h-48 mb-4 rounded-full"
            />
            <p className='mb-2'>
              Donec id tellus lacinia an, tincidunt risus ac,
              consequat velit.
              Quisquemos sodales suscipit tortor ditaemcos condimentum.
              Pellentesque posuere orci lobortis scelerisque blandit.
            </p>
            <span className="text-xs mb-2">⭐⭐⭐⭐⭐</span>
            <div className='testimonial-author'>
              <p className='font-semibold'>Krist Watson</p>
              <p className="text-sm text-gray-600">Actor</p>
            </div>
          </section>

          <section className='flex flex-col items-center lg:items-start text-center lg:text-left'>
            <img
              src={asset.testimonial2}
              alt="Testimonial 2"
              className="w-40 h-40 lg:w-48 lg:h-48 mb-4 rounded-full"
            />
            <p className='mb-2'>
              Quisquemos sodales suscipit tortor ditaemcos condimentum.
              Pellentesque posuere orci lobortis scelerisque blandit.
              Donec id tellus lacinia an, tincidunt risus ac, consequat velit.
            </p>
            <span className="text-xs mb-2">⭐⭐⭐⭐⭐</span>
            <div className='testimonial-author'>
              <p className='font-semibold'>Lia</p>
              <p className="text-sm text-gray-600">Teacher</p>
            </div>
          </section>
        </div>
      </div>
      {/* about our team */}
      <div className="bg-gray-100 p-[50px]">
        <h2 className="text-3xl font-bold text-center mb-4 pb-[70px]">About Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center   
           p-4  ">
            <img src={asset.teampic1} alt="Jona Issac" className="w-54 h-54  mb-4" />
            <h3 className="text-lg font-semibold">Jona Issac</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center justify-center   
           p-4 ">
            <img src={asset.teampic2} alt="Lency" className="w-54 h-54 mb-4" />
            <h3 className="text-lg font-semibold">Marketing Manager</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center justify-center   
           p-4 ">
            <img src={asset.teampic3} alt="  Rony Diana  " className="w-54 h-54  mb-4" />
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center justify-center   
           p-4 ">
            <img src={asset.teampic4} alt="  Princy Charles  " className="w-54 h-54  mb-4" />
            <h3 className="text-lg font-semibold">Company Supervisor</h3>
            <p className="text-gray-500">CEO</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AboutUs
