import { c as client } from "../../../../chunks/sanityClient.js";
async function GET() {
  try {
    const query = `*[_type == "experience"] | order(duration desc) {
            role,
            company,
            duration,
            description
        }`;
    const experience = await client.fetch(query);
    return new Response(JSON.stringify(experience), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    console.error("Error fetching experience from Sanity:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch experience", message: error }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
}
export {
  GET
};
