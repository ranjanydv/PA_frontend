import React, {useEffect, useState} from "react";

import DashboardMenu from "./DashboardMenu.jsx";
import DashboardContentTab from "./DashboardContentTab.jsx";
import ProfileContent from "../../profile/ProfileContent.jsx";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";

const DashboardWrap = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
    useEffect(() => {
        const newUser = localStorage.getItem('userInfo')
        const uu = JSON.parse(newUser)
        setUser(uu.user)
    }, [])
    return (
        <>
            <div className="dashboard-section pt-120 pb-120">
                <img
                    alt="images"
                    src={"/images/bg/section-bg.png"}
                    className="img-fluid section-bg-top"
                />
                <img
                    alt="images"
                    src={"/images/bg/section-bg.png"}
                    className="img-fluid section-bg-bottom"
                />
                <div className="container">
                    <div className="row g-4">
                        <DashboardMenu/>
                        <div className="col-lg-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                {user.role === 'admin' && (
                                    <DashboardContentTab/>
                                )}
                                <ProfileContent/>
                                <AddProduct/>
                                <ProductsList/>
                                {/*<ContentOfpurchase/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardWrap