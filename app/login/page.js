import LoginForm from "@/components/page/login-page/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="hero custom-min-h bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome Back!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
