"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    title: "APP DEVELOPMENT",
    heading: "App Development from Market Research, Testing, Deployment & Support",
    // description: "Custom solutions that drive innovation and growth",
    image: "/Web-App-banner.jpg",
  },
  {
    title: "DIGITAL MARKETING",
    heading: "Digital Marketing Agency for Evolving your Idea Into a Successful Launch",
    // description: "Boost your online presence with proven SEO techniques",
    image: "/Digital-Marketing-banner-1.jpg",
  },
  {
    title: "GRAPHIC DESIGN",
    heading: "Analysis, Planning, UI / UX Design and Launch with Team of Experts",
    // description: "Beautiful, functional designs that convert",
    image: "/Image+Background.png",
  },
];

export default function AutoServicesCarousel() {
  const router = useRouter(); // Initialize the router
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrent(emblaApi.selectedScrollSnap() + 1);
      };
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="w-full overflow-hidden relative">
      <div className="flex">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] relative bg-cover bg-center w-full h-[600px] flex flex-col justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0B1B35] bg-opacity-15"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
              <div className="max-w-3xl">
                <h2 className="text-white text-sm md:text-base font-semibold tracking-wider mb-4">
                  {slide.title}
                </h2>
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.heading}
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white px-8 py-6"
                  onClick={() => router.push('/contact')}>
                    GET IN TOUCH
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (slide.title === "GRAPHIC DESIGN") {
                        router.push('/design');
                      } else if (slide.title === "DIGITAL MARKETING") {
                        router.push('/digitalmarketing');
                      } else if (slide.title === "APP DEVELOPMENT") {
                        router.push('/app');
                      }
                    }}
                    className="border-[#FF4A17] text-white bg-transparent hover:bg-[#FF4A17] px-8 py-6"
                  >
                    FIND MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute z-20 bottom-8 right-8">
        <span className="text-white bg-white/10 px-4 py-2 rounded-full text-sm">
          {current} / {carouselData.length}
        </span>
      </div>
    </div>
  );
}
