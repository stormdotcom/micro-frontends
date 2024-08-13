import React from "react";
import FeaturedAccessories from "@/components/Featured/FeaturedAccessories";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductList from "@/components/Products/ProductList";
import Services from "@/components/Services/Services";
import AccessoriesList from "@/components/Products/AccessoriesList";
import FeaturedSoundDevice from "@/components/Featured/FeaturedSoundDevice";
import FeaturedBrands from "@/components/Featured/FeaturedBrands";




export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Services />
      <ProductList />
      <FeaturedAccessories />
      <AccessoriesList />
      <FeaturedSoundDevice />
      <FeaturedBrands />
    </main>
  );
}
