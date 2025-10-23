// import React from 'react'

// const BottomFooter = () => {
//   return (
//     <div>
//       <div>

//       </div>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default BottomFooter


import Image from "next/image"
import Link from "next/link"

export default function BottomFooter() {
  return (
    <footer className="bg-[#1a1f24] text-white py-4 w-full md:px-32">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-4 flex-wrap md:flex-nowrap ">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/logo-small.png"
              alt="SoftStings Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <span className="pt-2">SoftStings | All Rights Reserved | Copyrights 2021-{new Date().getFullYear()}</span>
              <div className="flex items-start gap-2 ">
                <Link href="https://www.softstings.com" className="hover:text-[#ff5733] transition-colors">
                  www.softstings.com
                </Link>
                <span className="text-[#ff5733]">#SoftStings</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Link href="/termsandconditions" className="hover:text-[#ff5733] transition-colors">
              Terms and Condition
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/privacypolicy" className="hover:text-[#ff5733] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


