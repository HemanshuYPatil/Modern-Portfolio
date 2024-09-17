import { MongoClient } from 'mongodb';

// Use environment variables for sensitive data
const uri =  "mongodb+srv://hemanshuypatil:UnxbhusSxbO7f5IL@cluster0.gp49h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
    if (cachedClient) {
        return cachedClient;
    }
    try {
        await client.connect();
        cachedClient = client;
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to database');
    }
}

export async function GET() {
    try {
        const client = await connectToDatabase();
        const database = client.db('Portfolio-Data');
        const collection = database.collection('work');

        const workItems = await collection.find({}).toArray();

        return new Response(JSON.stringify(workItems), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data', message: error }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500,
        });
    }
}
