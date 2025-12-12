"use client";

import BrandSystems from "../components/BrandSystems";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import VisualStatements from "../components/VisualStatements";

export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navbar />
      <Hero />
      <BrandSystems />
      <Services />
      <VisualStatements />
      <Footer />
    </main>
  );
}
