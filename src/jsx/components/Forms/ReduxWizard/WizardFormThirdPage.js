import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select className="form-control" {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group mb-3">
				<label className="font-w600">Favorite Color</label>
				<Field name="favoriteColor" component={renderColorSelector} />
			</div>
			<div className="mt-2 mb-2">
				  <Field
					name="employed"
					id="employed"
					component="input"
					type="checkbox"
				  />
					<label className="ms-2 " htmlFor="employed">You are employed</label>
			</div>
			<div className="form-group mb-3">
				<label className="font-w600">Address</label>
				<div>
					<Field name="notes" className="form-control" component="textarea" placeholder="write here ......" rows={4}/>
				</div>
			</div>
			<div>
				<button type="button" className="previous btn btn-secondary me-2" onClick={previousPage}>
					Previous
				</button>
				<button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
			</div>
		</form>
	);
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);