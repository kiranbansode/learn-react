import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
	const data = useLoaderData();
	const { events } = data;

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	return (
		<>
			<EventsList events={events} />
		</>
	);
}

export default EventsPage;

export async function loader() {
	const response = await fetch("http://localhost:8080/events12");

	if (!response.ok) {
		// return { isError: true, message: "Could not fetch events." };
		throw { message: "Could not fetch events." };
		// ...
	} else {
		// const resData = await response.json();
		// const res = new Response(resData, { status: 201 });
		return response;
	}
}
