"use client";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md shadow border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/70 text-sm">
          © 2025 Sherwin | Portfolio. All rights reserved.
        </p>
        <ul className="flex gap-6 text-sm text-white/70">
          <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
