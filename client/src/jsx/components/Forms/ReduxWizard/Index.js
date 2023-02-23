import React from "react";
import showResults from "./../ReduxForm/ShowResults";
import WizardForm from "./WizardForm";

function Index(){
	return(	
		<>
		
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Form Step</h4>
						</div>
						<div className="card-body">
							<WizardForm onSubmit={showResults} />
						</div>
					</div>	
				</div>
				<div className="col-md-4" >
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Result</h4>
						</div>
						<div className="card-body">
							<pre className="" id="ReduxFormJSON">
							</pre>
						</div>
					</div>
				</div> 
			</div>					
		</>
	)
}
export default Index;