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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Typography, Button, Box, IconButton, Drawer, Grid, Card, Popover, Dialog, DialogTitle, DialogContent, DialogContentText, FormGroup, FormControlLabel, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Calendar from "../../components/Calendar/Calendar";
import clsx from "clsx";
var useStyles = makeStyles(function () { return ({
    iconColor: {
        color: "#4d6cd9",
        margin: "8px",
    },
    uploadText: {
        color: "#4d6cd9",
    },
    viewAssessmentCard: {
        border: "1px solid grey",
        height: "200px ",
        marginTop: "10px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "15px",
    },
    assessmentActionButton: {
        height: "2px",
        width: "1px",
        float: "right",
        margin: "3px 3px 0px 0px",
        cursor: "pointer",
    },
    assessmentButton: {
        textAlign: "center",
        marginTop: 3,
    },
    assessmentDeleteAction: {
        border: "1px solid gray",
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "40px",
        width: "250px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    deleteActionButton: {
        width: "250px",
        justifyContent: "left",
        paddingLeft: "25px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    deleteIcon: {
        marginRight: "15px",
        cursor: "pointer",
    },
    assessmentUpdateAction: {
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "43px",
        width: "250px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    updateActionButton: {
        width: "250px",
        justifyContent: "left",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    updateIcon: {
        marginRight: "17px",
        backgroundColor: "gray",
        color: "white",
        borderRadius: 3,
        cursor: "pointer",
        padding: "2px",
    },
    uploadIcon: {
        size: "small",
        marginRight: "18px",
        marginLeft: "25px",
        backgroundColor: "gray",
        color: "white",
        borderRadius: "2px",
        fontSize: "14px",
    },
    assessmentDialogueBox: {
        backgroundColor: "#4D6CD9",
        width: "600px",
        textAlign: "center",
    },
    assessmentDialogueContent: {
        textAlign: "center",
    },
    assessmentDialogueText: {
        paddingTop: "50px",
        paddingBottom: "40px",
        justifyContent: "center",
        textAlign: "center",
    },
    assessmentDialogueAction: {
        paddingTop: "10px",
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
    },
    delete: {
        backgroundColor: "#4D6CD9",
        borderRadius: 20,
        color: "black",
        paddingLeft: "30px",
        paddingRight: "30px",
        height: "30px",
        paddingTop: "3px",
        cursor: "pointer",
        marginRight: "20px",
    },
    cancel: {
        backgroundColor: "#4D6CD9",
        borderRadius: 20,
        color: "black",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "30px",
        paddingTop: "3px",
        cursor: "pointer",
        marginLeft: "20px",
    },
    leftDrawerBox: {
        width: "390px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        overflowY: "auto",
    },
    viewAssessmentTitle: {
        textAlign: "center",
        backgroundColor: "#4D6CD9",
        height: "50px",
        // width: "390px",
        color: "#FFFFFF",
        padding: "10px",
        fontSize: "20px",
        fontWeight: "bold",
    },
    assessmentDetailsCard: {
        border: "1px solid grey",
        height: "180px ",
        marginTop: "20px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "13px",
        marginBottom: "10px",
    },
    assessmentDetails: {
        width: "190px",
        "& legend": { display: "none" },
        "& fieldset": { top: 0 },
    },
    partnerAssessment: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: 687,
        width: 390,
        margin: 1,
        border: "1px solid #E5E5E5",
    },
    section1: {
        textAlign: "center",
        backgroundColor: "#4D6CD9",
        height: "50px",
        width: "390px",
        color: "#FFFFFF",
        padding: "10px",
    },
    section2: {
        marginTop: "15px",
        width: "390px",
        textAlign: "center",
    },
    section3: {
        marginTop: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    card: {
        marginLeft: "18px",
        backgroundColor: "white",
        width: "350px",
        height: "auto",
        borderRadius: "10px",
    },
    timeSlotTitleContainer: {
        marginTop: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    commonColor: {
        color: "#4d6cd9",
    },
    commonMargin: {
        margin: "10px",
    },
    dropdown: {
        border: "1px solid #DFE5FF",
    },
    dropdownContent: {
        display: "inline-flex",
        alignItems: "center",
    },
    closeIcon: {
        float: "right",
    },
    formControl: {
        top: 5,
        minWidth: 120,
    },
}); });
export var ResumeUploaded = function (params) {
    var classes = useStyles();
    var handleViewResume = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resumeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resumeId = params.getValue();
                    console.log(resumeId);
                    return [4 /*yield*/, openFile(resumeId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(Typography, __assign({ onClick: handleViewResume, className: classes.uploadText }, { children: "View Resume Uploaded" })) })));
};
export var Icons = function (params) {
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var classes = useStyles();
    var handleClick = function () {
        console.log(params);
    };
    var handleChat = function () {
        console.log("Chat Icon clicked");
        setToggleDrawer(true);
    };
    return (_jsxs("div", __assign({ className: classes.assessmentDialogueContent }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(ChatBubbleOutlineIcon, { className: classes.iconColor, onClick: handleChat }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsxs(Box, __assign({ className: classes.leftDrawerBox }, { children: [_jsx(MessageBox, { closeIt: function () { return setToggleDrawer(false); }, params: params }), console.log("Left Drawer called")] })) }))] })));
};
export var MainStageDropDown = function (params) {
    // console.log("Vetting custom feild", params);
    var Passed = {
        option: "passed",
        color: "#22C55E",
        title: "Success",
        body: "Passed",
    };
    var Pending = {
        option: "pending",
        color: "#ff781f",
        title: "",
        body: "Pending",
    };
    var Failed = {
        option: "failed",
        color: "#EF4444",
        title: "",
        body: "Failed",
    };
    var _a = useState({
        option: "",
        color: "",
        title: "",
        body: "",
    }), option = _a[0], setOption = _a[1];
    useEffect(function () {
        console.log(params.getValue());
        if (params.getValue() === null || "") {
            setOption({
                option: "",
                color: "",
                title: "",
                body: "",
            });
        }
        else if (params.getValue() === "passed") {
            setOption(Passed);
        }
        else if (params.getValue() === "pending") {
            setOption(Pending);
        }
        else if (params.getValue() === "failed") {
            setOption(Failed);
        }
    }, []);
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _b = useState(""), message = _b[0], setMessage = _b[1];
    var handleChange = function (event) {
        params.setValue(event.target.value);
        if (event.target.value == "passed") {
            console.log("Can call Api to change status to Passed");
            setOption(Passed);
        }
        else if (event.target.value == "pending") {
            setOption(Pending);
        }
        else if (event.target.value == "failed") {
            setOption(Failed);
        }
        else if (event.target.value == "") {
            setOption({
                option: "",
                color: "",
                title: "",
                body: "",
            });
        }
    };
    var classes = useStyles();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs("select", __assign({ id: id, className: classes.dropdown, value: option.option, onChange: handleChange }, { children: [_jsx("option", __assign({ value: "" }, { children: "NA" })), _jsx("option", __assign({ value: "passed" }, { children: "Passed" })), _jsx("option", __assign({ value: "pending" }, { children: "Pending" })), _jsx("option", __assign({ value: "failed" }, { children: "Failed" }))] })) }) }));
};
export var ViewAssessments = function (params) {
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var _b = React.useState([]), assessmentType = _b[0], setAssessmentType = _b[1];
    var _c = React.useState([]), assessmentPartner = _c[0], setAssessmentPartner = _c[1];
    var _d = useState(null), anchorElView = _d[0], setAnchorElView = _d[1];
    var _e = useState(null), anchorElUpload = _e[0], setAnchorElUpload = _e[1];
    var _f = useState(false), isDeleteBoxOpen = _f[0], setIsDeleteBoxOpen = _f[1];
    var _g = useState(false), isUpdateBoxOpen = _g[0], setIsUpdateBoxOpen = _g[1];
    var _h = useState(false), isUploadBoxOpen = _h[0], setIsUploadBoxOpen = _h[1];
    var _j = useState(false), isDeleteSuccessBoxOpen = _j[0], setIsDeleteSuccessBoxOpen = _j[1];
    var assessmentTypes = [
        "Assessment Services",
        "Interview as a Service",
        "Resume Builder",
        "Learning Management System",
    ];
    var assessmentPartners = [
        "Assessment Services",
        "Interview as a Service",
        "Resume Builder",
        "Learning Management System",
    ];
    var handleChangeAssessmentType = function (event) {
        var value = event.target.value;
        setAssessmentType(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    var handleChangeAssessmentPartner = function (event) {
        var value = event.target.value;
        setAssessmentPartner(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    var classes = useStyles();
    var handleClick = function () {
        console.log(params);
        setToggleDrawer(true);
    };
    var handleCloseView = function () {
        setAnchorElView(null);
    };
    var handleViewReport = function (event) {
        setAnchorElView(event.currentTarget);
    };
    var openViewPop = Boolean(anchorElView);
    var ViewAssessmentReport = function () {
        return (_jsxs(Card, __assign({ className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDialogueContent }, { children: [_jsxs("div", __assign({ className: classes.commonMargin }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleViewReport, className: classes.assessmentActionButton }, { children: _jsx(DehazeIcon, { className: classes.commonColor }) })), _jsxs(Popover, __assign({ id: "view-popover", open: openViewPop, anchorEl: anchorElView, onClose: handleCloseView, anchorReference: "anchorPosition", anchorPosition: { top: 345, left: 355 } }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDeleteAction }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon, onClick: function () {
                                                        setIsDeleteBoxOpen(true);
                                                    } }), _jsx(Typography, { children: "Delete" })] })), _jsxs(Box, __assign({ className: classes.assessmentUpdateAction }, { children: [_jsx(BorderColorIcon, { className: classes.updateIcon, onClick: function () {
                                                        setIsUpdateBoxOpen(true);
                                                    }, fontSize: "small" }), _jsx(Typography, { children: "Update" })] }))] }))] })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ className: classes.assessmentButton }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "View Assesment Report" })) }))] })));
    };
    var handleCloseUpload = function () {
        setAnchorElUpload(null);
    };
    var handleUploadReport = function (event) {
        setAnchorElUpload(event.currentTarget);
    };
    var openUploadPop = Boolean(anchorElUpload);
    var UploadAssessmentReport = function () {
        return (_jsxs(Card, __assign({ className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ textAlign: "center" }, { children: [_jsxs("div", __assign({ className: classes.commonMargin }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleUploadReport, className: classes.assessmentActionButton }, { children: _jsx(DehazeIcon, { className: classes.commonColor }) })), _jsxs(Popover, __assign({ id: "upload-popover", open: openUploadPop, anchorEl: anchorElUpload, onClose: handleCloseUpload, anchorReference: "anchorPosition", anchorPosition: { top: 565, left: 355 } }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDeleteAction }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon, onClick: function () {
                                                        setIsDeleteBoxOpen(true);
                                                    } }), _jsx(Typography, { children: "Delete" })] })), _jsxs(Box, __assign({ className: classes.assessmentUpdateAction }, { children: [_jsx(BorderColorIcon, { className: classes.updateIcon, onClick: function () {
                                                        setIsUploadBoxOpen(true);
                                                    }, fontSize: "small" }), _jsx(Typography, { children: "Upload" })] }))] }))] })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ className: classes.assessmentButton }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "Upload Assesment Report" })) }))] })));
    };
    var handleDelete = function () {
        //Delete Method
        setIsDeleteBoxOpen(false);
        setAnchorElUpload(null);
        setAnchorElView(null);
        setIsDeleteSuccessBoxOpen(true);
    };
    var DeleteAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isDeleteBoxOpen, "aria-labelledby": "delete-dialog-title", "aria-describedby": "delete-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsDeleteBoxOpen(false);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-dialog-description", className: classes.assessmentDialogueText }, { children: "Are you sure you want to Delete Assessment of the Job Seeker from the platfrom?" })) })), _jsxs(Box, __assign({ className: classes.assessmentDialogueAction }, { children: [_jsx(Box, __assign({ className: classes.delete, onClick: handleDelete }, { children: _jsx(Typography, { children: "Yes" }) })), _jsx(Box, __assign({ className: classes.cancel, onClick: function () {
                                setIsDeleteBoxOpen(false);
                                setAnchorElUpload(null);
                                setAnchorElView(null);
                            } }, { children: _jsx(Typography, { children: "Cancel" }) }))] }))] })));
    };
    var DeleteAssessmentSuccess = function () {
        return (_jsxs(Dialog, __assign({ open: isDeleteSuccessBoxOpen, "aria-labelledby": "delete-success-dialog-title", "aria-describedby": "delete-success-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-success-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsDeleteSuccessBoxOpen(false);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-success-dialog-description", className: classes.assessmentDialogueText }, { children: "Assessment has been deleted!" })) }))] })));
    };
    var UpdateAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUpdateBoxOpen, "aria-labelledby": "update-dialog-title", "aria-describedby": "update-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "update-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Update Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsUpdateBoxOpen(false);
                                setAnchorElView(null);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "update-dialog-description", className: classes.assessmentDialogueText }, { children: "Job Seeker Name -" })) }))] })));
    };
    var UploadAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUploadBoxOpen, "aria-labelledby": "upload-dialog-title", "aria-describedby": "upload-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "upload-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Upload Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsUploadBoxOpen(false);
                                setAnchorElUpload(null);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "upload-dialog-description", className: classes.assessmentDialogueText }, { children: "Job Seeker Name -" })) }))] })));
    };
    return (_jsxs("div", __assign({ className: classes.assessmentDialogueContent }, { children: [_jsx(Typography, __assign({ onClick: handleClick, className: classes.uploadText }, { children: "View Assessments" })), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsx(Box, __assign({ className: classes.leftDrawerBox }, { children: _jsxs(Grid, { children: [_jsx(Box, { children: _jsxs(Typography, __assign({ className: classes.viewAssessmentTitle }, { children: ["View Assessments", _jsx(CloseIcon, { className: classes.closeIcon, onClick: function () { return setToggleDrawer(false); } })] })) }), _jsx(Typography, __assign({ className: classes.assessmentDialogueContent }, { children: "Request New Assessment" })), _jsx(Typography, __assign({ className: classes.assessmentDialogueContent }, { children: "Job Seeker Name - Rajesh Sharma" })), _jsxs(Box, { children: [_jsxs(Card, __assign({ className: classes.assessmentDetailsCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 2.2 }, { children: "Assessment Type" })), _jsx(FormControl, __assign({ className: classes.formControl, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: "demo-multiple-checkbox", multiple: true, value: assessmentType, onChange: handleChangeAssessmentType, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentTypes.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentType.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 1 }, { children: "Assessment Partner" })), _jsx(FormControl, __assign({ className: classes.formControl, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: "demo-multiple-checkbox", multiple: true, value: assessmentPartner, onChange: handleChangeAssessmentPartner, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentPartners.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentPartner.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsx(Box, __assign({ className: clsx(classes.assessmentDialogueContent, classes.section3) }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "Request Assessment" })) }))] })), _jsx(Typography, __assign({ className: classes.partnerAssessment }, { children: "Partner Assessment Reports" })), _jsx(ViewAssessmentReport, {}), _jsx(UploadAssessmentReport, {}), _jsx(DeleteAssessment, {}), _jsx(DeleteAssessmentSuccess, {}), _jsx(UpdateAssessment, {}), _jsx(UploadAssessment, {})] })] }) })) }))] })));
};
export var Interview = function (params) {
    var classes = useStyles();
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var times = ["11:00am to 01:00pm", "03:00pm to 06:00pm"];
    var Card = function (props) {
        var handleOnChange = function (e) {
            if (e.target.checked) {
                var time = e.target.value;
                alert(e.target.value);
            }
        };
        return (_jsxs(Grid, { children: [_jsx(Box, { children: _jsxs(Typography, __assign({ className: classes.viewAssessmentTitle }, { children: ["Interview Scheduling", _jsx(CloseIcon, { onClick: handleClose, className: classes.closeIcon })] })) }), _jsx(Box, __assign({ className: classes.section2 }, { children: _jsx("h5", __assign({ className: classes.commonColor }, { children: "Phase - L1" })) })), _jsxs(Box, __assign({ className: classes.section3 }, { children: [_jsx("p", { children: "Choose Date" }), _jsx(Box, { children: _jsx(Calendar, { status: true }) })] })), _jsxs(Box, __assign({ p: 1, className: classes.timeSlotTitleContainer }, { children: [_jsx("p", { children: "Time Slots Available" }), _jsx(FormGroup, { children: times.map(function (time) { return (_jsx(FormControlLabel, { onChange: handleOnChange, value: time, control: _jsx(Checkbox, {}), label: time })); }) })] }))] }));
    };
    var handleClose = function () {
        setToggleDrawer(false);
    };
    return (_jsxs("div", __assign({ className: classes.assessmentDialogueContent }, { children: [_jsx(Button, __assign({ size: "small", onClick: function () { return setToggleDrawer(true); }, variant: "contained", sx: { background: "#4D6CD9", borderRadius: "15px", height: "25px" } }, { children: "Schedule" })), _jsx(Drawer, __assign({ anchor: "right", open: toggleDrawer, onClose: handleClose }, { children: _jsx(Card, { handleCloseIcon: handleClose }) }))] })));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
