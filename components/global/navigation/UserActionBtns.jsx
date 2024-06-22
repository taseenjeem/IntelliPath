"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserActionBtns = () => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={`/login`}
        className={`btn btn-primary ${
          pathName !== "/login" && "btn-outline"
        } btn-sm md:mx-1 mx-0 my-1 md:my-0`}
      >
        Log In
      </Link>
    </>
  );
};

export default UserActionBtns;
