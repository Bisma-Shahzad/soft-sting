import React from "react";

const PortfolioMenuBar = () => {
  const portfolioItems = [
    { name: "ALL WORKS", href: "#allworks" },
    { name: "DEVELOPMENT", href: "#development" },
    { name: "DIGITAL MARKETING", href: "#digitalmarketing" },
    { name: "MOBILE APPLICATION", href: "#mobileapplication" },
    { name: "SEO", href: "#seo" },
  ];

 
    const portfolioImages = [
      "/portfolio1.png",
      "/portfolio2.png",
      "/portfolio3.png",
      "/portfolio4.png",
      "/portfolio5.png",
      "/portfolio6.png",
    ];
  return (
    <>
    <nav className="bg-gray-100 p-4">
      <ul className="flex flex-wrap justify-center space-x-6 text-lg font-medium">
        {portfolioItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-blue-500 font-bold">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">
      {portfolioImages.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Portfolio ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  </>
  

  );
};

export default PortfolioMenuBar;
