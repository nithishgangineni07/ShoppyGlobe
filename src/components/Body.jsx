import React from 'react'
import {useNavigate} from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';


const Body = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 px-4'>
      <section className='w-full mt-24 text-center mx-w-4xl animate-fade-slide'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700  leading-tight'> EVERYTHING YOU WANT, <br />
        <span className='text-orange-500'>ALL IN ONE PLACE </span>
        </h1>

        <p className='text-base sm:text-lg md:text-xl mb-6 text-gray-600'>Discover unbeatable deals, just a click away</p>

        {/* promo Image */}
         <div className='w-full max-w-md mx-auto rounded-2xl animate-fade overflow-hidden shadow-2xl'>
          <img src="https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg" 
          alt="Shopping App Banner"
          className='w-full h-auto object-cover transform transition-transform  duration-500 hover:scale-105' />
         </div>

         {/* CTA Button */}
         <div className='mt-6'>
          <button 
          onClick={()=>navigate('/products')}
          className='bg-orange-500 text-white px-6 py-3 shadow-lg rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 '
          >
           Shop Now
          </button>
         </div>

      </section>

      {/* Footer */}

      <footer className='w-full border-top border-gray-200 mt-20 px-6 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left'>

          {/* Bramd Section */}

          <div>
            <div className='flex items-center justify-center mb-4 gap-3 md:justify-start'>
              <img src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-Background.png"
               alt="Brand Logo" 
               className='w-10 h-10'/>
               <h2 className='text-blue-700 font-bold text-2xl'>Shoppy Globe</h2>
            </div>
            <p className='text-gray-500 text-sm'> Your one-stop destination for the best online shopping experience.</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className='text-xl text-blue-700 font-semibold mb-4'>Contact</h3>
            <p className='mb-2 gap-2 flex items-center justify-center text-gray-600 md:justify-start'>
              <LocalPhoneIcon className='text-orange-500'/>+91 9502142312</p>
            <p className='text-gary-600 flex justify-center items-center md:justify-start gap-2 mb-2'> 
              <AttachEmailIcon className='text-orange-500'/>nithishgangineni07@gmail.com</p>
          </div>
        

         {/* Social Media Icons */}
         <div>
          <h3 className='text-xl font-semibold text-blue-700'>Follow us</h3>
          <div className='gap-6 text-3xl flex justify-center md:justify-start ' >
            {[
              {icon: <InstagramIcon></InstagramIcon> , href:"#"},
              {icon: <LocalPhoneIcon></LocalPhoneIcon> , href:"#"},
              {icon: <AttachEmailIcon></AttachEmailIcon>, href:"#"}
            ].map((item,i)=>
            <a
            key={i}
            href={item.href}
            className='text-orange-500 hover:text-blue-700 transition-transform transform hover:scale-110'>
              {item.icon}
              </a>
              )}
          </div>
        </div>
        </div>


        {/* Footer section */}
        <div className='mt-10 border-t text-sm text-center pt-4 text-gray-600'>
          <span className='text-orange-500 font-bold'>&copy;</span>2025 Shoppy Globe.All Rights Reserved.
        </div>
      </footer>
      
    </div>
  )
}

export default Body
