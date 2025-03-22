'use client';
import { HoverEffect } from "./ui/Hover-effect";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Server,
  Cloud,
  Monitor,
  Database,
  ShieldCheck,
  PieChart,
  Phone
} from "lucide-react";

export default function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center dark:text-white text-black mb-12"
      >
        Our IT Services
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HoverEffect items={[skill]} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet unique business needs and enhance productivity.",
    link: "#",
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure to streamline operations.",
    link: "#",
    icon: <Cloud className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "IT Consulting",
    description: "Expert guidance to optimize IT strategy and infrastructure.",
    link: "#",
    icon: <Monitor className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Data Management",
    description: "Efficient data storage, processing, and analysis solutions.",
    link: "#",
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Cybersecurity Services",
    description: "Advanced protection against cyber threats and vulnerabilities.",
    link: "#",
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Server Management",
    description: "Reliable server maintenance and performance optimization.",
    link: "#",
    icon: <Server className="w-6 h-6 text-gray-500" />,
  },
  {
    title: "IT Support and Maintenance",
    description: "24/7 support to resolve technical issues and maintain system health.",
    link: "#",
    icon: <Phone className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "Data Analytics",
    description: "In-depth insights and analytics to drive business growth.",
    link: "#",
    icon: <PieChart className="w-6 h-6 text-orange-500" />,
  }
];
