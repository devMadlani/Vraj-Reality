import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.subject) {
      setErrorMessage("Please select a subject");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      // EmailJS configuration
      const serviceId = "service_otzjh9p"; // Replace with your EmailJS Service ID
      const templateId = "template_m7p0pao"; // Replace with your EmailJS Template ID
      const publicKey = "Qj7Ca2cTiPrzL8gNT"; // Replace with your EmailJS Public Key

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: "yourspace.vrajrealty99@gmail.com@gmail.com",
        email: formData.email,
        phone: formData.phone,
        subject:
          subjectOptions.find((opt) => opt.value === formData.subject)?.label ||
          formData.subject,
        message: formData.message,
        to_email: formData.email, // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsLoading(false);
      setErrorMessage(
        "Failed to send message. Please try again or contact us directly.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Sangini Aspire, Sangini Aspire, Beside Sanskruti Township Near Pal RTO, Pal - Hajira, Road, Pal Gam, Surat, Gujarat 394510

  const contactInfo = [
    {
      icon: MapPin,
      color: "emerald",
      title: "Visit Us",
      details: [
        "204, Unity Corner, Nr. V4U Circle,",
        "Pal Gam, Surat, Gujarat, India",
      ],
    },
    {
      icon: Phone,
      color: "emerald",
      title: "Call Us",
      details: ["+91 7203007569", "+91 8511990688"],
    },
    {
      icon: Mail,
      color: "emerald",
      title: "Email Us",
      details: ["yourspace.vrajrealty99@gmail.com"],
    },
    {
      icon: Clock,
      color: "emerald",
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: 10AM - 4PM"],
    },
  ];

  const subjectOptions = [
    { value: "", label: "Select a subject", disabled: true },
    { value: "buying", label: "🏡 Buying Property", icon: "🏡" },
    { value: "selling", label: "💰 Selling Property", icon: "💰" },
    { value: "renting", label: "🔑 Renting Property", icon: "🔑" },
    { value: "investment", label: "📈 Investment Opportunities", icon: "📈" },
    { value: "general", label: "💬 General Inquiry", icon: "💬" },
  ];
  const handleDropdownSelect = (value: string) => {
    setFormData({ ...formData, subject: value });
    setIsDropdownOpen(false);
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Have questions? We're here to help you find your perfect property.
              Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
              >
                <div
                  className={`w-14 h-14 bg-${info.color}-600 rounded-full flex items-center justify-center mb-6`}
                >
                  <info.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within
                24 hours. We're excited to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Custom Dropdown */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-left flex items-center justify-between ${
                        formData.subject
                          ? "text-gray-900 border-gray-300"
                          : "text-gray-400 border-gray-300"
                      } ${isDropdownOpen ? "ring-2 ring-emerald-500 border-transparent" : ""}`}
                    >
                      <span>
                        {formData.subject
                          ? subjectOptions.find(
                              (opt) => opt.value === formData.subject,
                            )?.label
                          : "Select a subject"}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {errorMessage && formData.subject === "" && (
                      <p className="text-red-500 text-sm mt-1">
                        {errorMessage}
                      </p>
                    )}

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                        {subjectOptions.slice(1).map((option, index) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleDropdownSelect(option.value)}
                            className={`w-full px-4 py-3 text-left hover:bg-emerald-50 transition-colors flex items-center gap-3 group ${
                              formData.subject === option.value
                                ? "bg-emerald-50 text-emerald-700"
                                : "text-gray-700"
                            } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                          >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {option.icon}
                            </span>
                            <span className="font-medium">
                              {option.label
                                .replace(option.icon || "", "")
                                .trim()}
                            </span>
                            {formData.subject === option.value && (
                              <span className="ml-auto text-emerald-600">
                                ✓
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell us about your real estate needs..."
                  ></textarea>
                </div>

                {submitted && (
                  <div className="bg-emerald-50 border-2 border-emerald-200 text-emerald-700 px-6 py-4 rounded-xl flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {errorMessage && !submitted && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <span className="font-medium">{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.8925039303824!2d72.77431054203613!3d21.200697900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc93851f1c5%3A0xc39c14d82cf28856!2sUNITY%20CORNER!5e0!3m2!1sen!2sin!4v1772119235914!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vraj Realty Location"
              ></iframe>

              {/* Get Directions Button Overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=6Q2G+7CF,+TP+10+Main+Rd,+Pal+Gam,+Surat,+Gujarat+394510,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group-hover:scale-105 transform"
                >
                  <MapPin size={20} className="animate-pulse" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Office
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We'd love to meet you in person! Drop by our office or schedule an appointment with one of our expert agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
              Schedule a Visit
            </button>
            <button className="bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
