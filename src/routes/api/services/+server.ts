import { client, urlFor } from '$lib/sanityClient';

export async function GET() {
    try {
        const query = `*[_type == "service"]{
            title,
            description,
            icon
        }`;
        const services = await client.fetch(query);

        const mappedServices = services.map((item: any) => ({
            title: item.title,
            description: item.description,
            iconUrl: item.icon ? urlFor(item.icon).url() : null
        }));

        return new Response(JSON.stringify(mappedServices), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching services from Sanity:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch services', message: error }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}
