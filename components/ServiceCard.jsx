"use client";
import React from 'react';
import eCommerceBanner from "../public/eCommerceBanner.png";
import eCommerceMarketing from "../public/eCommerceMarketing.png";
import eight from "../public/eight.png";
import five from "../public/five.png";
import six from "../public/six.png";
import one from "../public/one.png";
import customWebDesign from "../public/customWebDesign.png";
import mobileAppDevelopment from "../public/mobileAppDevelopment.png";
import two from "../public/two.png";
import seoServices from "../public/seoServices.png";
import seven from "../public/seven.png";
import nine from "../public/nine.png";
import digitalMarketing from "../public/digitalMarketing.png";
import four from "../public/four.png";
import three from "../public/three.png";
import webDevelopment from "../public/webDevelopment.png";
import { useRouter } from 'next/navigation';

const ServiceCard = () => {
    const router = useRouter(); // Initialize the router

    const data = [
        {
            id: 1,
            title: 'Digital Marketing',
            description: 'Get Digital marketing service for driving leads, traffic and converting visitors. A team that manages your ad spend for PPC campaigns and business pages. Pick a pricing plan for digital marketing. As a digital marketing agency, Soft Stings is different when it comes to commitment and client satisfaction.',
            bgImage: '/digitalMarketing.png',
            icon: '/one.png',
            route: 'digitalmarketing'
        },
        {
            id: 2,
            title: 'SEO Service',
            description: 'Backlinks, metadata and page rank with an optimized website and social channels. Get on top of the SERP with SEO service for conversions. Get SEO service for better rankings and high domain authority. Partner with Soft Stings for improving site structure and traffic potential.',
            bgImage: '/seoServices.png',
            icon: '/two.png',
            route: 'seo'
        },
        {
            id: 3,
            title: 'e-Commerce Marketing',
            description: 'Explore how e-Commerce marketing can bring qualified leads to give exemplary campaign results. e-Commerce development with inventory stocks and product features. Soft Stings gives strategic path to your checkout and turns a visitor into a customer as quickly as possible.',
            bgImage: '/eCommerceMarketing.png',
            icon: '/three.png',
            route: 'ecommerce'
        },
        {
            id: 4,
            title: 'Web Development',
            description: 'Discover how web development service can bring a sustainable level of steady traffic growth. From developing a simple single static page to complex web development.',
            bgImage: '/webDevelopment.png',
            icon: '/four.png',
            route: 'webdevelopment'
        },
        {
            id: 5,
            title: 'Mobile App Development',
            description: 'Real-time analysis on how your mobile app performs and how your competitors position themselves. Explore what opportunities exist in your industry. At Soft Stings, we make best apps for you to gain and retain users.',
            bgImage: '/mobileAppDevelopment.png',
            icon: '/five.png',
            route: 'app'
        },
        {
            id: 6,
            title: 'e-Commerce Development',
            description: 'Expert digital marketers and platform for eCommerce development. Team engineers a custom-built platform designed to help you make smarter marketing decisions. Ecommerce website development at Soft Stings allows easy payments.',
            bgImage: '/eCommerceBanner.png',
            icon: '/six.png',
            route: 'ecommerce'
        },
        {
            id: 7,
            title: 'Graphic Design',
            description: "Logo designs and marketing collateral expands your social reach. Let experts help you with social media for customer acquisitions with brand identity to communicate brand voice. Designers at Soft Stings apply visual hierarchy to meet users' specific needs.",
            bgImage: '/customWebDesign.png',
            icon: '/seven.png',
            route: 'design'
        },
        {
            id: 8,
            title: 'Custom Web Design',
            description: 'We cover design for social media marketing (LinkedIn, Twitter, Facebook, Youtube etc.) Also custom design for a website, ad copy, brochures and PPC campaigns. Call now to get custom web design. We implement page layout techniques & typography for every project at Soft Stings.',
            bgImage: '/customWebDesign.png',
            icon: '/two.png',
            route: 'webdevelopment'
        },
        {
            id: 9,
            title: 'Design Of A Landing Page',
            description: 'Landing page for selling on marketplaces (Amazon store). Our team performs the testing, observes the analytical data for digital marketing and curates content plans for inbound marketing. Soft Stings help out brands to get the best results from landing page.',
            bgImage: '/webDevelopment.png',
            icon: '/nine.png',
            route: 'webdevelopment'
        },
    ]
    return (

        data.map((item) => (
            <div
                key={item.id}
                onClick={() => router.push(item?.route)}
                className="relative group w-96 bg-cover bg-center mt-10 cursor-pointer "
                style={{ backgroundImage: `url(${item?.bgImage})`, height: 500, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px 0px', borderRadius: '5%' }}
            >
                {/* Icon in a circle */}
                < div className="absolute  left-4 bg-white rounded-full shadow-md p-3 z-20" style={{ top: -30, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px 0px', }}>
                    <img src={item?.icon} alt="icon" className="w-8 h-8" />
                </div >

                {/* Title */}
                < h2 className="left-6 p-8 text-white text-3xl font-bold z-10 w-64" >
                    {item?.title}
                </h2 >

                {/* Hover effect */}
                < div style={{ color: '#616161', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 10px 0px', borderRadius: '5%' }} className="absolute inset-0 bg-white text-['#616161'] flex flex-col justify-start items-start p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
                    <h3 className="text-3xl font-bold mb-2">{item?.title}</h3>
                    <p className="text-lg">{item?.description}</p>
                </div >
            </div >
        ))


    );
};

export default ServiceCard;
