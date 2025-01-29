// src/components/NotFoundClient.tsx
"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const NotFoundClient = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-lg shadow-xl text-center"
    >
      <AlertTriangle className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-black mb-2">404</h1>
      <p className="text-lg text-yellow-300 mb-6">Página no encontrada</p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
};

export default NotFoundClient;
