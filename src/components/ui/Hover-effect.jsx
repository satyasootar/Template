'use client';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HoverEffect = ({ items, className }) => {
  return (
    <div className={cn("grid grid-cols-1", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          className="relative group block p-4 h-full w-full"
        >
          <div className="rounded-lg p-6 bg-white dark:bg-transparent dark:border-2 shadow-xl transition-all">
            <div className="mb-4">
              {item.icon && (
                <span className="inline-block p-3 rounded-full bg-opacity-20 dark:bg-opacity-20">
                  {item.icon}
                </span>
              )}
            </div>
            <h3 className="font-bold text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};