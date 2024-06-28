import Link from "next/link";

const CategoriesList = () => {
  return (
    <>
      <section className="min-h-screen wrapper">
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
      </section>
    </>
  );
};

export default CategoriesList;
