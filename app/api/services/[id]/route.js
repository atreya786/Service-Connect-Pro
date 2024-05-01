import Provider from "@models/Provider";
import connectDB from "@utils/index";

export const GET = async (req, res) => {
  await connectDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  try {
    const providerDetails = await Provider.findById(id);
    return new Response(JSON.stringify(providerDetails), { status: 200 });
  } catch (error) {
    console.error("Error fetching provider:", error);
    return new Response("Error fetching provider", { status: 500 });
  }
};
