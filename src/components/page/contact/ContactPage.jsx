import React from "react";
import Breadcrumb from "../../common/BreadCrumb.jsx";
import Header from "../../common/Header.jsx";

export default function ContactPage() {
    return (
        <>
            <Header/>
            <Breadcrumb pageName={"Contact Page"} pageTitle={"Contact"}/>
            <div>
                Contact
            </div>
        </>
    )
}