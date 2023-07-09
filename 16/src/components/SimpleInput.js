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

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		console.log(enteredEmail, enteredName);

		// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control ";

	const emailInputClasses = emailInputHasError
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

			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="text"
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
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
