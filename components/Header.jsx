"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { PiPhoneCall } from "react-icons/pi";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open
  const [submenuHovered, setSubmenuHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu toggle

  const menuItems = [
    {
      name: "OUR SERVICES",
      href: "#services",
      subItems: [
        { name: "DIGITAL MARKETING", href: "/digitalmarketing" },
        { name: "DESIGN", href: "/design" },
        { name: "WEB DEVELOPMENT", href: "/webdevelopment" },
        { name: "ECOMMERCE", href: "/ecommerce" },
        { name: "APP", href: "/app" },
        { name: "SEO", href: "/seo" },
      ],
    },
    { name: "ABOUT US", href: "/about" },
    { name: "OUR PROCESS", href: "/process" },
    // {
    //   name: "PRICING",
    //   href: "#pricing",
    //   subItems: [
    //     { name: "DIGITAL MARKETING", href: "#web-development" },
    //     { name: "DESIGN", href: "#mobile-apps" },
    //     { name: "WEB DEVELOPMENT", href: "#seo-services" },
    //     { name: "ECOMMERCE", href: "#web-development" },
    //     { name: "APP", href: "#mobile-apps" },
    //     { name: "SEO", href: "#seo-services" },
    //   ],
    // },
    // { name: "BLOG", href: "#blog" },
    { name: "CONTACT US", href: "/contact" },
    { name: "PORTFOLIO", href: "/portfolio" },
  ];

  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  const handleMouseLeaveParent = () => {
    setTimeout(() => {
      if (!submenuHovered) {
        setOpenMenu(null);
      }
    }, 100);
  };

  const handleMouseEnterSubmenu = () => {
    setSubmenuHovered(true);
  };

  const handleMouseLeaveSubmenu = () => {
    setSubmenuHovered(false);
    setOpenMenu(null);
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-48 h-16 p-2 cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block xl:hidden">
        <button
          className="text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu */}
      <nav
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } xl:flex absolute xl:static top-16 left-0 w-full xl:w-auto bg-white xl:bg-transparent shadow-md xl:shadow-none z-50`}
      >
        {/* <ul className="flex space-x-6 xl:space-x-8 px-2 xl:px-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeaveParent}
            >
              <a
                href={item.href}
                className="font-normal flex items-center hover:text-[#FF4A17] transition-colors"
              >
                {item.name}
                {["OUR SERVICES", "PRICING"].includes(item.name) && (
                  <IoIosArrowDown />
                )}
              </a>
              {item.subItems && openMenu === index && (
                <ul
                  className="absolute top-full left-0 bg-black text-white shadow-lg rounded p-2 z-50"
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-1 px-3 hover:underline rounded hover:decoration-[#FF4A17] w-44 pt-4 text-sm"
                    >
                      <a href={subItem.href} className="block">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}

        <ul className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeaveParent}
            >
              <a
                href={item.href}
                className="font-normal flex items-center hover:text-[#FF4A17] transition-colors"
              >
                {item.name}
                {item.subItems && <IoIosArrowDown />}
              </a>
              {item.subItems && openMenu === index && (
                <ul
                  className="absolute top-full left-0 bg-black text-white shadow-lg rounded p-2 z-50"
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-1 px-3 hover:underline rounded hover:decoration-[#FF4A17] w-44 pt-4 text-sm"
                    >
                      <a href={subItem.href} className="block">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons and Contact */}
      <div className="hidden xl:flex items-center space-x-4">
        <Link
          href="https://www.linkedin.com/company/softstings/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="cursor-pointer hover:text-white hover:bg-blue-700" />
        </Link>
        <Link
          href="https://web.facebook.com/softstingsllc/?_rdc=1&_rdr#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="cursor-pointer hover:text-white hover:bg-blue-950" />
        </Link>
        <Link
          href="https://www.instagram.com/softstings/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-white hover:bg-purple-700" />
        </Link>
        <Link
          href="https://softstings.com/profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegUserCircle className="cursor-pointer hover:text-white hover:bg-[#FF4A17]" />
        </Link>
        <button className="bg-[#FF4A17] text-white px-4 py-2 flex items-center rounded">
          <PiPhoneCall />
          (346 340-1432)
        </button>
      </div>
    </header>
  );
};

export default Header;

// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaRegUserCircle } from 'react-icons/fa'
// import { IoIosArrowDown } from 'react-icons/io'
// import { PiPhoneCall } from 'react-icons/pi'
// import { Button } from '@/components/ui/button'

// const menuItems = [
//   {
//     name: "OUR SERVICES",
//     href: "#services",
//     subItems: [
//       { name: "DIGITAL MARKETING", href: "/digitalmarketing" },
//       { name: "DESIGN", href: "/design" },
//       { name: "WEB DEVELOPMENT", href: "/webdevelopment" },
//       { name: "ECOMMERCE", href: "/ecommerce" },
//       { name: "APP", href: "#mobile-apps" },
//       { name: "SEO", href: "#seo-services" },
//     ],
//   },
//   { name: "ABOUT US", href: "/about" },
//   { name: "OUR PROCESS", href: "/process" },
//   {
//     name: "PRICING",
//     href: "#pricing",
//     subItems: [
//       { name: "DIGITAL MARKETING", href: "#digital-marketing" },
//       { name: "DESIGN", href: "#design" },
//       { name: "WEB DEVELOPMENT", href: "#web-development" },
//       { name: "ECOMMERCE", href: "#ecommerce" },
//       { name: "APP", href: "#mobile-apps" },
//       { name: "SEO", href: "#seo-services" },
//     ],
//   },
//   { name: "BLOG", href: "#blog" },
//   { name: "CONTACT US", href: "/contact" },
//   { name: "PORTFOLIO", href: "/portfolio" },
// ]

// const Header = () => {
//   const [openMenu, setOpenMenu] = useState(null)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [submenuHovered, setSubmenuHovered] = useState(false)

//   const handleMouseEnter = (index) => {
//     setOpenMenu(index)
//   }

//   const handleMouseLeaveParent = () => {
//     setTimeout(() => {
//       if (!submenuHovered) {
//         setOpenMenu(null)
//       }
//     }, 100)
//   }

//   const handleMouseEnterSubmenu = () => {
//     setSubmenuHovered(true)
//   }

//   const handleMouseLeaveSubmenu = () => {
//     setSubmenuHovered(false)
//     setOpenMenu(null)
//   }

//   return (
//     <header className="w-full bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-3 px-4 lg:px-8">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <Image
//               src="/Logo.png"
//               alt="Soft Stings"
//               width={192}
//               height={64}
//               className="w-48 h-16 object-contain"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:block">
//             <ul className="flex space-x-6">
//               {menuItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="relative group"
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeaveParent}
//                 >
//                   <Link
//                     href={item.href}
//                     className={`flex items-center space-x-1 py-2 text-sm font-medium text-gray-900 hover:text-[#FF4A17] transition-colors ${
//                       openMenu === index ? 'text-[#FF4A17]' : ''
//                     }`}
//                   >
//                     <span>{item.name}</span>
//                     {item.subItems && <IoIosArrowDown className="h-4 w-4" />}
//                   </Link>
//                   {item.subItems && openMenu === index && (
//                     <div
//                       className="absolute top-full left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1"
//                       onMouseEnter={handleMouseEnterSubmenu}
//                       onMouseLeave={handleMouseLeaveSubmenu}
//                     >
//                       {item.subItems.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           href={subItem.href}
//                           className="block px-4 py-2 text-sm text-white hover:text-[#FF4A17] hover:underline decoration-[#FF4A17]"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Social Links & Phone */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <div className="flex items-center space-x-4">
//               <Link
//                 href="https://www.linkedin.com/company/softstings/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-[#0077B5] transition-colors"
//               >
//                 <FaLinkedinIn className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://web.facebook.com/softstingsllc/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-[#1877F2] transition-colors"
//               >
//                 <FaFacebookF className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://www.instagram.com/softstings/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-[#E4405F] transition-colors"
//               >
//                 <FaInstagram className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://softstings.com/profile/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-[#FF4A17] transition-colors"
//               >
//                 <FaRegUserCircle className="h-5 w-5" />
//               </Link>
//             </div>
//             <Button className="bg-[#FF4A17] hover:bg-[#ff4a17]/90 text-white">
//               <PiPhoneCall className="mr-2 h-4 w-4" />
//               (346) 340-1432
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
//           >
//             <span className="sr-only">Open menu</span>
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-black text-white">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {menuItems.map((item, index) => (
//                 <div key={index}>
//                   <button
//                     onClick={() => setOpenMenu(openMenu === index ? null : index)}
//                     className="w-full flex items-center justify-between px-3 py-2 text-base font-medium hover:text-[#FF4A17]"
//                   >
//                     <span>{item.name}</span>
//                     {item.subItems && (
//                       <IoIosArrowDown className={`h-4 w-4 transition-transform ${
//                         openMenu === index ? 'rotate-180' : ''
//                       }`} />
//                     )}
//                   </button>
//                   {item.subItems && openMenu === index && (
//                     <div className="pl-4">
//                       {item.subItems.map((subItem, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           href={subItem.href}
//                           className="block px-3 py-2 text-sm text-gray-300 hover:text-[#FF4A17]"
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700">
//                 <Link
//                   href="https://www.linkedin.com/company/softstings/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-[#0077B5]"
//                 >
//                   <FaLinkedinIn className="h-5 w-5" />
//                 </Link>
//                 <Link
//                   href="https://web.facebook.com/softstingsllc/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-[#1877F2]"
//                 >
//                   <FaFacebookF className="h-5 w-5" />
//                 </Link>
//                 <Link
//                   href="https://www.instagram.com/softstings/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-[#E4405F]"
//                 >
//                   <FaInstagram className="h-5 w-5" />
//                 </Link>
//                 <Link
//                   href="https://softstings.com/profile/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-300 hover:text-[#FF4A17]"
//                 >
//                   <FaRegUserCircle className="h-5 w-5" />
//                 </Link>
//               </div>
//               <div className="px-3 py-4">
//                 <Button className="w-full bg-[#FF4A17] hover:bg-[#ff4a17]/90 text-white">
//                   <PiPhoneCall className="mr-2 h-4 w-4" />
//                   (346) 340-1432
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header

