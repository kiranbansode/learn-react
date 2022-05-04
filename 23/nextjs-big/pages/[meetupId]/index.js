import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
	return (
		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		'mongodb+srv://kiran5120135:bJEvruNnMkZdz0hh@cluster0.of5j2ah.mongodb.net/?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCOllection = db.collection('meetups');

	const meetups = await meetupsCOllection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: false,
		paths: meetups.map(({ _id }) => ({
			params: {
				meetupId: _id.toString(),
			},
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup
	const meetupId = context.params.meetupId;
	const client = await MongoClient.connect(
		'mongodb+srv://kiran5120135:bJEvruNnMkZdz0hh@cluster0.of5j2ah.mongodb.net/?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCOllection = db.collection('meetups');

	const meetups = await meetupsCOllection.find({}, { _id: 1 }).toArray();

	const { _id, ...otherData } = await meetupsCOllection.findOne({
		_id: new ObjectId(meetupId),
	});

	client.close();

	return {
		props: {
			meetupData: {
				id: _id.toString(),
				...otherData,
			},
		},
	};
}

export default MeetupDetails;
