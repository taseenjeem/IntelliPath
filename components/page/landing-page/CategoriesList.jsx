import CategoryCard from "@/components/global/cards/CategoryCard";
import Link from "next/link";

const CategoriesList = ({ allCategories }) => {
  return (
    <>
      <section className="min-h-screen w-full wrapper my-5 md:my-20">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="lg:text-5xl text-3xl text-accent uppercase font-bold">
              Discover Our Learning Categories
            </h2>

            <p className="mt-6">
              Dive into a wide range of subjects designed to expand your
              knowledge and skills. Whether you&apos;re looking to advance your
              career, develop new hobbies, or gain expertise in a specific
              field, our curated categories have something for everyone. Start
              exploring today and find the perfect path for your educational
              journey with IntelliPath.
            </p>
          </div>
          <Link href="/shop" className="mt-6 md:mt-0 btn btn-accent">
            See All Categories
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 w-full my-5 md:my-10">
          {allCategories.map((item) => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoriesList;