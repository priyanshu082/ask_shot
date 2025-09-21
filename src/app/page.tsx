"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Header,
  Footer,
  HeroSection,
  HowItWorks,
  Features,
  BookDemo,
  Pricing,
  FAQ,
  
} from "../components";
import Demo from "@/components/Demo";

const AskShotLanding = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  // Sync local state with theme system
  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  // Update theme when switch changes
  const handleThemeChange = (checked: boolean) => {
    setIsDark(checked);
    setTheme(checked ? "dark" : "light");
  };

  // Apply theme changes to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "dark bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black"
      }`}
    >
      
      <Header isDark={isDark} onThemeChange={handleThemeChange} />
      <HeroSection />
      <HowItWorks />
      <Features/>
      <Footer />
      <BookDemo/>
      <Demo/>
      <Pricing/>
      <Footer/>
      <FAQ/>
    </div>
  );
};

export default AskShotLanding;
