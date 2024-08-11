import { Reveal1, Reveal5 } from "../animations/Text";
import Image from "next/image";

import Company1 from "../assets/images/comp/NDPC1171275131.png";
import Company2 from "../assets/images/comp/EarthPoint1171275132.png";
import Company3 from "../assets/images/comp/SPL1171275133.png";
import Company4 from "../assets/images/comp/DC1171275134.png";
import Company5 from "../assets/images/comp/Frame 1171275135.png";
import Company6 from "../assets/images/comp/LAG1171275136.png";
import Company7 from "../assets/images/comp/LE1171275137.png";

export const TrustedByCompanies = () => {
  return (
    <section
      id="trustedBy"
      className={`flex flex-col gap-16 md:pt-0 lg:pt-24 pb-8 lg:px-8 xl:px-24 px-4 max-w-screen-2xl mx-auto 
    }`}
    >
      <div className="flex flex-col justify-between items-center gap-4">
        <Reveal1>
          <h4 className="text-center text-[36px]">
            Trusted by Leading Companies Across Various Industries
          </h4>
        </Reveal1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Reveal5>
          <Image
            className="shadow-md max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px] xl:max-w-[240px]"
            src={Company1}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px] xl:max-w-[240px]"
            src={Company2}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px] xl:max-w-[240px]"
            src={Company3}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[200px] xl:max-w-[240px]"
            src={Company4}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]"
            src={Company5}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]"
            src={Company6}
            alt="company Logo"
          />
        </Reveal5>
        <Reveal5>
          <Image
            className="shadow-md max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[440px]"
            src={Company7}
            alt="company Logo"
          />
        </Reveal5>
      </div>
    </section>
  );
};
