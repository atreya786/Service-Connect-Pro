"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
        toast.success("Registered Successfully");
      }

      if (res.error) {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        toast.success("Logged In Successfully");
        router.push("/Home");
      }

      if (res.error) {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className=" max-w-md mx-auto text-center p-3 rounded-xl shadow-2xl">
      <div className="flex items-center justify-center mb-4">
        {/* <img src="/assets/logo.png" alt="logo" className="" /> */}
        <p className="text-3xl font-bold">Service Connect Pro</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {type === "register" && (
          <>
            <div className="flex space-x-4">
              <div className="flex-grow">
                <input
                  defaultValue=""
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="input-field p-2 rounded"
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <div className="flex-grow">
                <input
                  defaultValue=""
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="input-field p-2 rounded"
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
            <div>
              <input
                defaultValue=""
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                type="tel"
                placeholder="Mobile Number"
                className="input-field p-2 rounded"
              />
              {errors.mobile && (
                <p className="text-red-500">{errors.mobile.message}</p>
              )}
            </div>
            <div>
              <input
                defaultValue=""
                {...register("location", {
                  required: "Location is required",
                })}
                type="text"
                placeholder="Location"
                className="input-field p-2 rounded"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
          </>
        )}

        <div>
          <input
            defaultValue=""
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            className="input-field p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            defaultValue=""
            {...register("password", {
              required: "Password is required",
              validate: (value) => {
                if (
                  value.length < 5 ||
                  !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                ) {
                  return "Password must be at least 5 characters and contain at least one special character";
                }
              },
            })}
            type="password"
            placeholder="Password"
            className="input-field p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          className="p-2 bg-blue-500 hover:bg-blue-400 rounded font-bold"
          type="submit"
        >
          {type === "register" ? "Join Free" : "Enjoy your services"}
        </button>
      </form>

      {type === "register" ? (
        <Link href="/" className="text-center block mt-2">
          <p>Already have an account? Sign In Here</p>
        </Link>
      ) : (
        <Link href="/Register" className="text-center block mt-2">
          <p>Don't have an account? Register Here</p>
        </Link>
      )}
    </div>
  );
};

export default Form;
