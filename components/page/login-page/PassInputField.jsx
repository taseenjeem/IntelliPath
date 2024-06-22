const PassInputField = ({ register, errors }) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="password" className="label">
          <span
            className={`label-text ${
              errors?.password || errors?.root?.random?.message
                ? "text-error"
                : ""
            }`}
          >
            Password
          </span>
        </label>
        <input
          {...register("password", {
            required: "Your password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a symbol",
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="aBcD@123"
          className={`input input-bordered ${
            errors?.password || errors?.root?.random?.message
              ? "input-error"
              : ""
          }`}
        />
        {errors?.password && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors.password.message}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PassInputField;
