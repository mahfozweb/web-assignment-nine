import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => {
        event.target.reset();
        toast.success("successfully reset password");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log(email);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse md:-mt-[180px]">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Reset Password</h1>
              </div>
              <form onSubmit={handleResetPassword}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <button className="btn btn-neutral mt-4">
                    Reset Password
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
