const getCountries = async () => {
  return import("/database/json/countries.json").then(
    (module) => module.default
  );
};

const ProfileInfoForm = async () => {
  const allCountries = await getCountries();

  return (
    <>
      <div className="bg-base-300 card card-compact mt-5 md:mt-16">
        <form action="" className="card-body">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Full Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered"
                defaultValue={`Md. Ta-Seen Fuad Jeem`}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="username">
                <span className="label-text">Username</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="input input-bordered"
                defaultValue={`taseenjeem`}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="gender">
                <span className="label-text">Gender</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="select select-bordered"
              >
                <option disabled selected>
                  Select your gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="birthDate">
                <span className="label-text">Date of birth</span>
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="country">
                <span className="label-text">Your Country</span>
              </label>
              <select
                id="country"
                name="country"
                className="select select-bordered "
              >
                <option selected>Please select your country</option>
                {allCountries.map((item) => (
                  <option key={item.code}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Your Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered"
                defaultValue={`mdtaseenfuad@gmail.com`}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="phone">
                <span className="label-text">Your Phone Number</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                min={0}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="address">
                <span className="label-text">Your Address</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                min={0}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary btn-outline">
              Save Information
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfoForm;
