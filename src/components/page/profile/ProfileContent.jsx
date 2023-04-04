// import {redirectToLogin} from "../../common/utils.js";

import {useEffect, useState} from "react";

const ProfileContent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
    useEffect(() => {
        const newUser = localStorage.getItem('userInfo')
        const uu = JSON.parse(newUser)
        setUser(uu.user)
    }, [])
    const  active = 'show active'
    const handleSubmit = (e) => {
        e.preventDefault()
        // redirectToLogin()
    }
    return (
        <>
            <div className={`tab-pane fade ${user.role !== 'admin' && active}`} id="v-pills-profile" role="tabpanel"
                 aria-labelledby="v-pills-profile-tab">
                <div className="dashboard-profile">
                    <div className="owner">
                        <div className="image">
                            <img alt="images" src={"/images/bg/pro-pic.png"}/>
                        </div>
                        <div className="content">
                            <h3>{user.name}</h3>
                            <p className="para">{user.role === 'owner' && 'Merchant'}</p>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <form action="#">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>First Name *</label>
                                        <input type="text" placeholder="First name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>Last Name *</label>
                                        <input type="text" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>Contact Number *</label>
                                        <input type="text" placeholder={"+977"}/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>Email</label>
                                        <input type="text" placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-inner">
                                        <label>Address</label>
                                        <input type="text" name="message"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>City</label>
                                        <input type="text" placeholder={"Kathmandu"}/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>State</label>
                                        <select name="" id="" className={"select style-2"}>
                                            <option className={"selectBtn"} value="Bagmati">Bagmati</option>
                                            <option className={"select-option"} value="Koshi">Koshi</option>
                                            <option className={"select-option"} value="Madhesh">Madhesh</option>
                                            <option className={"select-option"} value="Gandaki">Gandaki</option>
                                            <option className={"select-option"} value="Lumbini">Lumbini</option>
                                            <option className={"select-option"} value="Karnali">Karnali</option>
                                            <option className={"select-option"} value="Sudurpaschim">Sudurpaschim</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>Zip Code</label>
                                        <input type="text" placeholder="45600"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="form-inner">
                                        <label>Country</label>
                                        <select name="" id="" className={"select style-2"} placeholder={"Bagmati"}>
                                            <option className={"selectBtn"} value="Nepal">Nepal</option>
                                            <option className={"select-option"} value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="button-group">
                                        <button type="submit" className="eg-btn profile-btn" onSubmit={(e) => {
                                            handleSubmit(e)
                                        }}>Update Profile
                                        </button>
                                        <button className="eg-btn cancel-btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileContent