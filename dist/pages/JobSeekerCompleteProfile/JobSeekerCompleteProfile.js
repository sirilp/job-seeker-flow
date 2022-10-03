var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Graph from "../../components/AnalyticsGraph/Graph";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import TabWrapper, { TabPanel } from "../../components/TabWrapper/TabWrapper";
import { Grid, Typography } from "@mui/material";
import { JOB_SEEKER_COMLETE_PROFILE_TEXT } from "../../constants";
var JobSeekerCompleteProfile = function (props) {
    var _a = useState(0), activeTab = _a[0], setActiveTab = _a[1];
    var _b = useState(""), dataMessage = _b[0], setDataMessage = _b[1];
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    var _d = useState(""), type = _d[0], setType = _d[1];
    var jobSeekerTabs = [
        {
            title: "Profile Uploading",
            index: 0,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "Full Name : Sai Anvesh",
            index: 1,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "DOB : 19/01/1991 ",
            index: 2,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "View Profile",
            index: 3,
            component: _jsx("div", { children: "" }),
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Grid, __assign({ container: true, display: "flex", justifyContent: "center" }, { children: [_jsxs(Grid, __assign({ item: true, xs: 9.5, sx: { boxShadow: 2 } }, { children: [_jsx(Typography, __assign({ variant: "h5", color: "#22C55E", textAlign: "center", padding: "2vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.title })), _jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.titleOne })), _jsx(Typography, __assign({ variant: "body2", color: "#474747", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification1 })), _jsx(Typography, __assign({ variant: "subtitle1", color: "#474747", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification2 })), _jsx("div", __assign({ style: { padding: "3vw" } }, { children: _jsx(JobSeekerProfileCard, { contestId: props.contestId }) })), _jsxs("div", __assign({ style: { padding: "0 3vw 0 3vw" } }, { children: [_jsx(TabWrapper, { tabIndex: activeTab, setTabIndex: setActiveTab, tabsList: jobSeekerTabs }), jobSeekerTabs.map(function (tab) { return (_jsx(TabPanel, __assign({ value: activeTab, index: tab.index, disablePadding: true }, { children: tab.component }), tab.index)); })] })), _jsxs("div", __assign({ style: { padding: "2vw" } }, { children: [_jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification3 })), _jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification4 }))] }))] })), _jsxs(Grid, __assign({ item: true, xs: 9.5, sx: { padding: "0vw" } }, { children: [_jsx(Typography, __assign({ variant: "h4", textAlign: "center", padding: "3vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.alyticsTitle })), _jsx(Graph, {})] }))] })) }));
};
export default JobSeekerCompleteProfile;
