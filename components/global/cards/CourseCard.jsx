import Image from "next/image";

const CourseCard = ({ courseDetails }) => {
  return (
    <div className="card card-compact bg-base-300 hover:shadow-xl border border-base-300 hover:border-primary duration-300">
      <figure className="w-full max-w-[358px] max-h-[202px] overflow-hidden">
        <Image
          src={courseDetails?.image}
          alt={`${courseDetails?.title} thumbnail`}
          width={358}
          height={202}
          className="w-full h-auto object-cover object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{courseDetails?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
