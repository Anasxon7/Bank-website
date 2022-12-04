import React from "react";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Stats from "./assets/components/Stats";
import Business from "./assets/components/Business";
import Biling from "./assets/components/Biling";
import CardDeal from "./assets/components/CardDeal";
import Testimonials from "./assets/components/Testimonials";
import Clients from "./assets/components/Clients";
import CTA from "./assets/components/CTA";
import Footer from "./assets/components/Footer";

import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Biling />
        <CardDeal  />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
);

export default App;
