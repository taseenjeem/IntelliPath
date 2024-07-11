import Courses from "@/components/page/my-account-page/Courses";
import ProfileInfo from "@/components/page/my-account-page/ProfileInfo";

const MyAccountPage = () => {
  return (
    <section className="custom-min-h wrapper w-full">
      <h1 className="lg:text-4xl text-3xl text-primary uppercase font-semibold mt-5">
        My Profile
      </h1>
      <div role="tablist" className="tabs tabs-bordered w-full mt-5">
        <ProfileInfo />
        <Courses />
      </div>
    </section>
  );
};

export default MyAccountPage;
