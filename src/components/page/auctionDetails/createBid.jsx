import React, { useEffect, useState } from 'react'
import api from '../../common/api'
import { useParams } from 'react-router-dom'
import useLocalState from '../../utils/LocalState'
import axios from 'axios'
import url from '../../common/url'
import { useGlobalContext } from '../../../context'

function CreateBid(props) {
	const [bid, setBid] = useState('')
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
	const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()
	const id = useParams()
	// const { fetchUser } = useGlobalContext()
	const he = '6400c8fd52f3f0096296bd27'

	// useEffect(() => {
	// 	// getUser()
	// 	fetchUser(he).then((r) => {
	// 		console.log('r')
	// 		console.log(r)
	// 		setUser(r)
	// 	})
	// }, [])

	// const getUser = async () => {
	// 	const userId = user.userId
	// 	console.log(userId)
	// 	await api.users.getSingleUser(userId).then((r) => {
	// 		console.log(r)
	// 	})
	// }

	const handleBid = async (e) => {
		e.preventDefault()
		// console.log(user.id)

		if (bid === '' || bid < 100) {
			// alert('Bid should be greater than 100')
			showAlert({
				text: 'Bid should be greater than 100',
				type: 'danger',
			})
			return
		}
		if (bid < props.lastBid) {
			// alert('Bid should be greater than last bid')
			showAlert({
				text: 'Bid should be greater than last bid',
				type: 'danger',
			})
			return
		}

		const bidDetails = {
			bidAmount: bid,
			product: id.id,
			user: '6400c8fd52f3f0096296bd27',
			// user:
		}

		try {
			hideAlert()
			await axios
				.post(`${url.base_api}bids`, bidDetails)
				.then((response) => {
					console.log(response)

					// if (response.data.user.role === 'admin') {
					// 	showAlert({
					// 		text: `Welcome, ${response.data.user.name}. Redirecting to dashboard...`,
					// 		type: 'success',
					// 	})

					// } else {
					// 	showAlert({
					// 		text: `Welcome, ${response.data.user.name}. Redirecting to home...`,
					// 		type: 'success',
					// 	})
					// }
					setTimeout(() => {
						setLoading(false)
					}, 14000)
				})
				.catch((error) => {
					console.error(error.response)
					console.error(error.response.data.msg, error.response.status)
					setLoading(false)
					showAlert({ text: error.response.data.msg })
				})
		} catch (error) {
			console.error(error)
			// showAlert({ text: error.response.data.msg })
			setLoading(false)
		}
	}

	return (
		<>
			{alert.show && (
				<div className={`alert alert-${alert.type} text-center`}>
					{alert.text}
				</div>
			)}
			<form onSubmit={(e) => handleBid(e)}>
				<div className="form-inner gap-2">
					<input
						type="text"
						placeholder="रु 00.00"
						value={bid}
						onChange={(e) => setBid(e.target.value)}
					/>
					<button
						className="eg-btn btn--primary btn--sm"
						type="submit"
						disabled={loading}
					>
						Place Bid
					</button>
				</div>
			</form>
		</>
	)
}

export default CreateBid
