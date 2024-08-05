const LogoutModal = () => {
  return (
    <>
      <dialog id="logout_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">
            Are you sure you want to logout?
          </h3>
          <p className="py-4">
            Your learning journey will be paused, but you can always resume
            anytime.
          </p>
          <div className="flex justify-end space-x-4">
            <button className="btn btn-neutral">Log out</button>
            <button
              onClick={() => document.getElementById("logout_modal").close()}
              className="btn btn-neutral"
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LogoutModal;
