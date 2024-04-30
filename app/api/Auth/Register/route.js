import User from "@models/User";
import Provider from "@models/Provider";
import { connectToDB } from "@utils";
import { hash } from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const body = await req.json();
    console.log(body)

    const {
      firstName,
      lastName,
      email,
      mobile,
      password,
      location,
      profilePhoto,
      businessName,
      businessCategory,
      businessPhoto,
      role,
    } = body;

    let existingUser = "",
      existingProvider = "";

    if (role === "user") {
      existingUser = await User.findOne({ email });
    } else {
      existingProvider = await Provider.findOne({ email });
    }
    console.log(existingUser, existingProvider);

    if (existingUser) {
      return new Response("User already exists", {
        status: 400,
      });
    }
    if (existingProvider) {
      return new Response("Provider already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);
    let newUser = "",
      newProvider = "";
    if (role === "user") {
      newUser = new User({
        firstName,
        lastName,
        email,
        mobile,
        location,
        password: hashedPassword,
        profilePhoto,
        role,
      });
      await newUser.save();
      console.log("New User created");
    } else {
      newProvider = new Provider({
        firstName,
        lastName,
        email,
        mobile,
        location,
        password: hashedPassword,
        profilePhoto,
        businessName,
        businessCategory,
        businessPhoto,
        role,
      });
      await newProvider.save();
      console.log("New Provider created");
    }

    return new Response(
      { status: 200 },
      { message: "User / Provider registered successfully" }
    );
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new User / Provider", {
      status: 500,
    });
  }
};
