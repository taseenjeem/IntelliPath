import Image from "next/image";
import maleDp from "/public/assets/images/male.svg";

const UserAvatar = () => {
  return (
    <>
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-20 md:w-40 rounded-full ring ring-offset-2">
          <Image
            src={maleDp}
            width={160}
            height={160}
            alt="User profile avatar"
          />
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
