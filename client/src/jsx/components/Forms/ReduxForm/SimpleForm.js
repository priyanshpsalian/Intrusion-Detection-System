import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name</label>
				<div>
					<Field name="firstName" component="input" type="text" placeholder="First Name" className="redux-form-input"/>
				</div>
			</div>
			<div>
				<label>Last Name</label>
				<div>
					<Field name="lastName" component="input" type="text" placeholder="Last Name" className="redux-form-input"/>
				</div>
			</div>
			<div>
				<label>Email</label>
				<div>
					<Field name="email" component="input" type="email" placeholder="Email" className="redux-form-input"/>
				</div>
			</div>
			<div>
				<label>Gender</label>
				<div className="">
					<label>
						<Field name="sex" component="input" type="radio" value="male" />
						{' '}
						Male
					</label>
					<label className="ml-2">
						<Field name="sex" component="input" type="radio" value="female" />
						{' '}
						Female
					</label>
				</div>
			</div>
			<div className="form-group">
				<div className="custom-control custom-checkbox ml-1">
					<Field name="employed" id="employed" component="input" type="checkbox" className="custom-control-input mr-2"/>
					<label className="custom-control-label" htmlFor="employed"> I agree all statements in terms of service</label>
				</div>
			</div>
			<div>
				<label>Notes</label>
				<div className="form-group">
					<Field name="notes" component="textarea" className="form-control" />
				</div>
			</div>
			<div>
				<button className="btn btn-primary mr-2" type="submit" disabled={pristine || submitting}>Submit</button>
				<button className="btn btn-light" type="button" disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);