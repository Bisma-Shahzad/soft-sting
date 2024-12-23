"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "./ui/button";

const ReletedItems = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const carouselItems = [
        {
            image: "/Engaging-Content-featured-image.png",
            category: "Digital Marketing",
            title: "How to Create Content That Lasts Forever (aka Evergreen Content)",
        },
        {
            image: "/carousel1.webp",
            category: "Social Media Marketing",
            title: "How Can I Stay Ahead of the Marketing Trends? (Don’t Ignore the Fourth Point)",
        },
        {
            image: "/carousel2.webp",
            category: "Digital Marketing",
            title: "Unlocking The Power of Marketing Cloud with Partnership",
        },
        {
            image: "/carousel3.webp",
            category: "Data Science - Digital Marketing",
            title: "First-Party Audiences – What They Are and Why They Matter",
        },
        {
            image: "/carousel4.webp",
            category: "Digital Marketing - SEO",
            title: "Everything You Wanted to Know About Google Analytics 4 and Google Analytics!",
        },
        {
            image: "/carousel5.webp",
            category: "Digital Marketing",
            title: "Small Business Marketing: How to Safely Try New Strategies",
        },
        {
            image: "/carousel6.webp",
            category: "Digital Marketing",
            title: "Why Do Marketing Agencies Prefer Google AdWords Services?",
        },
        {
            image: "/carousel7.webp",
            category: "Digital Marketing",
            title: "App Marketing StrategiesTemplate (FREE) and 3 Tips to Build an Addictive App",
        },
        {
            image: "/carousel8.webp",
            category: "Digital Marketing",
            title: "Conversion rate Optimization services: Does Cold Email Really Work?",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div>
            <div className="w-[90%] mx-auto my-24">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    draggable={true}
                    swipeable={true}
                    centerMode={false}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px px-4"
                >
                    {carouselItems.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-start gap-2 items-center">
                            <div
                                className="flex flex-col justify-start items-start p-5"
                                style={{ border: "0.5px solid #555550", borderRadius: "15px" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[322px] sm:w-[322px] w-[200px] sm:mx-auto mx-2"
                                />
                                <h3 className="text-[14px] font-bold text-[#989898] py-2">
                                    {item.category}
                                </h3>
                                <h1 className="text-[24px] font-bold sm:w-[294px] w-[200px]">
                                    {item.title}
                                </h1>
                                <Button className="text-[#007BFF] bg-transparent hover:bg-transparent">
                                    Read more
                                </Button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ReletedItems;