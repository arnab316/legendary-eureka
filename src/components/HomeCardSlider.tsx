import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "./HomeCardItem";

const cardData = [
  { 
    logo: "./Images/approve.png", 
    title: "Approval Of Factory Plan", 
    description: "Rule 3 of the West Bengal Factories Rules, 1958 specifies that no building...",
    titleColor: "text-pink-600",
    applyLink: "https://silpasathi.wb.gov.in/"
  },
  { 
    logo: "./Images/registration.png", 
    title: "Registration and grant of licence", 
    description: "Now Stipulated time to Registration and grant of licence under the factory act.",
    titleColor: "text-orange-500",
    applyLink: "https://silpasathi.wb.gov.in/"
  },
  { 
    logo: "./Images/renew.png", 
    title: "Renewal of Factory Licence", 
    description: "Before the expiry of the licence, an Occupier is required to submit...",
    titleColor: "text-[#F6490D]"
  },
  { 
    logo: "./Images/renew.png", 
    title: "Auto-Renewal Of Factory Licence", 
    description: "Automatic renewal process for factory licences with simplified procedures.",
    titleColor: "text-[#F6490D]",
    applyLink: "https://silpasathi.wb.gov.in/"
  },
  { 
    logo: "./Images/amendment.png", 
    title: "Amendment/Transfer Of Factory Licence", 
    description: "Process for modifying or transferring factory licence ownership.",
    titleColor: "text-[#73CDC7]"
  },
    { 
    logo: "./Images/report-submit.png", 
    title: "Submission Of Report", 
    description: "Regular submission of required returns and documentation.",
    titleColor: "text-[#73CDC7]"
  },
  { 
    logo: "./Images/submission.png", 
    title: "Submission Of Returns", 
    description: "Regular submission of required returns and documentation.",
    titleColor: "text-[#D4E05D]"
  },
  { 
    logo: "./Images/service.png", 
    title: "Randomization Inspection", 
    description: "Random inspection procedures for factory compliance.",
    titleColor: "text-[#4CAF50]"
  },
];

export function HomeCardSlider() {
  return (
    <div className="w-full py-10 pb-26 px-4 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our <span className="text-cyan-500">Services</span>
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2"></div>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full text-3xl text-white"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {cardData.map((card, index) => (
              <CarouselItem key={index} className="md:pl-9  sm:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent
                    logo={card.logo}
                    title={card.title}
                    description={card.description}
                    titleColor={card.titleColor}
                    applyLink={card.applyLink}
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex absolute bg-[#089AD4] hover:bg-[#24bdf9]" />
<CarouselNext className="hidden sm:flex absolute bg-[#089AD4] hover:bg-[#24bdf9]" />

        </Carousel>
      </div>
    </div>
  );
}