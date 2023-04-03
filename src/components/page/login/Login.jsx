import React from 'react'

import LoginWrap from './LoginWrap.jsx'
import Header from '../../common/Header.jsx'
import Footer from '../../common/Footer.jsx'
import Breadcrumb from '../../common/BreadCrumb.jsx'

function Login() {
	return (
		<>
			<Header />
			<Breadcrumb pageName="Log In" pageTitle="Log In" />
			<LoginWrap />
			<Footer />
		</>
	)
}

export default Login
