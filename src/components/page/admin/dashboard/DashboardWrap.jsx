import React from "react";

import DashboardMenu from "./DashboardMenu.jsx";
import DashboardContentTab from "./DashboardContentTab.jsx";
import ProfileContent from "../../profile/ProfileContent.jsx";

const DashboardWrap = () => {
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
                                <DashboardContentTab/>
                                <ProfileContent/>
                                {/*<ContentOfOrder/>*/}
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