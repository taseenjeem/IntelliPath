import Image from "next/image";
import Link from "next/link";
import LogoutModalBtn from "./LogOutModal";

const ProfileDropdown = () => {
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="avatar">
          <div className="ring-primary ring-offset-base-100 size-7 rounded-full ring ring-offset-2">
            <Image
              width={28}
              height={28}
              alt={`Profile button`}
              src="https://randomuser.me/api/portraits/men/86.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow border border-primary mt-5"
        >
          <li>
            <Link href={``}>My Account</Link>
          </li>
          <li>
            <LogoutModalBtn />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileDropdown;
