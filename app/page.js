import Cta from "@/components/page/landing-page/CTA";
import CategoriesList from "@/components/page/landing-page/CategoriesList";
import Hero from "@/components/page/landing-page/Hero";
import Partners from "@/components/page/landing-page/Partners";
import Testimonial from "@/components/page/landing-page/Testimonial";
import TopCourses from "@/components/page/landing-page/TopCourses";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <CategoriesList />
      <TopCourses />
      <Testimonial />
      <Cta />
      <Partners />
    </>
  );
};

export default LandingPage;
