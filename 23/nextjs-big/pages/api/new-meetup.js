import { MongoClient } from 'mongodb';

// api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;
		const { title, image, address, description } = data;

		const client = await MongoClient.connect(
			'mongodb+srv://kiran5120135:bJEvruNnMkZdz0hh@cluster0.of5j2ah.mongodb.net/?retryWrites=true&w=majority'
		);
		const db = client.db();

		const meetupsCOllection = db.collection('meetups');
		const result = await meetupsCOllection.insertOne(data);

		console.log(result);

		client.close();
		res.status(201).json({ message: 'Meetup inserted' });
	}
}

export default handler;
