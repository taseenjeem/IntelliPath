"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserActionBtns = () => {
  const pathName = usePathname();
  const isActive = pathName.includes("/auth");

  return (
    <>
      <Link
        href={`/auth/login`}
        className={`btn ${
          isActive ? "btn-primary" : "btn-outline btn-primary"
        } btn-sm md:mx-1 mx-0 my-1 md:my-0`}
      >
        Log In
      </Link>
    </>
  );
};

export default UserActionBtns;
