import CategoriesList from "@/components/page/landing-page/CategoriesList";
import Hero from "@/components/page/landing-page/Hero";

const categories = async () => {
  return import("/database/json/category-list.json").then(
    (module) => module.default
  );
};

const LandingPage = async () => {
  const allCategories = await categories();

  return (
    <>
      <Hero />
      <CategoriesList allCategories={allCategories} />
    </>
  );
};

export default LandingPage;
