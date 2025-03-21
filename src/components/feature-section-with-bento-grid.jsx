import React from "react";
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      title: "IT Consulting",
      description: "Expert advice to optimize your IT infrastructure and strategy.",
      image: "https://via.placeholder.com/600x400?text=IT+Consulting",
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions to boost productivity and growth.",
      image: "https://via.placeholder.com/600x400?text=Software+Development",
    },
    {
      title: "Cloud Solutions",
      description: "Secure, scalable cloud services to streamline your operations.",
      image: "https://via.placeholder.com/600x400?text=Cloud+Solutions",
    },
    {
      title: "Cybersecurity",
      description: "Advanced protection to secure your digital assets and data.",
      image: "https://via.placeholder.com/600x400?text=Cybersecurity",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Empower Your Business with Cutting-Edge IT Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Explore our wide range of IT services tailored to accelerate your digital transformation.
          </p>
        </div>
        {/* Service Cards */}
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
