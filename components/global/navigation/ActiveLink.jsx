"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link
        className={`btn btn-sm font-semibold md:mx-1 mx-0 my-1 md:my-0 ${
          isActive ? "btn-primary" : "btn-ghost"
        }`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;
