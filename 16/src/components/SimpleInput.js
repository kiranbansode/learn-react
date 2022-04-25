import { useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === "") {
			return;
		}

		console.log(enteredName);
		console.log(nameInputRef.current.value);

		// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
		setEnteredName("");
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					ref={nameInputRef}
					value={enteredName}
				/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;