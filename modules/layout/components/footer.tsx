"use client";
import React, { useEffect, useState } from "react";
import { PlugZap, Github, Mail, Twitter,  } from "lucide-react";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  

  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-700 bg-gray-900 text-gray-400 text-sm px-4 py-2 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-2">
        <PlugZap size={18} className="text-indigo-400" />
        <span className="font-semibold text-indigo-300">ReqFlow 🚀
        </span>
        <span className="text-xs text-gray-500">© {new Date().getFullYear()}</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-indigo-300">Docs</a>
        <a href="#" className="hover:text-indigo-300">API</a>
        <a href="#" className="hover:text-indigo-300">Support</a>

        {/* Theme Toggle */}
        {/* <div className="flex items-center bg-gray-800 rounded-md overflow-hidden">
          <button
            className={`p-1.5 ${theme === "light" ? "bg-gray-700 text-yellow-400" : "text-gray-400"}`}
          >
            <Sun size={16} />
          </button>
          <button
            className={`p-1.5 ${theme === "dark" ? "bg-gray-700 text-indigo-400" : "text-gray-400"}`}
          >
            <Moon size={16} />
          </button>
          <button
            className={`p-1.5 ${theme === "system" ? "bg-gray-700 text-green-400" : "text-gray-400"}`}
          >
            <Monitor size={16} />
          </button>
        </div> */}

        {/* Social Links */}
        <a href="https://github.com/sumileturki" target="_blank" rel="noreferrer">
          <Github size={16} className="hover:text-indigo-300" />
        </a>
        <a href="https://x.com/sumi_turki" target="_blank" rel="noreferrer">
          <Twitter size={16} className="hover:text-indigo-300" />
        </a>
        <a href="mailto:support@pingit.com">
          <Mail size={16} className="hover:text-indigo-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
