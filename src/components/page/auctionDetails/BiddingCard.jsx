import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import url from '../../common/url.js'

function BiddingCard(props) {
    const bidder = props.user

    const getBidder = async (da) => {
        // await api.users.getSingleUser(data)
        try {
            await axios
                .get(`${url.base_api}users/64294bb71a5088d2b48fa714`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((res) => {
                    console.log(res.data)
                })
        } catch (error) {
            console.error(error.response.data)
            console.error(error.response.data.msg)
        }
    }
    // getBidder().then((r) => {
    // 	console.log(r)
    // })
    console.log(bidder === props.user)

    useEffect(() => {
        getBidder(bidder)
    }, [])

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <>
            <li>
                <div className="row d-flex align-items-center">
                    <div className="col-7">
                        <div className="bidder-area">
                            <div className="bidder-img">
                                <img
                                    alt="images"
                                    src={`/images/bg/bidder${randomNumberInRange(0, 4)}.png`}
                                />
                            </div>
                            <div className="bidder-content">
                                <Link to={'#'}>
                                    <h6>{props.user}</h6>
                                </Link>
                                <p>रु {props.amount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                        <div className="bid-time">
                            <p>{props.time}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BiddingCard
