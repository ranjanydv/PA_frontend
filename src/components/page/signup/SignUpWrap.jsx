import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

import useLocalState from '../../utils/LocalState.jsx'
import url from '../../common/url.js'
import {useGlobalContext} from '../../../context.jsx'

function SignUpWrap() {
    const [openEye, setOpenEye] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {saveUser} = useGlobalContext()
    const {alert, showAlert, loading, setLoading, hideAlert} = useLocalState()
    const navigate = useNavigate()

    const handleEyeIcon = () => {
        setOpenEye(!openEye)
    }

    useEffect(() => {
        const fullName = `${firstName.trim()} ${lastName.trim()}`
        setName(fullName)
    }, [firstName, lastName])

    const handleSignUp = async (e) => {
        e.preventDefault()
        hideAlert()
        setLoading(true)
        const signUpUser = {name, email, password}
        try {
            await axios
                .post(`${url.base_api}auth/register`, signUpUser)
                .then((response) => {
                    console.log(response)
                    // setName('')
                    // setEmail('')
                    // setPassword('')
                    console.log(response['headers'])
                    showAlert({
                        text: `Welcome, ${response.data.user.name}. Welcome to Premiere Auctioneers`,
                        type: 'success',
                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1200)
                    setLoading(false)
                    console.log(
                        '🚀 ~ file: SignUpWrap.jsx:66 ~ .then ~ response.data.user:',
                        response.data.user
                    )
                    saveUser(response.data.user)
                })
                .catch((error) => {
                    console.error(error.response)
                    setLoading(false)
                    showAlert({text: error.response.data.msg})
                })
        } catch (error) {
            console.error(error.response.data.msg)
            showAlert({text: error.response.data.msg})
            setLoading(false)
        }
    }

    return (
        <>
            {alert.show && (
                <div
                    className={`alert alert-${alert.type} login-section text-center`}
                    style={{
                        width: '50%',
                        left: '25%',
                        position: 'absolute',
                        zIndex: '1000',
                        marginTop: '1rem',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {alert.text}
                </div>
            )}
            <>
                <div className="signup-section pt-80 pb-120">
                    <img
                        alt="images"
                        src={'/images/bg/section-bg.png'}
                        className="section-bg-top"
                    />
                    <img
                        alt="images"
                        src={'/images/bg/section-bg.png'}
                        className="section-bg-bottom"
                    />
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div
                                    className="form-wrapper wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="form-title">
                                        <h3>Sign Up</h3>
                                        <p>
                                            Do you already have an account?{' '}
                                            <Link
                                                to={`/login`}
                                                onClick={() =>
                                                    window.scrollTo({top: 0, behavior: 'smooth'})
                                                }
                                            >
                                                Log in here
                                            </Link>
                                        </p>
                                    </div>
                                    <form
                                        className="w-100 mb-5"
                                        method="POST"
                                        onSubmit={(e) => handleSignUp(e)}
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-inner">
                                                    <label>First Name *</label>
                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        value={firstName}
                                                        onChange={(e) => {
                                                            setFirstName(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner">
                                                    <label>Last Name *</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Last Name"
                                                        value={lastName}
                                                        onChange={(e) => {
                                                            setLastName(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner">
                                                    <label>Enter Your Email *</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Your Email"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner">
                                                    <label>Password *</label>
                                                    <input
                                                        type={openEye ? 'password' : 'text'}
                                                        name="password"
                                                        id="password"
                                                        placeholder="Create A Password"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(e.target.value)
                                                        }}
                                                    />
                                                    <i
                                                        className={
                                                            openEye
                                                                ? 'bi bi-eye-slash'
                                                                : 'bi bi-eye-slash bi-eye'
                                                        }
                                                        onClick={handleEyeIcon}
                                                        id="togglePassword"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div
                                                    className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                    <div className="form-group user-select-none">
                                                        <input type="checkbox" id="html"/>
                                                        <label htmlFor="html">
                                                            I agree to the Terms &amp; Policy
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="account-btn">
                                            {loading ? 'Loading...' : 'Create Account'}
                                        </button>
                                    </form>
                                    <div className="form-poicy-area">
                                        <p>
                                            By clicking the "Create Account" button, you create a
                                            Premiere Auctioneers account, and you agree to Premiere
                                            Auctioneers's <Link to={'#'}>Terms &amp; Conditions</Link>{' '}
                                            &amp; <Link to={'#'}>Privacy Policy.</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            {/* <div className="login-section pt-80 pb-120">
				<img
					alt="images"
					src="/images/bg/section-bg.png"
					className="img-fluid section-bg-top"
				/>
				<img
					alt="images"
					src="/images/bg/section-bg.png"
					className="img-fluid section-bg-bottom"
				/>
				<div className="container">
					<div className="row d-flex justify-content-center g-4">
						<div className="col-xl-6 col-lg-8 col-md-10">
							<div
								className="form-wrapper wow fadeInUp"
								data-wow-duration="1.5s"
								data-wow-delay=".2s"
							>
								<div className="form-title">
									<h3>Log In</h3>
									<p>
										New Member?{' '}
										<Link
											to={`/login`}
											onClick={() =>
												window.scrollTo({ top: 0, behavior: 'smooth' })
											}
										>
											SignUp here
										</Link>
									</p>
								</div>
								<form className="w-100 mb-4" method="POST">
									<div className="row">
										<div className="col-12">
											<div className="form-inner">
												<label htmlFor={'email'}>Enter Your Email *</label>
												<input
													type="email"
													id="email"
													placeholder="Enter Your Email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-inner">
												<label htmlFor={'password'}>Password *</label>
												<input
													type={openEye ? 'password' : 'text'}
													name="password"
													id="password"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												<i
													className={
														openEye
															? 'bi bi-eye-slash'
															: 'bi bi-eye-slash bi-eye'
													}
													id="togglePassword"
													onClick={handleEyeIcon}
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
												<div className="form-group">
													<input type="checkbox" id="html" />
													<label htmlFor="html">
														I agree to the{' '}
														<Link to={'#'}>Terms &amp; Policy</Link>
													</label>
												</div>
												<Link to={'#'} className="forgot-pass">
													Forgotten Password
												</Link>
											</div>
										</div>
									</div>
									<button
										className="account-btn"
										type={'submit'}
										onClick={(event) => {
											handleLogin(event)
										}}
									>
										{loading ? 'Loading...' : 'Log in'}
									</button>
								</form>
								<div className="form-poicy-area">
									<p>
										By clicking the "signup" button, you create a Premiere
										Auctioneers account, and you agree to Premiere Auctioneers's{' '}
										<Link to={'#'}>Terms &amp; Conditions</Link> &amp;{' '}
										<Link to={'#'}>Privacy Policy.</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
        </>
    )
}

export default SignUpWrap
