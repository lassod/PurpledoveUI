"use client";
import React from "react";
import { Reveal1 } from "../animations/Text";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Company1 from "../assets/images/comp/NDPC1171275131.png";
import Company2 from "../assets/images/comp/EarthPoint1171275132.png";
import Company3 from "../assets/images/comp/SPL1171275133.png";
import Company4 from "../assets/images/comp/AGO.jpg";
import Company5 from "../assets/images/comp/Frame 1171275135.png";
import Company6 from "../assets/images/comp/LAG1171275136.png";
import Company7 from "../assets/images/comp/LE1171275137.png";
import Company8 from "../assets/images/comp/commHostingSupp.jpg";
import Company9 from "../assets/images/comp/GoodlyHeritage.jpg";
import Company10 from "../assets/images/comp/nigeriaCleaningService.jpg";
import Company11 from "../assets/images/comp/relicuus.jpg";

export const TrustedByCompanies: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section
      id="trustedBy"
      className="flex flex-col items-center px-8 py-20 md:py-12 md:px-4 max-w-[1280px] mx-auto relative"
    >
      <div className="flex flex-col justify-between items-center gap-4">
        <Reveal1>
          <h4 className="text-center text-[36px] mb-12 md:mb-8">
            Trusted by Leading Companies Across Various Industries
          </h4>
        </Reveal1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-full w-full mx-auto bg-gray-60 rounded-[10px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {[
            Company1,
            Company2,
            Company3,
            Company4,
            Company5,
            Company6,
            Company7,
            Company8,
            Company9,
            Company10,
            Company11,
          ].map((companyImage, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col gap-2 items-center justify-center p-5">
                <Image
                  className="shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]"
                  src={companyImage}
                  alt={`Company Logo ${index + 1}`}
                  width={240} // Ensure the dimensions are set
                  height={240}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

// const CompanyCarousel: React.FC = () => {
//   return (
//     <Carousel className="relative w-full" opts={{ loop: true }}>
//       <CarouselContent className="flex gap-4 justify-center">
//         {[
//           Company1,
//           Company2,
//           Company3,
//           Company4,
//           Company5,
//           Company6,
//           Company7,
//           Company8,
//           Company9,
//           Company10,
//           Company11,
//         ].map((companyImage, index) => (
//           <CarouselItem key={index}>
//             <Reveal5>
//               <Image
//                 className="shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]"
//                 src={companyImage}
//                 alt={`Company Logo ${index + 1}`}
//                 width={240} // Ensure the dimensions are set
//                 height={240}
//               />
//             </Reveal5>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
//       <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
//     </Carousel>
//   );
// };

// export default TrustedByCompanies;
