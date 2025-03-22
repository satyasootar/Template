"use client";
import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hexagon = ({ className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 90, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: "backOut" }}
      className={cn("absolute", className)}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        stroke="currentColor"
        fill="none"
      >
        <path
          d="M50 1.5L98.25 25.75V74.25L50 98.5L1.75 74.25V25.75L50 1.5Z"
          strokeWidth="1.5"
          className="text-gray-300/50 dark:text-indigo-900/80"
        />
      </svg>
    </motion.div>
  );
};

const CircuitLine = ({ className, path, delay = 0 }) => {
  return (
    <motion.svg
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, delay, ease: "easeInOut" }}
      viewBox="0 0 100 100"
      className={cn("absolute stroke-[0.5]", className)}
      fill="none"
    >
      <path
        d={path}
        stroke="currentColor"
        className="text-gray-200 dark:text-indigo-900"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

const AnimatedGrid = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 bg-[length:40px_40px] bg-grid-gray-300/50 dark:bg-grid-indigo-900/20"
    />
  );
};

const FloatingCard = ({ text, className, delay = 2 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [0, -15, 0], opacity: 1 }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeIn",
      }}
      className={cn(
        "absolute backdrop-blur-sm border bg-white/10 dark:bg-black/20 px-4 py-3 rounded-lg shadow-lg",
        "dark:border-white/10 border-gray-200",
        className
      )}
    >
      <span className="text-sm text-gray-700 dark:text-white/70 font-medium">{text}</span>
    </motion.div>
  );
};

const AnimatedGraph = ({ className, path }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("absolute", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        className="text-gray-200/50 dark:text-indigo-900/50"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        strokeWidth="1.5"
      />
    </motion.svg>
  );
};

function HeroGeometric({
  badge = "Digital Innovators",
  title1 = "Transformative Tech Solutions",
  title2 = "Engineering Digital Excellence"
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] }
    }),
  };

  const services = [
    "Billing Software",
    "POS Software",
    "CRM Software",
    "UI/UX Design",
    "Android & iOS Apps",
    "Web Development",
    "Cloud Solutions"
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#0A0A0F]">
      <AnimatedGrid />

      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Service Cards */}
        <FloatingCard text={services[0]} className="left-[5%] top-[15%]" delay={0.2} />
        <FloatingCard text={services[1]} className="left-[10%] top-[30%]" delay={0.4} />
        <FloatingCard text={services[2]} className="left-[8%] top-[50%]" delay={0.6} />
        <FloatingCard text={services[3]} className="left-[12%] top-[70%]" delay={0.8} />

        <FloatingCard text={services[4]} className="right-[5%] top-[20%]" delay={0.3} />
        <FloatingCard text={services[5]} className="right-[10%] top-[40%]" delay={0.5} />
        <FloatingCard text={services[6]} className="right-[8%] top-[65%]" delay={0.7} />

        {/* Animated Graphs */}
        <AnimatedGraph
          className="w-48 left-[20%] top-[25%]"
          path="M5 80 Q25 10 50 30 Q75 50 95 20"
        />
        <AnimatedGraph
          className="w-36 right-[15%] top-[55%]"
          path="M5 20 Q30 50 45 35 Q60 20 80 40 Q95 60 95 80"
        />

        <Hexagon className="w-32 -left-10 top-1/4" delay={0.2} />
        <Hexagon className="w-24 right-20 top-1/3" delay={0.4} />
        <Hexagon className="w-40 -right-20 bottom-1/4" delay={0.6} />

        <CircuitLine
          className="w-1/3 left-10 top-1/3"
          path="M5 20C20 5 40 35 60 20S80 45 95 30"
          delay={0.3}
        />
        <CircuitLine
          className="w-1/4 right-20 bottom-1/3"
          path="M5 80Q30 60 50 80T95 60"
          delay={0.5}
        />

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 dark:from-indigo-600/30 dark:to-cyan-600/30 blur-[100px]" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-cyan-500/80" />
            <span className="text-sm text-gray-900 dark:text-white/60 tracking-wide">
              {badge}
            </span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 dark:from-white to-gray-700 dark:to-white/80">
                {title1}
              </span>
              <br />
              <span className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 dark:from-indigo-300 via-gray-700 dark:via-white/90 to-cyan-400 dark:to-cyan-300"
              )}>
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Accelerating digital transformation through cutting-edge solutions and strategic innovation.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
              Know More
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0F] via-transparent to-white/80 dark:to-[#0A0A0F]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };