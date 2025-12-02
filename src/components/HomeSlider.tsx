"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      
      <CarouselContent>
          <CarouselItem className="w-full">
            <div className="w-full h-auto">
              <img src="/Images/banner.jpg" alt="Slide 1" className=""/>
              
            </div>
          </CarouselItem>
           <CarouselItem >
            <div className="w-full h-auto">
              <img src="/Images/banner2.jpg" alt="Slide 1" className=""/>
            </div>
          </CarouselItem>
           <CarouselItem >
            <div className="w-full h-auto">
              <img src="/Images/banner3.jpg" alt="Slide 1" className=""/>
            </div>
          </CarouselItem>
        
      </CarouselContent >
      
      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white text-black px-4 py-2 hover:bg-gray-200" />
<CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white text-black px-4 py-2 hover:bg-gray-200" />


    </Carousel>
  )
}
