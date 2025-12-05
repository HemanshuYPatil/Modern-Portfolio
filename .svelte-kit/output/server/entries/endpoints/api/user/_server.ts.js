import { c as client, u as urlFor } from "../../../../chunks/sanityClient.js";
async function GET() {
  try {
    const query = `*[_type == "developer"][0]`;
    const developerDetails = await client.fetch(query);
    if (!developerDetails) {
      return new Response(JSON.stringify({ error: "Developer not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404
      });
    }
    const responseData = {
      ...developerDetails,
      myself: developerDetails.bio,
      image: developerDetails.profileImage ? urlFor(developerDetails.profileImage).url() : null
    };
    return new Response(JSON.stringify(responseData), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data", message: error }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
export {
  GET
};
