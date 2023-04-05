import React from "react";
import '../ContentWrapper/ContentWrapper.scss'


const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;