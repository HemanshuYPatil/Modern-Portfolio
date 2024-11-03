import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://hemanshuypatil:UnxbhusSxbO7f5IL@cluster0.gp49h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export async function GET() {
    try {
        await client.connect();
        const database = client.db('Portfolio-Data');
        const collection = database.collection('img');

        // Fetch the name, position, and place from the developer collection
        const developerDetails = await collection.findOne({}, { projection: { image: 1 } });

        if (!developerDetails) {
            return new Response(JSON.stringify({ error: 'Developer not found' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 404,
            });
        }

        return new Response(JSON.stringify(developerDetails), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data', message: error}), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    } finally {
        await client.close(); // Close the connection after the operation is complete
    }
}
