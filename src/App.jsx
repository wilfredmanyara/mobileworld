import { useEffect } from "react";
import Banner1 from "./assets/banner/banner2.jpg";
import Banner2 from "./assets/banner/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Components imports in order
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero.jsx/Hero";
import Counter from "./components/Counter/Counter";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Banner from "./components/Banner/Banner";
import BrandSwipper from "./components/BrandsSwiper/BrandsSwiper";
import Location from "./components/Location/Location";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Team from "./components/Owner/Team";

const bannerMockData = {
  title: "Transforming Tech Dreams into Reality!",
  description:
    "Discover a World of Innovation, Convenience, and Excellence in Every Mobile Experience.",
  list: [
    {
      title:
        "Flexible EMI Options: Shop for your favorite mobiles with convenient and customizable EMI plans.",
    },
    {
      title:
        "Premium Accessories Collection: Explore a curated selection of accessories to complement your device and style.",
    },
    {
      title:
        "Expert Mobile Services: Trust our skilled technicians for swift and reliable repairs and services.",
    },
  ],
};

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 ">
          <Navbar />
        </div>
        <Hero />
        <Counter />
        <ServiceCard />
        <BannerDetails reverse={true} img={Banner1} data={bannerMockData} />
        <BannerDetails img={Banner2} data={bannerMockData} />
        <Banner />
        <BrandSwipper />
        <Gallery />
        <Location />
        <Testimonial />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
