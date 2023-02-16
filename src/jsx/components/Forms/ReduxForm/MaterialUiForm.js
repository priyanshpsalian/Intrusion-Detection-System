import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import asyncValidate from './AsyncValidate';
import validate from './Validate';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
	className="input-field-redux"
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const MaterialUiForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div className="validate-redux-form row">
				<div className="col-sm-6">
					<Field name="firstName" className="input-field-redux" component={renderTextField} label="First Name" />
				</div>
				<div className="col-sm-6 col-lg-12 col-xl-6">
					<Field name="lastName" className="input-field-redux" component={renderTextField} label="Last Name" />
				</div>
				<div className="col-sm-6 col-lg-12 col-xl-6">
					<Field name="email" className="input-field-redux" component={renderTextField} label="Email" />
				</div>
				<div className="col-sm-6 col-lg-12 col-xl-6 mt-5">
					<Field name="sex" className="input-field-redux d-flex" component={renderRadioGroup} > 
						<RadioButton value="male" label="male" />
						<RadioButton value="female" label="female" />
					</Field>
				</div>
				<div className="col-sm-12 col-lg-12 col-xl-6 mb-4">
					<Field name="favoriteColor" className="input-field-redux" component={renderSelectField} label="Favorite Color">
						<MenuItem value="ff0000" primaryText="Red" />
						<MenuItem value="00ff00" primaryText="Green" />
						<MenuItem value="0000ff" primaryText="Blue" />
					</Field>
				</div>
				<div className="col-sm-12 mt-2 mb-2" >
					<Field name="employed" className="input-field-redux" component={renderCheckbox} label="I agree all statements in terms of service" />
				</div>
				<div className="col-sm-12 mb-2">
					<Field
						className="input-field-redux"
						name="notes" component={renderTextField}
						label="Notes" multiLine={true} rows={2}
					/>
				</div>
				<div className="col-sm-12 text-center">
					<button className="btn btn-primary me-1" type="submit" disabled={pristine || submitting}>Submit</button>
					<button className="btn btn-light ms-1" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
				</div>
			</div>	
		</form>
	);
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(MaterialUiForm);