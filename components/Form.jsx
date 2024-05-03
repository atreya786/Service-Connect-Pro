"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useState } from "react";
import Loader from "./Loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AuthForm = ({ type }) => {
  const schema = z.object({
    firstName: z.string().min(3, {
      message: "First Name must be at least 3 characters",
    }),
    lastName: z.string().min(3, {
      message: "Last Name must be at least 3 characters",
    }),
    mobile: z
      .string()
      .min(10, {
        message: "Mobile number must be 10 characters",
      })
      .max(10)
      .regex(/^\d+$/),
    location: z.string().min(5, {
      message: "Location must be at least 5 characters",
    }),
    email: z.string().email({
      message: "Invalid email",
    }),
    password: z
      .string()
      .min(6, {
        message:
          "Password must be at least 6 characters and contain at least one special character",
      })
      .includes(z.string().regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)),
    profilePhoto: z.string({ message: "Profile Photo is required" }),
    businessName: z.string().min(3, {
      message: "Business Name must be at least 3 characters",
    }),
    businessCategory: z.string().min(3, {
      message: "Business Category must be at least 3 characters",
    }),
    businessPhoto: z.string({ message: "Business Photo is required" }),
    role: z.string({ message: "Role is required" }),
    businessDescription: z.string().min(10, {
      message: "Business Description must be at least 10 characters",
    }),
  });

  const [role, setRole] = useState("user");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [businessPhotoUrl, setBusinessPhotoUrl] = useState("");

  const { register, control, handleSubmit } = useForm(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        mobile: "",
        location: "",
        email: "",
        password: "",
        profilePhoto: "",
        businessName: "",
        businessCategory: "",
        businessPhoto: "",
        businessDescription: "",
        role: "",
      },
    },
    {
      resolver: zodResolver(schema),
    }
  );

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  if (loading) return <Loader />;

  const onFormSubmit2 = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}`
    );
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setBusinessPhotoUrl(data.secure_url);
      toast.success("Business Photo Uploaded Successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}`
    );
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setProfilePhotoUrl(data.secure_url);
      toast.success("Profile Photo Uploaded Successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          profilePhoto: profilePhotoUrl,
          businessPhoto: businessPhotoUrl,
          role: role,
        }),
      });

      if (res.ok) {
        setProfilePhotoUrl("");
        toast.success("Registered Successfully");
        router.push("/");
        setLoading(false);
      }

      if (res.error) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push("/Home");
        toast.success("Logged In Successfully");
        setLoading(false);
      }

      if (res.error) {
        toast.error("Invalid email or password");
        setLoading(false);
      }
    }
  };

  return (
    <div className="mx-auto text-center p-3 rounded-xl">
      <div className="flex items-center justify-center py-2 gap-3">
        <Image src={logo} alt="logo" width={100} height={100} />
        <h1 className="text-3xl font-bold">Service Connect Pro</h1>
      </div>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {type === "register" ? "Create a new account" : "Login here"}
          </CardTitle>
          <CardDescription>
            {type === "register"
              ? "Enter below details to create your account"
              : "Enter your email and password below to login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <form
              className="space-y-4 flex flex-col justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              {type === "register" && (
                <>
                  <FormField
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          <span className="text-xl">First Name - </span>
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            {...register("firstName")}
                            type="text"
                            placeholder="First Name"
                            className="p-2 rounded"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          <span className="text-xl">Last Name - </span>
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            {...register("lastName")}
                            type="text"
                            placeholder="Last Name"
                            className="input-field p-2 rounded"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="mobile"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          <span className="text-xl">Mobile - </span>
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            {...register("mobile")}
                            type="text"
                            placeholder="Mobile"
                            className="input-field p-2 rounded"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          <span className="text-xl">Location - </span>
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            {...register("location")}
                            type="text"
                            placeholder="Location"
                            className="input-field p-2 rounded"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="profilePhoto"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>
                          <span className="text-xl">Profile Photo - </span>
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            type="file"
                            className="input-field p-2 rounded"
                            onChange={onFormSubmit}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {role === "provider" && (
                    <>
                      <FormField
                        name="businessName"
                        control={control}
                        render={({ field }) => (
                          <FormItem>
                            <Label>
                              <span className="text-xl">Business Name - </span>
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                {...register("businessName")}
                                type="text"
                                placeholder="Business Name"
                                className="input-field p-2 rounded"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="businessCategory"
                        control={control}
                        render={({ field }) => (
                          <FormItem>
                            <Label>
                              <span className="text-xl">
                                Business Category -{" "}
                              </span>
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                {...register("businessCategory")}
                                type="text"
                                placeholder="Business Category"
                                className="input-field p-2 rounded"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="businessPhoto"
                        control={control}
                        render={({ field }) => (
                          <FormItem>
                            <Label>
                              <span className="text-xl">Business Photo - </span>
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                type="file"
                                className="input-field p-2 rounded"
                                onChange={onFormSubmit2}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="businessDescription"
                        control={control}
                        render={({ field }) => (
                          <FormItem>
                            <Label>
                              <span className="text-xl">
                                Business Description -{" "}
                              </span>
                            </Label>
                            <FormControl>
                              <Input
                                {...field}
                                {...register("businessDescription")}
                                type="file"
                                className="input-field p-2 rounded"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </>
              )}
              <>
                <FormField
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <Label>
                        <span className="text-xl">Email - </span>
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                          className="input-field p-2 rounded"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <Label>
                        <span className="text-xl">Password - </span>
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          {...register("password")}
                          type="password"
                          placeholder="Password"
                          className="input-field p-2 rounded"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {type === "register" && (
                  <RadioGroup
                    defaultValue="user"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="provider" id="provider" />
                      <Label htmlFor="r2">Service Provider</Label>
                    </div>
                  </RadioGroup>
                )}
              </>
              <div className="flex justify-center">
                <Button className="font-bold w-52" type="submit">
                  {type === "register" ? "Join Free" : "Enjoy your services"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {type === "register" ? (
            <div className="text-lg">
              <Link href="/">Already have an account? Sign In Here</Link>
            </div>
          ) : (
            <div className="text-lg">
              <Link href="/Register">
                Don&apos;t have an account? Register Here
              </Link>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
