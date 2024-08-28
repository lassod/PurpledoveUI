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
  const plugin1 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section
      id="trustedBy"
      className="flex flex-col items-center px-8  md:py-12 md:px-4 mx-auto relative"
    >
      <Reveal1>
        <h4 className="text-center relative text-black mt-4 mb-5 text-4xl sm:text-xl md:text-2xl lg:text-4xl">
          Trusted by Leading Companies Across Various Industries
        </h4>
      </Reveal1>
      <Carousel
        plugins={[plugin1.current]}
        className="mobileCardContainer mt-3"
        onMouseEnter={plugin1.current.stop}
        onMouseLeave={plugin1.current.reset}
      >
        <CarouselContent className="relative max-w-[1130px] gap-5 m-0">
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
            <CarouselItem
              key={index}
              className=" m-0 relative flex  items-center max-w-[240px]  p-0 rounded-lg overflow-hidden "
            >
              <div>
                <Image
                  className=" m-0 shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]   inset-0 object-cover"
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
