import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name='description'
					content='Browse a huge list of highly active React meetups!'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from API
	const client = await MongoClient.connect(
		'mongodb+srv://kiran5120135:bJEvruNnMkZdz0hh@cluster0.of5j2ah.mongodb.net/?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCOllection = db.collection('meetups');

	const meetups = await meetupsCOllection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map(({ _id, ...otherData }) => ({
				id: _id.toString(),
				...otherData,
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
