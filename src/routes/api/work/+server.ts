import { client, urlFor } from '$lib/sanityClient';

export async function GET() {
    try {
        const query = `*[_type == "project"]{
            _id,
            title,
            details,
            date,
            roles,
            links,
            coverImage,
            appScreenshot
        }`;
        const workItems = await client.fetch(query);
        console.log(`Fetched ${workItems.length} projects from Sanity`);

        const mappedItems = workItems.map((item: any) => ({
            id: item._id,
            title: item.title,
            details: item.details,
            date: item.date,
            roles: item.roles,
            links: item.links,
            coverImageUrl: item.coverImage ? urlFor(item.coverImage).url() : null,
            appScreenshotUrl: item.appScreenshot ? urlFor(item.appScreenshot).url() : null
        }));

        return new Response(JSON.stringify(mappedItems), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data', message: error }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}
