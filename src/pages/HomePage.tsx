import CarsSection from "../components/cars/CarsSection";
import FAQSection from "../components/faq/FAQSection";
import Hero from "../components/generalUI/Hero";
import ReviewsSection from "../components/reviews/ReviewsSection";
import StepsToRent from "../components/steps/StepsSection";
import React from "react";


const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="steps">
        <StepsToRent />
      </section>
      <section id="cars">
        <CarsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
    </div>
  );
};

export default React.memo(HomePage);
