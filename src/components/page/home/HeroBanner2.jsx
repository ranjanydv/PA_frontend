import React from 'react'
import {Link} from "react-router-dom"

function HeroBanner2() {
    const scrollTop = () => window.scrollTo({top: 0, behavior: "smooth"})
    return (
        <>
            <div className="hero-area hero-style-three">
                <Link to={`/join-merchant`} onClick={scrollTop} className="join-merchant">Join Merchant</Link>
                <img alt="bannerImage" src={"/images/bg/np.png"} className="img-fluid banner-ellips"/>
                <img alt="bannerImage" src={"/images/bg/home3-banner.png"} className="home3-banner img-fluid"/>
                <div className="container-lg container-fluid">
                    <div className="row d-flex justify-content-start align-items-end">
                        <div className="col-xl-7 col-lg-7 px-0">
                            <div className="banner3-content">
                                <span className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.5s">Welcome To Premiere Auctioneers</span>
                                <h1 className="wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">Build,
                                    Sell &amp; Collect Arts.</h1>
                                <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                    Welcome to Premiere Auctioneers and explore on the Nepal's best &amp; greatest
                                    Bidding marketplace with our beautiful Bidding products. We want to be a part of
                                    your smile, success and future growth. We contribute to Nepalese society
                                    by listing out artists from rural areas to have their crafts be visible to the whole
                                    country &hearts;.
                                </p>
                                <Link
                                    to={`/live-auction`} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                    className="eg-btn btn--primary4 btn--lg wow fadeInUp" data-wow-duration="2s"
                                    data-wow-delay="0.8s">
                                    Start Exploring
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner2