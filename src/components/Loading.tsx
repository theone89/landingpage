// app/components/Loading.tsx
"use client"; // Marca este componente como "use client"

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-4 h-4 bg-yellow-300 rounded-full"
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-4 h-4 bg-yellow-300 rounded-full"
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-4 bg-yellow-300 rounded-full"
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;
