import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Your satisfaction and success are at the heart of everything we do. We listen, understand, and deliver.",
    },
    {
      icon: Award,
      title: "Excellence & Integrity",
      description:
        "We maintain the highest standards of professionalism and ethical practices in all our dealings.",
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description:
        "We embrace new technologies and strategies to provide you with cutting-edge real estate solutions.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Vraj Realty
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Building dreams, creating futures, and transforming the way people
              experience real estate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-[500px]">
              <img
                src="/images/office.jpg"
                alt="Modern office building"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Vraj Realty emerged from a simple vision: to
                  revolutionize the real estate experience by putting people
                  first. What started as a small team of passionate
                  professionals has grown into one of the region's most trusted
                  real estate firms.
                </p>
                <p>
                  Over the past 15 years, we've facilitated over 2,500
                  successful property transactions, helping families find their
                  dream homes and investors discover lucrative opportunities.
                  Our success is built on a foundation of trust, expertise, and
                  an unwavering commitment to excellence.
                </p>
                <p>
                  Today, Vraj Realty stands as a beacon of innovation in the
                  real estate industry, combining traditional values with
                  cutting-edge technology to deliver exceptional results for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-10 rounded-2xl shadow-xl mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower our clients with expert guidance, innovative
                  solutions, and personalized service that transforms their real
                  estate aspirations into Realty.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <Eye size={32} className="text-teal-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted and innovative real estate partner,
                  recognized for creating lasting value and exceptional
                  experiences for every client we serve.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-96 lg:h-full min-h-[500px]">
              <img
                src="/images/crew.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={64} className="mx-auto mb-6 text-emerald-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Growing Family
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Experience the Vraj Realty difference. Let us help you find the
            property that perfectly matches your dreams and goals.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-5 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
