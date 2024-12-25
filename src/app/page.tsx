import Navber from "@/components/Navber";
import Hero from "@/components/Hero";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Banner2 from "@/components/Banner2";
import Hero3 from "@/components/Hero3";

import FeaturedPost from "@/components/FeaturedPost";
import FooterHerder from "@/components/FooterHerder";

export default function Home() {
  return (
    <div>
      <Header />
      <Navber />
      <Hero />
      <ProductList />
      <Banner2 />
      <Hero3 />
      <FeaturedPost />
      <FooterHerder />
      <Footer />
    </div>
  );
}
