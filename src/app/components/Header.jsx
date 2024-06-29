"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-xl shadow-[#111827]-100 bg-[#111827]">
      <nav>
        <Container className="relative z-50 flex justify-between py-8 px-12">
          {/* Logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          {/* NavLinks */}
          <div>
            <NavLinks className="hidden lg:flex lg:gap-10 items-center" />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
