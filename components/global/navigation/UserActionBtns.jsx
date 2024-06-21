import Link from "next/link";

const UserActionBtns = () => {
  return (
    <>
      <Link
        href={`/login`}
        className="btn btn-primary btn-sm md:mx-1 mx-0 my-1 md:my-0"
      >
        Log In
      </Link>
    </>
  );
};

export default UserActionBtns;
