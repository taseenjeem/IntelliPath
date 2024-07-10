import student from "/public/assets/images/student.png";
import instructor from "/public/assets/images/instructor.png";
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="min-h-screen w-full wrapper mt-5 md:mt-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-base-300 card card-compact card-body hover:shadow-xl border border-base-300 hover:border-primary duration-300">
          <div className="flex items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Become an instructor</h3>
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
              className="max-w-60 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
