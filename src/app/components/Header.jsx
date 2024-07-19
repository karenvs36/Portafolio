"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Menu, X } from 'react-feather';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-xl shadow-[#111827]-100 bg-[#111827]">
      <nav>
        <Container className="relative z-50 flex items-center justify-between py-8 px-12">
          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* NavLinks for larger screens */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Mobile Menu Links */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#111827] transition-transform duration-300 transform ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                className="text-white"
                onClick={toggleMobileMenu}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center mt-12">
              <NavLinks className="flex flex-col gap-4 text-white" onClick={handleLinkClick} />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
