import { navContentPromo } from "@/app/components/assets/data/Components";
import Footer from "@/app/components/landingPage/Footer";
import Header from "@/app/components/landingPage/Header";
import { HeroContact } from "@/app/components/landingPage/Hero";

const ContactPage = () => {
  return (
    <div>
      <Header headerData={navContentPromo} />
      <HeroContact />
      <Footer footerData={navContentPromo} />
    </div>
  );
};

export default ContactPage;
