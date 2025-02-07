"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  LinkIcon,
  WhatsAppIcon,
} from "./Icons";

const ShareButton = ({ slug }: { slug: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const articleUrl = `${baseUrl}/blog/${slug}`;

  const socialNetworks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`,
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${articleUrl}`,
      icon: <TwitterIcon />,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      icon: <LinkedInIcon />,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${articleUrl}`
      )}`,
      icon: <WhatsAppIcon />,
    },
    {
      name: "Copiar enlace",
      url: articleUrl,
      icon: <LinkIcon />,
      action: () => navigator.clipboard.writeText(articleUrl),
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Compartir
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 z mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
          >
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (network.action) {
                    e.preventDefault();
                    network.action();
                  }
                }}
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {network.icon}
                <span className="ml-2">{network.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
