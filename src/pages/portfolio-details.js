import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ProtfolioDetails from "@/components/protfolio-details";
import RelatedPortfolio from "@/components/related-portfolio";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const PortfolioDetailsPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Página de Detalhes do Portfólio">
          <HeaderOne />
          <PageBanner title="Detalhes do Portfólio" name="Portfólio" />
          <ProtfolioDetails />
          <RelatedPortfolio />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioDetailsPage;
