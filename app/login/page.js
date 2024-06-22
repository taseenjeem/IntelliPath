import SocialAuth from "@/components/global/social-auth/SocialAuth";
import LoginForm from "@/components/page/login-page/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="hero custom-min-h">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:text-left mb-5 md:mb-0">
            <h1 className="text-5xl text-center lg:text-left font-bold">
              Welcome Back!
            </h1>
            <p className="py-6 text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link className="btn btn-neutral text-left" href={`/register`}>
              Create a new account
            </Link>
          </div>
          <div className="card shrink-0 w-full max-w-lg bg-base-200">
            <LoginForm />
            <SocialAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
