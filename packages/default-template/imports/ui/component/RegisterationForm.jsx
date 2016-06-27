var registrationFormSchema = new SimpleSchema({
	firstName: {
		type: String,
		max: 60,
		label: "First name",
		placeholder: "John"
	},
	lastName: {
		type: String,
		max: 60,
		label: "Last name",
		placeholder: "Doe"
	},
	gender: {
		type: String,
		allowedValues: ["Male", "Female", "Other"],
		label: "Gender"
	},
	email: {
		type: String,
		max: 60,
		label: "Email"
	},
	password: {
		type: String,
		max: 60,
		min: 8,
		label: "Password"
	},
	termsAgreement: {
		type: Boolean
	}
});

RegisterationForm = React.createClass({
	_onSubmit(doc) {
		console.log(doc, function(error){
			if (error) {
				// Handle error
				console.log(error)
			}
		});
	},
	render() {
		return (
			<Form schema={registrationFormSchema} id="registration-form" onSubmit={this._onSubmit}>
				<TextInput name="firstName" layoutStyle="first-half" />
				<TextInput name="lastName" layoutStyle="second-half" />
				<Select name="gender" useAllowedValues />
				<TextInput name="email" />
				<TextInput name="password" type="password" />
				<Checkbox name="termsAgreement" />
				<SubmitButton label="Register" />
			</Form>
		)
	}
});