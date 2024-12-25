import React from "react";
import Shop from "@/components/Shop";
import ShopList from "@/components/ShopList";
import Footer from "@/components/Footer";
import FooterHerder from "@/components/FooterHerder";
import Filter from "@/components/Filter";
import CompanyLogo from "@/components/CompanyLogo";
import Navber from "@/components/Navber";
import GreenHeader from "@/components/GreenHeader";

const page = () => {
  return (
    <div>
      <GreenHeader />
      <Navber />
      <Shop />
      <Filter />
      <CompanyLogo />
      <FooterHerder />
      <Footer />
      <ShopList />
      
    </div>
  );
};

export default page;
