"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link
        className={
          isActive
            ? "btn btn-accent btn-sm font-normal md:mx-1 mx-0 my-1 md:my-0"
            : "btn btn-ghost btn-sm font-normal md:mx-1 mx-0 my-1 md:my-0"
        }
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;
