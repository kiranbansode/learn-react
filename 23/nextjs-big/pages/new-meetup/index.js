import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp() {
	function addMeetupHandler(enteredMeetupData) {
		console.log(enteredMeetupData);
	}

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUp;
