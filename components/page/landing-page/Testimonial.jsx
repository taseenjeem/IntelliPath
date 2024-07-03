import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const getTestimonials = async () => {
  return import("/database/json/testimonials.json").then(
    (module) => module.default
  );
};

const Testimonial = async () => {
  const feedbackData = await getTestimonials();

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

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {feedbackData.map((item) => (
            <div
              key={item.date}
              className="aspect-auto card card-compact card-body bg-base-300 hover:shadow-xl border border-base-300 hover:border-primary duration-300"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt="Customer Avatar"
                  width={58}
                  height={58}
                  className="rounded-full"
                />
                <div>
                  <h6 className="text-lg font-medium">{item.name}</h6>
                  <p className="text-sm">
                    {item.role} - {item.course}
                  </p>
                  <span className="flex items-center gap-2 text-accent text-sm">
                    {item.rating} <FaStar />
                  </span>
                </div>
              </div>
              <p className="mt-3 italic">&quot;{item.review}&quot;</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
