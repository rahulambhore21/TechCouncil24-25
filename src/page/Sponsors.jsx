import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Sponsors() {
  return (
    <><Navbar/>
     <div className="w-full h-96 bg-gray-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Sponsors</h1>
      </div>
      <div className="w-full py-12 bg-gray-100 flex flex-col items-center px-4">
        <p className="text-gray-700 text-lg mb-8 text-center">We are grateful to our sponsor for their generous support.</p>
        <div className="flex flex-col items-center">
          <div className="m-4">
            <img src="/path/to/sponsor1.png" alt="Sponsor 1" className="h-48 w-auto"/>
          </div>
          <p className="text-gray-700 text-center max-w-xl">Sponsor 1 is a leading company in the industry, providing top-notch services and products that make a significant impact in the community.</p>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Sponsors