import HeroSection from "@/components/HeroSection/HeroSection";
import ProductList from "@/components/Products/ProductList";
import Services from "@/components/Services/Services";
import Image from "next/image";
import React, { Suspense } from "react";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Services />
      <ProductList />
    </main>
  );
}
