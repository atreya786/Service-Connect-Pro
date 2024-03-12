import User from "@models/User";
import { connectToDB } from "@utils";
import { hash } from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    console.log(req.body);

    const body = await req.json();

    const { firstName, lastName, email, mobile, password, location } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      location,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(
      JSON.stringify(newUser),
      { status: 200 },
      { message: "User registered successfully" }
    );
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
