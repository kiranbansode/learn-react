import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sunset_gondola_Basilica_Della_Salute_.png/1280px-Sunset_gondola_Basilica_Della_Salute_.png",
		address: "Some address 5,12345, Some City",
		description: "This is a first meetup!",
	},

	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sunset_gondola_Basilica_Della_Salute_.png/1280px-Sunset_gondola_Basilica_Della_Salute_.png",
		address: "Some address 5,12345, Some City",
		description: "This is a Second meetup!",
	},

	{
		id: "m3",
		title: "A third Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sunset_gondola_Basilica_Della_Salute_.png/1280px-Sunset_gondola_Basilica_Della_Salute_.png",
		address: "Some address 5,12345, Some City",
		description: "This is a third meetup!",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
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
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
}

export default HomePage;