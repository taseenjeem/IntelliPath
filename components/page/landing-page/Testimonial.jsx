import Link from "next/link";
import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  return (
    <>
      <section className="min-h-screen w-full wrapper mt-5 md:mt-20">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="lg:text-5xl text-3xl text-primary uppercase font-bold">
              Voices of Success
            </h2>

            <p className="mt-6">
              Hear from our vibrant community! Discover inspiring testimonials
              and reviews from students and instructors who have experienced the
              transformative power of IntelliPath. See how our courses have made
              a real difference in their educational journeys and career
              advancements.
            </p>
          </div>
          <Link href="/shop" className="mt-6 md:mt-0 btn btn-primary ">
            Join Our Community
          </Link>
        </div>
        <TestimonialSlide />
      </section>
    </>
  );
};

export default Testimonial;
