import student from "/public/assets/images/student.png";
import instructor from "/public/assets/images/instructor.png";
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="w-full wrapper mt-7 md:mt-28">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="lg:text-5xl text-3xl text-primary uppercase font-bold">
            Shape Your Future with IntelliPath
          </h2>

          <p className="mt-6">
            Whether you're passionate about teaching or eager to learn,
            IntelliPath offers you the perfect platform to grow. Become an
            instructor and share your expertise with a global audience, or
            embark on a learning journey to unlock new skills and opportunities.
            Join our community and start shaping your future today!
          </p>
        </div>
        <Link href="/shop" className="mt-6 md:mt-0 btn btn-primary ">
          Read Documentation
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-5 md:mt-10">
        <div className="bg-base-300 card card-compact card-body hover:shadow-xl border border-base-300 hover:border-primary duration-300">
          <div className="flex flex-col md:flex-row items-center">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Become an instructor</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam cupiditate voluptatibus dolor, reiciendis eos
                repudiandae perspiciatis nisi quia odio!
              </p>
              <Link href={`#`} className="btn btn-primary btn-outline">
                Become Instructor
              </Link>
            </div>
            <Image
              src={instructor}
              alt="Instructor Illustration"
              className="max-w-60 w-full drop-shadow-xl"
            />
          </div>
        </div>
        <div className="bg-base-300 card card-compact card-body hover:shadow-xl border border-base-300 hover:border-primary duration-300">
          <div className="flex flex-col md:flex-row items-center">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">Become an learner</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam cupiditate voluptatibus dolor, reiciendis eos
                repudiandae perspiciatis nisi quia odio!
              </p>
              <Link href={`#`} className="btn btn-primary btn-outline">
                Become Learner
              </Link>
            </div>
            <Image
              src={student}
              alt="Instructor Illustration"
              className="max-w-60 w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
