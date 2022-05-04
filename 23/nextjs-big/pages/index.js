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

function HomePage() {
	const [loadedMeetup, setLoadedMeetup] = useState([]);

	useEffect(() => {
		// send a http request and fetch data
		setLoadedMeetup(DUMMY_MEETUPS);
	}, []);

	return <MeetupList meetups={loadedMeetup} />;
}

export default HomePage;
