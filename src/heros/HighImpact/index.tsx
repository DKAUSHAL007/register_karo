'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import appImage from '../../../public/hghgh-removebg-preview.png'
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaGooglePlay,
  FaHandshake,
  FaInstagram,
  FaPersonBooth,
  FaStar,
} from 'react-icons/fa'
import Image from 'next/image'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const services = [
    {
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
      icon: '⚙️', // Use an appropriate icon library here
    },
    {
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.',
      icon: '📊',
    },
    {
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.',
      icon: '🌍',
    },
    {
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.',
      icon: '📦',
    },
    {
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
      icon: '🛒',
    },
    {
      title: 'Bookkeeping Services',
      description: 'Steering user behaviors with creative design, data insights & technology.',
      icon: '📋',
    },
  ]
  const features = [
    {
      title: 'Confidential & Safe',
      description: 'All your private information is safe with us.',
      icon: '🛡️', // Replace with an icon library for better visuals
    },
    {
      title: 'No Hidden Fee',
      description: 'Everything is put before you with no hidden charges or conditions.',
      icon: '✔️',
    },
    {
      title: 'Guaranteed Satisfaction',
      description: 'We ensure complete satisfaction with our services.',
      icon: '😊',
    },
    {
      title: 'Expert CA/CS Assistance',
      description: 'Work with certified professionals for legal matters.',
      icon: '👨‍⚖️',
    },
  ]
  return (
    <>
      <section className="bg-gradient-to-r h-full from-orange-50 flex items-center min-h-[600px] to-white bg-red-500">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-500" />
              <span className="font-medium text-sm">Google Rating</span>
              <span className="text-yellow-500 font-bold">★★★★★</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mt-4 leading-snug">
              Your trusted partner for <br /> compliance business needs
            </h1>
            <p className="text-gray-600 mt-4">
              An online business compliance platform that helps entrepreneurs and other individuals
              with various{' '}
              <span className="font-semibold text-gray-800">registrations, tax filings</span>, and
              other legal matters.
            </p>
            <div className="flex items-center space-x-8 mt-6">
              <div>
                <h4 className="text-xl font-bold">
                  <FaStar />
                  4.5+
                </h4>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  <FaPersonBooth />
                  20,000+
                </h4>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  <FaHandshake />
                  99.8%
                </h4>
                <p className="text-sm text-gray-600">Financial Stability</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#talk"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Talk An Expert
              </a>
              <a href="#how-it-works" className="flex items-center text-blue-600 font-medium">
                <span>See how it works</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <img
              src={
                'https://media.istockphoto.com/id/1220008323/vector/programmer-works-at-home-at-the-computer-remote-work-in-the-home-office-it-specialist.jpg?s=612x612&w=0&k=20&c=nllsdf4b2odpZtwsPbz6Qj0NtxhYYZntwJAC5jsQjbE='
              }
              alt="Hero Illustration"
              className="w-full"
            />
            <div className="absolute top-4 right-4 space-y-4">
              <button className="bg-white shadow-md px-4 py-2 rounded-md">Annual Compliance</button>
              <button className="bg-white shadow-md px-4 py-2 rounded-md">Payroll Services</button>
              <button className="bg-white shadow-md px-4 py-2 rounded-md">Company Formation</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-medium text-gray-700">
            Trusted By Over 100+ Startups and Freelance Business
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-10 justify-around items-center">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
              alt="Oracle"
              className="h-16"
            />
            <img
              src="https://morpheusdata.com/wp-content/uploads/2020/08/Morpheus-horizontal-v2.png"
              alt="Morpheus"
              className="h-7"
            />
            <img
              src="https://banner2.cleanpng.com/20180330/zsq/avigvl844.webp"
              alt="Samsung"
              className="h-16"
            />
            <img
              src="https://www.logo.wine/a/logo/Monday.com/Monday.com-Logo.wine.svg"
              alt="Monday"
              className="h-24"
            />
            <img
              src="https://static.cdnlogo.com/logos/s/30/segment.svg"
              alt="Segment"
              className="h-8"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-yellow-500 uppercase text-sm font-semibold">
              Welcome to RegisterKaro.in
            </h1>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <a href="#" className="mt-4 text-blue-600 hover:underline inline-flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="ml-1 w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              See All Services
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <h1 className="text-yellow-500 uppercase text-sm font-semibold text-center">
          Welcome to RegisterKaro.in
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl">
          About Register Karo
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-center">
          {/* Text Section */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We have been using Intelegencia as our DevOps vendor for our field service
              applications over the last couple of years and I’m extremely pleased with their
              performance, ability to execute, and willingness to adapt in our ever-changing
              environment. Perry is an outstanding leader who is fanatical about customer
              satisfaction. He has built a solid team which has consistently delivered on projects
              thereby exceeding everyone’s expectations.
            </p>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              I would strongly recommend their services to any organization that is looking for
              solid, reliable, and predictable outcomes.
            </p>

            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={
                'https://s3-alpha-sig.figma.com/img/78f8/096c/dbd2da76442c29194b8d57f4b8a7db2f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPeAxg8ol1UV9DgV4R52FGfL-snZxj8osWSEGdt2Xf2UfuaOdLSsdjLQsRhS3HfXG5OM8wbs9I~~UsHi6HYVl2xTDZf66xi7siUdghWF~KitPheUtUvTuFYP~m6eXdk0hRWvJ5YvyjK4WqJ~15Uqmgmf7N6duA6izxD~qM9ctBF65nlBomyALx61Zxxw7fa8o0rJJOLRPWHM3r~th4i86GYeHOMbPc4fQpKUg~klMmEsTwb~Iad-7L3h~YpVqTAX5Eh6qxgEYbkx5oDJ0-yMZnfJ1UgfzEibD9WEW1p08UewvdabWexFjUbSkRQNRayA6wAgaXEMdza7RGJ9I5v31A__'
              }
              alt="Team Register Karo"
              className=" h-[418px] rounded-lg shadow-lg"
            />
            {/* <div className="absolute inset-0 -top-4 -right-4 bg-yellow-100 rounded-lg w-full h-full"></div> */}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <h1 className="text-yellow-500 uppercase text-sm font-semibold text-center">
          Why RegisterKaro.in
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-4xl">
          Why Choose Register Karo
        </h2>
        <p className="text-gray-700 text-lg text-center mt-4">
          It is with consistent services and results that build trust with the people and that in
          turn help us to serve the business better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-yellow-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Video Introductions</h2>
            <p className="mb-8">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate
              pellentesque a diam tincidunt.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Explore ideas together</h3>
                  <p>
                    Engage audience segments and finally create actionable insights. Amplify
                    vertical integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Bring those ideas to life</h3>
                  <p>
                    Engage audience segments and finally create actionable insights. Amplify
                    vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Video Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative object-cover w-full max-w-md">
              <img
                className="rounded-lg shadow-lg"
                src="https://img.freepik.com/free-photo/young-happy-smiling-businesswoman-holding-laptop-isolated_231208-241.jpg"
                alt="Video Thumbnail"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197 1.684c-.8.42-1.555-.04-1.555-.872V10.02c0-.83.754-1.293 1.555-.872l3.197 1.684c.801.42.801 1.324 0 1.744z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.341A8.001 8.001 0 116.34 6.341M13.005 13.024A4.5 4.5 0 1015 5.5v0a4.5 4.5 0 00-1.995 7.524z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Our Happy Clients</h2>
          <p className="text-gray-600 mb-12">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically
            innovate resource-leveling customer service for state-of-the-art customer service.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10 justify-around items-center">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
              alt="Client Logo"
            />
            <img
              src="https://morpheusdata.com/wp-content/uploads/2020/08/Morpheus-horizontal-v2.png"
              alt="Client Logo"
            />
            <img src="https://static.cdnlogo.com/logos/s/30/segment.svg" alt="Client Logo" />
            <img
              src="https://www.logo.wine/a/logo/Monday.com/Monday.com-Logo.wine.svg"
              alt="Client Logo"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
              alt="Client Logo"
            />
            <img src="https://banner2.cleanpng.com/20180330/zsq/avigvl844.webp" alt="Client Logo" />
          </div>
          <p className="text-center">Show more {'->'}</p>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        {/* FAQ Section */}
        <div className="container mx-auto px-6">
          <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
            Frequent Ask Questions
          </h2>
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
                >
                  <p className="text-gray-800">
                    Can I recover deleted files from desktop with this software?
                  </p>
                  <span className="text-gray-500">➔</span>
                </div>
              ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Show more ➔
            </button>
          </div>
        </div>

        {/* App Section */}
        <div className="bg-blue-900 pt-8 mt-12">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
              <p className="mb-6">
                Download our app to manage and track your services. Our app enables you to stay in
                touch with our experts and aids you in tracking your progress.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition duration-300"
                >
                  <FaApple />
                  <span>Get it on App Store</span>
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition duration-300"
                >
                  <FaGooglePlay />
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>
            <div className="flex justify-end ml-auto">
              <Image
                src={appImage} // Replace with the actual path to the app image
                alt="App Preview"
                className="max-w-xs w-100 h-full lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-sm text-yellow-600 font-semibold mb-2">WHY REGISTER KARO</h3>
          <h2 className="text-3xl font-bold mb-10">Some Numbers are Important</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-gray-800">1M+</h3>
              <p className="text-gray-600">Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">12+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">41+</h3>
              <p className="text-gray-600">R&D Engineers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">78+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">3287+</h3>
              <p className="text-gray-600">Partners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">41+</h3>
              <p className="text-gray-600">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Reality Section */}
      <section className="bg-gradient-to-r from-orange-400 to-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-sm font-semibold mb-2">1% OF THE INDUSTRY</h3>
          <h2 className="text-3xl font-bold mb-8">Welcome to your new digital reality. Now.</h2>
          <form className="flex justify-center items-center max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center space-x-6 text-sm">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Instant Results</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>User-friendly Interface</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Personalized Customization</span>
            </span>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-gray-50 py-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 justify-around pl-[80px] items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/1024px-Coinbase.svg.png"
            className="h-8 sm:h-6"
            alt="Coinbase Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png"
            className="h-8 sm:h-6"
            alt="Spotify Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1200px-Slack_Technologies_Logo.svg.png"
            className="h-8 sm:h-6"
            alt="Slack Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/1200px-Dropbox_logo_2017.svg.png"
            className="h-8 sm:h-6"
            alt="Dropbox Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Webflow_logo_2023.svg/1280px-Webflow_logo_2023.svg.png"
            className="h-8 sm:h-6"
            alt="Webflow Logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/2560px-Zoom_Communications_Logo.svg.png"
            className="h-8 sm:h-6"
            alt="Zoom Logo"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <p className="mb-6">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaGoogle size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaApple size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Start a Business</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Government Registration</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Compliance & Tax</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Scale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Watch the Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Competition
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-sm">
          <p>© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
