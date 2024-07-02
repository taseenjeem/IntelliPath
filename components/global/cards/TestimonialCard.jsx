import { FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <>
      <div className="bg-base-300 p-4 shadow-sm sm:p-8 rounded-lg border border-accent">
        <span className="flex gap-1 text-accent">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <h3 className="text-2xl font-semibold my-4">John Duo</h3>
        <p className="italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          facere ea voluptatem, nulla, explicabo tempora perferendis repellendus
          qui culpa maiores aut autem debitis eum voluptates a reprehenderit
          porro praesentium cumque!
        </p>
        <p className="mt-4">- USA</p>
      </div>
    </>
  );
};

export default TestimonialCard;
