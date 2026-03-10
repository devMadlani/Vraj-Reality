import {
  Home as HomeIcon,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const heroSlides = [
    {
      image: "/images/hero-image-1.jpeg",
      title: "Building Trust, Brick by Brick",
      subtitle: "Across Land, Commercial, Warehousing & Residential",
      slogan: "Your comprehensive real estate partner for all property needs.",
      propertyType: "All Properties",
    },
    {
      image: "/images/hero-image-2.jpeg",
      title: "Your Property. Our Priority.",
      subtitle: "Every Step of the Way",
      slogan: "Dedicated service from discovery to ownership and beyond.",
      propertyType: "Residential",
    },
    {
      image: "/images/hero-image-3.jpeg",
      title: "Smart Investments Start",
      subtitle: "With Vraj Realty",
      slogan: "Strategic real estate solutions for building lasting wealth.",
      propertyType: "Investment",
    },
    {
      image: "/images/hero-image-4.webp",
      title: "From Land to Living",
      subtitle: "We Turn Your Vision into Realty",
      slogan:
        "Transforming empty plots into thriving communities and businesses.",
      propertyType: "Land Development",
    },
    {
      image: "/images/hero-image-5.webp",
      title: "Simplifying Real Estate",
      subtitle: "Land, Commercial, Warehousing & Residential, All in One Place",
      slogan: "One platform. Multiple solutions. Endless possibilities.",
      propertyType: "Commercial",
    },
    {
      image: "/images/hero-image-6.jpeg",
      title: "Real Estate Made Real",
      subtitle: "With Integrity, Vision & Value",
      slogan: "Where trust meets opportunity in every transaction.",
      propertyType: "Warehousing",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Smooth scroll animation for clients carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newX = prev - 2; // Adjust speed here
        if (scrollRef.current) {
          const contentWidth = scrollRef.current.scrollWidth;
          const singleSetWidth = contentWidth / 6; // Since duplicated 6 times
          if (Math.abs(newX) >= singleSetWidth) {
            return 0;
          }
        }
        return newX;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: HomeIcon,
      title: "Complete Property Solutions",
      description:
        "From land and residential to commercial and warehousing - we cover all your real estate needs.",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description:
        "Stay ahead with our in-depth market analysis and investment insights across all property types.",
    },
    {
      icon: Award,
      title: "Trusted Service",
      description:
        "Building trust brick by brick with integrity, vision, and value in every transaction.",
    },
    // {
    //   icon: Users,
    //   title: "Expert Team",
    //   description:
    //     "Work with experienced professionals dedicated to your success in all property categories.",
    // },
  ];

  const stats = [
    { label: "Properties Sold", value: "350+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Years Experience", value: "20+" },
  ];

  const clients = [
    {
      name: "PNB",
      logo: "/commercial/pnb-bank.png",
    },
    {
      name: "saraswat",
      logo: "/commercial/saraswat-bank.png",
    },
    {
      name: "kotak",
      logo: "/commercial/kotak-life.png",
    },
    {
      name: "au-bank",
      logo: "/commercial/au-bank.png",
    },
    {
      name: "carpi-bank",
      logo: "/commercial/carpi-loan.jpeg",
    },
    {
      name: "honda",
      logo: "/showrooms/honda.png",
    },
    {
      name: "haier",
      logo: "/showrooms/haier.png",
    },
    {
      name: "inext",
      logo: "/showrooms/inext.png",
    },
    {
      name: "kia",
      logo: "/showrooms/kia_motors.png",
    },
    {
      name: "samsung",
      logo: "/showrooms/samsung.png",
    },
    {
      name: "ogeneral",
      logo: "/showrooms/o-general.png",
    },
    {
      name: "ambujs",
      logo: "/warhouse/ambuja.jpeg",
    },
    {
      name: "amrut",
      logo: "/warhouse/amrut.png",
    },
    {
      name: "vmart",
      logo: "/warhouse/vmart.png",
    },
  ];

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative mt-[80px] min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Images with Fade Transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-emerald-900/20"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex items-center justify-center py-12 sm:py-16 md:py-8 lg:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center w-full">
            {/* Animated Text Content */}
            <div
              key={`content-${currentSlide}`}
              className="animate-fade-in-up px-2 sm:px-3 md:px-4 lg:px-6"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-[1.15] sm:leading-[1.2] md:leading-tight drop-shadow-2xl">
                <span className="inline-block break-words">
                  {heroSlides[currentSlide].title}
                </span>
                <br className="hidden sm:block" />
                <span className="text-emerald-400 inline-block mt-1 sm:mt-1.5 md:mt-2 break-words">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto drop-shadow-lg font-light leading-relaxed px-1 sm:px-2 md:px-4 lg:px-6">
                {heroSlides[currentSlide].slogan}
              </p>
            </div>

            {/* Call to Action Buttons */}
            {/* <div
              key={`cta-${currentSlide}`}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay px-4"
            >
              <button className="group w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Properties</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl border-2 border-white/20 hover:border-white/40">
                <span>Contact Us</span>
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Clients Logo Carousel Section */}
      <section className="py-12 md:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center drop-shadow-lgx ">
            Our <span className="text-emerald-600 ">Clients</span>
          </h2>
        </div>
        <div className="overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 lg:gap-16"
            style={{
              width: "fit-content",
              transform: `translateX(${translateX}px)`,
            }}
          >
            {/* Duplicate clients multiple times for seamless infinite loop */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 lg:h-24 px-4"
              >
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain"
                    style={{ maxWidth: "200px" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className =
                        "flex items-center justify-center h-full px-6 py-2 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg text-emerald-700 font-semibold text-sm md:text-base border border-emerald-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300";
                      fallback.textContent = client.name;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Vraj Realty?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              unparalleled real estate experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container flex flex-wrap w-full justify-around gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}

      {/* Commercial Realty - Image Right */}
      <section className="pt-12 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                COMMERCIAL REALTY WITH UNPARALLELED AESTHETICS
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Commercial Office Spaces offers premium office spaces tailored
                to fit the needs of businesses. Our spaces come with the latest
                security and safety features to ensure the safety and comfort of
                your employees and customers. Designed with the highest
                standards of quality.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Clientele
              </h3>
              <div className="flex items-center gap-12 flex-wrap">
                <img
                  src="/commercial/pnb-bank.png"
                  alt="Client"
                  className="h-12 w-auto "
                />
                <img
                  src="/commercial/kotak-life.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
                <img
                  src="/commercial/saraswat-bank.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
                <img
                  src="/commercial/au-bank.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src="/images/office.jpg"
              alt="Modern commercial office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
      </section>

      {/* Retail Spaces - Image Left */}
      <section className=" bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-auto order-2 lg:order-1">
            <img
              src="/images/showroom.jpeg"
              alt="Luxury retail showroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                SHOWROOMS THAT SPEAK BUSINESS AND ENSEMBLES LUXURY
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Retail Spaces and Brand Realty are renowned for their strong
                industry reputation, focusing on sales and prime location to
                guarantee footfall. Our team is dedicated to providing unmatched
                luxury to ensure that your retail space is a success.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Clientele
              </h3>
              <div className="flex items-center gap-12 flex-wrap">
                <img
                  src="/showrooms/honda.png"
                  alt="Client"
                  className="h-12 w-auto "
                />
                <img
                  src="/showrooms/haier.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
                <img
                  src="/showrooms/inext.png"
                  alt="Client"
                  className="h-16 w-auto"
                />
                <img
                  src="/showrooms/kia_motors.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Land Requirements - Image Right */}
      <section className=" bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                BESPOKE LAND REQUIREMENTS
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Vraj Realty's Land Fulfillment service offers comprehensive land
                enquiry services for all types of land, from commercial and
                large-scale projects to the ultra-special. Our team of
                experienced professionals will provide you with the best advice
                and assistance when it comes to finding the right land for your
                project.
              </p>

              {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Clientele
              </h3>
              <div className="flex items-center gap-6 flex-wrap">
                <img
                  src="https://via.placeholder.com/100x50/0066CC/FFFFFF?text=Reliance"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="https://via.placeholder.com/100x50/000000/FFFFFF?text=TATA"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="https://via.placeholder.com/100x50/FF6B00/FFFFFF?text=Mahindra"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div> */}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src="/images/land.jpeg"
              alt="Land development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
      </section>

      {/* Gargantuan Warehousing Facilities - Image Left */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-auto order-2 lg:order-1">
            <img
              src="/images/warhouse.jpeg"
              alt="Warehouse facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                GARGANTUAN WAREHOUSING FACILITIES
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                At our Warehousing Facilities, we offer secure and reliable
                storage solutions for your goods. Our extensive research and
                proper logistics ensure that your goods are stored in the
                optimal location and environment. Our warehouses are available
                in open and shedded formats.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Clientele
              </h3>
              <div className="flex items-center gap-12 flex-wrap">
                <img
                  src="/warhouse/ambuja.jpeg"
                  alt="Client"
                  className="h-12 w-auto "
                />
                <img
                  src="/warhouse/amrut.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
                <img
                  src="/warhouse/vmart.png"
                  alt="Client"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Properties - Image Right */}
      <section className="pb-16 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight leading-tight">
                EXQUISITE RESIDENTIAL PROPERTIES
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Discover your dream home with our premium residential
                properties. We offer a wide range of apartments, villas, and
                luxury homes designed to meet the highest standards of comfort
                and modern living. Each property is carefully selected to ensure
                quality, safety, and an exceptional lifestyle for you and your
                family.
              </p>

              {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Clientele
              </h3>
              <div className="flex items-center gap-6 flex-wrap">
                <img
                  src="https://via.placeholder.com/100x50/1E3A8A/FFFFFF?text=DLF"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="https://via.placeholder.com/100x50/00A651/FFFFFF?text=Godrej"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <img
                  src="https://via.placeholder.com/100x50/0066CC/FFFFFF?text=HDFC"
                  alt="Client"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div> */}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src="/images/hero-image-2.jpeg"
              alt="Luxury residential property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
      </section>

      {/* <div className="mt-12 top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,80 L20,80 L20,50 L30,50 L30,30 L40,30 L40,50 L50,50 L50,80 L80,80 L80,60 L85,60 L85,45 L90,45 L90,40 L95,40 L95,45 L100,45 L100,60 L105,60 L105,80 L140,80 L140,65 L145,65 L145,55 L150,55 L150,50 L155,50 L155,45 L165,45 L165,50 L170,50 L170,55 L175,55 L175,65 L180,65 L180,80 L220,80 L220,70 L230,70 L230,60 L235,60 L235,55 L245,55 L245,60 L250,60 L250,70 L260,70 L260,80 L300,80 L300,50 L310,50 L310,35 L315,35 L315,25 L325,25 L325,20 L335,20 L335,25 L345,25 L345,35 L350,35 L350,50 L360,50 L360,80 L400,80 L400,65 L410,65 L410,55 L420,55 L420,65 L430,65 L430,80 L470,80 L470,70 L475,70 L475,60 L480,60 L480,55 L485,55 L485,50 L495,50 L495,55 L500,55 L500,60 L505,60 L505,70 L510,70 L510,80 L550,80 L550,60 L560,60 L560,45 L565,45 L565,35 L575,35 L575,30 L585,30 L585,35 L595,35 L595,45 L600,45 L600,60 L610,60 L610,80 L650,80 L650,55 L660,55 L660,40 L670,40 L670,55 L680,55 L680,80 L720,80 L720,65 L730,65 L730,50 L740,50 L740,65 L750,65 L750,80 L790,80 L790,70 L800,70 L800,60 L810,60 L810,70 L820,70 L820,80 L860,80 L860,50 L870,50 L870,30 L880,30 L880,20 L890,20 L890,15 L900,15 L900,20 L910,20 L910,30 L920,30 L920,50 L930,50 L930,80 L970,80 L970,65 L980,65 L980,55 L990,55 L990,65 L1000,65 L1000,80 L1040,80 L1040,60 L1050,60 L1050,45 L1060,45 L1060,60 L1070,60 L1070,80 L1110,80 L1110,70 L1120,70 L1120,60 L1130,60 L1130,70 L1140,70 L1140,80 L1180,80 L1180,55 L1190,55 L1190,40 L1200,40 L1200,35 L1210,35 L1210,40 L1220,40 L1220,55 L1230,55 L1230,80 L1270,80 L1270,65 L1280,65 L1280,50 L1290,50 L1290,65 L1300,65 L1300,80 L1340,80 L1340,70 L1350,70 L1350,60 L1360,60 L1360,70 L1370,70 L1370,80 L1410,80 L1410,50 L1420,50 L1420,30 L1430,30 L1430,20 L1440,20 L1440,15 L1450,15 L1450,20 L1460,20 L1460,30 L1470,30 L1470,50 L1480,50 L1480,80 L1520,80 L1520,65 L1530,65 L1530,55 L1540,55 L1540,65 L1550,65 L1550,80 L1590,80 L1590,60 L1600,60 L1600,45 L1610,45 L1610,60 L1620,60 L1620,80 L1660,80 L1660,70 L1670,70 L1670,60 L1680,60 L1680,70 L1690,70 L1690,80 L1730,80 L1730,55 L1740,55 L1740,40 L1750,40 L1750,35 L1760,35 L1760,40 L1770,40 L1770,55 L1780,55 L1780,80 L1820,80 L1820,65 L1830,65 L1830,50 L1840,50 L1840,30 L1850,30 L1850,25 L1860,25 L1860,20 L1870,20 L1870,15 L1880,15 L1880,20 L1890,20 L1890,25 L1900,25 L1900,30 L1910,30 L1910,50 L1920,50 L1920,120 L0,120 Z"
            fill="currentColor"
            className="text-emerald-200"
          />
        </svg>
      </div> */}
      <img
        src="/images/buildings1.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <section className="relative mb-20 bg-[#9FE3CA]  text-gray-900 overflow-hidden">
        {/* Top Cityscape Skyline */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 lg:pt-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            At Vraj Realty, we strive to provide our clients with the best
            possible experience when it comes to their real estate needs. With
            our 20+ years of experience, we have built up a solid reputation for
            our reliable and knowledgeable services. We pride ourselves in
            delivering exceptional customer service and staying on top of the
            latest market trends. Our team of experienced agents is dedicated to
            helping you find the perfect property and make smart decisions
            regarding your investments.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Read More
          </button>
        </div>

        {/* Bottom Paint Brush Effect */}
        <div className=" w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C100,20 150,35 200,30 C250,25 280,15 350,25 C420,35 450,40 520,35 C590,30 620,20 700,28 C780,36 810,45 890,40 C970,35 1000,25 1080,32 C1160,39 1190,48 1270,43 C1350,38 1380,28 1460,35 C1540,42 1570,50 1650,45 C1730,40 1760,30 1840,37 C1870,40 1900,42 1920,43 L1920,60 L0,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Vraj Realty, we believe in turning your property dreams into
                Realty. With over 20 years of experience, we've helped thousands
                of clients find their perfect properties - from land and
                residential homes to commercial spaces and warehousing
                solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized property matching",
                  "Comprehensive market analysis",
                  "End-to-end transaction support",
                  "Post-sale assistance and guidance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="text-emerald-600 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <img
                src="/images/hero-image-6.jpeg"
                alt="Modern home interior"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Sticky Button */}
      <a
        href="https://wa.me/917203007569?text=Hello%2C%20I%20am%20interested%20in%20your%20real%20estate%20services.%20Can%20you%20please%20provide%20me%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Outer Glow Ring */}
        {/* <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity"></div> */}

        {/* Button */}
        <div className="relative flex items-center justify-center size-[50px] bg-green-500 rounded-full transition-all duration-300 hover:scale-110">
          <img src="/images/wp.svg" alt="WhatsApp" className="w-8 h-8" />
        </div>

        {/* Tooltip */}
        <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
