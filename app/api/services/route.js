import Provider from "@models/Provider";
import connectDB from "@utils/index";

export const GET = async (req, res) => {
  await connectDB();
  try {
    const providers = await Provider.find();
    return new Response(JSON.stringify(providers), { status: 200 });
  } catch (error) {
    return new Response("Error fetching providers", { status: 500 });
  }
};
