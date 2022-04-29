import { useParams } from "react-router-dom";

function EventDetailsPage() {
	const param = useParams();

	return (
		<>
			<h1>EventDetailsPage</h1>
			<p>Event ID: {param.eventId}</p>
		</>
	);
}

export default EventDetailsPage;
