import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://hemanshuypatil:UnxbhusSxbO7f5IL@cluster0.gp49h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);


export async function GET() {
    try {
        await client.connect();
        const database = client.db('Portfolio-Data');
        const collection = database.collection('work');

        const workItems = await collection.find({}).toArray();

        return new Response(JSON.stringify(workItems), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error); // Log the error to inspect the problem
        return new Response(JSON.stringify({ error: 'Failed to fetch data', message: error }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    } finally {
        await client.close();
    }
}
