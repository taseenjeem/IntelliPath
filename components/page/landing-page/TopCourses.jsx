import Link from "next/link";

const TopCourses = () => {
  return (
    <section className="min-h-screen w-full wrapper mt-5 md:mt-20">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="lg:text-5xl text-3xl text-primary uppercase font-bold">
            Explore Our Top Courses
          </h2>

          <p className="mt-6">
            Discover the most popular courses that are transforming lives.
            Whether you&apos;re looking to boost your career, learn a new skill,
            or pursue a passion, our top-rated courses provide the knowledge and
            expertise you need to succeed. Start learning today with
            IntelliPath.
          </p>
        </div>
        <Link href="/shop" className="mt-6 md:mt-0 btn btn-primary ">
          See All Courses
        </Link>
      </div>
    </section>
  );
};

export default TopCourses;
