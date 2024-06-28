import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/course-categories/${category.slug}`}>
      <div className="card w-full h-full card-compact bg-base-300 shadow-xl border border-accent hover:border-primary duration-500">
        <figure className="px-5 pt-5">
          <Image
            src={category.thumbnail}
            alt="Course Category"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-bold md:text-3xl">{category.title}</h2>
          <p className="hidden md:block">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
