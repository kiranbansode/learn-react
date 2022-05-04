import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sunset_gondola_Basilica_Della_Salute_.png/1280px-Sunset_gondola_Basilica_Della_Salute_.png"
			title="A First Meetup"
			address="Some Street 5, Some City"
			description="The meetup Description"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				image:
					"https://upload.wikimedia.org/wikipedia/commons/,thumb/2/21/Sunset_gondola_Basilica_Della_Salute_.png/1280px-Sunset_gondola_Basilica_Della_Salute_.png",
				id: meetupId,
				title: "A First Meetup",
				address: "Some Street 5, Some City",
				description: "The meetup Description",
			},
		},
	};
}

export default MeetupDetails;
