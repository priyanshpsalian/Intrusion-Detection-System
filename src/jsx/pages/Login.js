import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

// image
//import logo from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";

function Login (props) {
  const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');

    const dispatch = useDispatch();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, props.history));
    }

  return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
						{/* <svg className="logo-abbr me-3" width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
							<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="#1362FC"/>
							<circle cx="42" cy="19" r="10" fill="white"/>
							<circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB"/>
							<circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC"/>
							<circle className="rect-primary-rect-1" cx="5.5" cy="1.5" r="16.5" stroke="white" stroke-opacity="0.66" stroke-width="2"/>
							<path d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818" stroke="white" stroke-width="21" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							<defs>
							<clipPath id="clip0">
							<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white"/>
							</clipPath>
							</defs>
						</svg> */}
						<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="216.000000pt" height="150.000000pt" viewBox="0 0 216.000000 150.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,233.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M969 1473 l-96 -25 -7 -66 c-3 -37 -6 -109 -6 -161 0 -134 17 -166
123 -231 45 -28 88 -50 97 -50 8 0 51 21 94 48 111 66 126 96 126 246 0 61 -3
134 -6 163 l-7 51 -103 26 c-57 14 -107 26 -111 25 -4 0 -51 -12 -104 -26z
m261 -168 c15 -18 9 -27 -94 -128 l-69 -69 -68 68 c-65 64 -68 69 -52 86 16
18 19 17 68 -32 l51 -50 69 70 c38 39 72 70 76 70 4 0 12 -7 19 -15z"/>
</g>
</svg>
					</div>
					<h2>IntruNet</h2>
					<h3 className="mb-2">Welcome back!</h3>
					<p>Your Security,Our Goal! <br /></p>
				</div>
				<div className="aside-image" style={{backgroundImage:"url(" + loginbg + ")"}}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">
									{props.errorMessage && (
										<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
											{props.errorMessage}
										</div>
									)}
									{props.successMessage && (
										<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
											{props.successMessage}
										</div>
									)}
									<form onSubmit={onLogin}  className="form-validate">
										<h3 className="text-center mb-4 text-black">Sign in your account</h3>
										<div className="form-group mb-3">
											<label className="mb-1"  htmlFor="val-email"><strong>Email</strong></label>
											<div>
												<input type="email" className="form-control"
													value={email}
												   onChange={(e) => setEmail(e.target.value)}
												   placeholder="Type Your Email Address"
												/>
											</div>
											{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
										</div>
										<div className="form-group mb-3">
											<label className="mb-1"><strong>Password</strong></label>
											<input
											  type="password"
											  className="form-control"
											  value={password}
											  placeholder="Type Your Password"
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
											{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
											   <div className="custom-control custom-checkbox ml-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button type="submit" className="btn btn-primary btn-block">
												Sign In
											</button>
										</div>
									</form>
									<div className="new-account mt-3">
										<p>Don't have an account? <Link className="text-primary" to="./page-register">Sign up</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		
  );
};

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);
