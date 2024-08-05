"use client";

const LogoutModalBtn = () => {
  return (
    <button onClick={() => document.getElementById("logout_modal").showModal()}>
      Log out
    </button>
  );
};

export default LogoutModalBtn;
