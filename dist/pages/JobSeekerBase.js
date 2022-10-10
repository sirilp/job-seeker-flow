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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import JobSeekerProfileFlow from "./JobSeekerProfileFlow/JobSeekerProfileFlow";
import TabWrapper, { TabPanel } from "../components/TabWrapper/TabWrapper";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./JobSeekerBaseStyles.css";
import Vetting from "./Vetting/Vetting";
import Notification from "../components/Notification";
import DuplicationFailed from "./DuplicationFailed/DuplicationFailed";
import AllJs from "./AllJs/AllJs";
import Manage from "./Manage/Manage";
import IncompleteUploads from "./IncompleteUploads/IncompleteUploads";
import { useAppSelector, useAppDispatch } from "../services/StoreHooks";
import { initialAlertState } from "../modules/notificationState";
var useStyles = makeStyles(function () { return ({}); });
var JobSeekerBase = function (props) {
    var id = props.id, contestId = props.contestId;
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var notifyDataState = useAppSelector(function (state) { return state.notificationAlert; });
    var _a = React.useState(0), activeTab = _a[0], setActiveTab = _a[1];
    var _b = React.useState(""), dataMessage = _b[0], setDataMessage = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(""), type = _d[0], setType = _d[1];
    var jobSeekerTabs = [
        {
            title: "Add Profile",
            index: 0,
            component: (_jsx(JobSeekerProfileFlow, { setType: setType, setOpen: setOpen, setDataMessage: setDataMessage, contestId: id, id: contestId })),
        },
        {
            title: "Duplication Failed",
            index: 1,
            component: _jsx(DuplicationFailed, {}),
        },
        {
            title: "Incomplete Uploads ",
            index: 2,
            component: _jsx(IncompleteUploads, { contestId: contestId, id: id }),
        },
        {
            title: "All JS",
            index: 3,
            component: _jsx(AllJs, { contestId: contestId, id: id }),
        },
        {
            title: "Vetting",
            index: 4,
            component: _jsx(Vetting, { contestId: contestId, id: id }),
        },
        {
            title: "Interview",
            index: 5,
            component: _jsx("div", { children: "Page Not Avaliable" }),
        },
        {
            title: "Manage Profiles",
            index: 6,
            component: _jsx(Manage, { contestId: contestId, id: id }),
        },
        {
            title: "Broadcast",
            index: 7,
            component: _jsx("div", { children: "Page Not Avaliable" }),
        },
    ];
    var resetNotificationData = function () {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: initialAlertState.enable,
                type: initialAlertState.type,
                message: initialAlertState.message,
                duration: initialAlertState.duration,
            },
        });
    };
    return (_jsxs(Grid, __assign({ container: true, p: 2 }, { children: [_jsx(Notification, { open: open, type: type, message: dataMessage, setOpen: setOpen }), _jsx(TabWrapper, { tabIndex: activeTab, setTabIndex: setActiveTab, tabsList: jobSeekerTabs }), jobSeekerTabs.map(function (tab) { return (_jsx(TabPanel, __assign({ value: activeTab, index: tab.index, disablePadding: true }, { children: tab.component }), tab.index)); }), notifyDataState && (_jsx(Notification, { open: notifyDataState.enable, type: notifyDataState.type, message: notifyDataState.message, duration: notifyDataState.duration, setOpen: function () { return resetNotificationData(); } }))] })));
};
export default JobSeekerBase;
