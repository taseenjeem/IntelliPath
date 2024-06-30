"use client";
import { RiCloseFill } from "react-icons/ri";

const CloseBtn = () => {
  const closeDrawer = () => {
    document.getElementById("menu-contents").checked = false;
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={closeDrawer}
          className="btn btn-sm btn-circle btn-outline"
        >
          <RiCloseFill className="size-6" />
        </button>
      </div>
    </>
  );
};

export default CloseBtn;
