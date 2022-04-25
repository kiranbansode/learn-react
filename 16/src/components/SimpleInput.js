import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredEmailIsValid = enteredEmail.includes("@");
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		console.log(enteredEmail, enteredName);

		// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

		resetNameInput();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control ";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>

			<div className={nameInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="text"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className="error-text">Email must contain @</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
