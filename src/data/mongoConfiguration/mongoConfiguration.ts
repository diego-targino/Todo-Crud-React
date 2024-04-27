import * as mongoDB from "mongodb";

async function ConectToDB(): Promise<mongoDB.Db> {
	const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGO_URI);
	await client.connect();

	return client.db(process.env.MONGO_DATABASE);
}

export async function GetCollecton(collectionName: string): Promise<mongoDB.Collection> {
	const db = await ConectToDB();
	const collection = db.collection(collectionName);
	return collection;
}