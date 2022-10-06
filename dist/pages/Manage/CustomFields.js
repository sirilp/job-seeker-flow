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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Typography, Button, Box, tooltipClasses, Tooltip, IconButton, Drawer, Grid, Card, Popover, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
var useStyles = makeStyles(function () { return ({
    buttonContainer: {
        "&.MuiButton-root": {
            minWidth: "2vw",
        },
    },
    arrow: {
        "&:before": {
            border: "1px solid #36454F",
            color: "#ffffff",
        },
    },
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
        marginTop: "20px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "15px",
    },
    assessmentActionButton: {
        height: "2px",
        width: "1px",
        float: "right",
        margin: "3px 3px 0px 0px",
    },
    assessmentDeleteAction: {
        border: "1px solid gray",
        borderRadius: 0,
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
        size: "small",
        marginRight: "15px",
    },
    assessmentUpdateAction: {
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRadius: 0,
    },
    updateActionButton: {
        width: "250px",
        justifyContent: "left",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    updateIcon: {
        size: "small",
        marginRight: "20px",
        marginLeft: "25px",
        backgroundColor: "gray",
        color: "white",
        borderRadius: "2px",
        fontSize: "14px",
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
        backgroundColor: "gray",
        width: "600px",
        textAlign: "center",
    },
    assessmentDialogueContent: {
        paddingTop: "30px",
        textAlign: "center",
    },
    assessmentDialogueAction: {
        paddingTop: "10px",
        paddingBottom: "40px",
        justifyContent: "center",
    },
    delete: {
        backgroundColor: "gray",
        borderRadius: 20,
        color: "black",
        right: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
        height: "30px",
    },
    cancel: {
        backgroundColor: "gray",
        borderRadius: 20,
        color: "black",
        left: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "30px",
    },
    leftDrawerBox: {
        width: "400px",
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
        width: "390px",
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
    return (_jsx("div", __assign({ style: {
            textAlign: "center",
        } }, { children: _jsx(Typography, __assign({ onClick: handleViewResume, className: classes.uploadText }, { children: "View Resume Uploaded" })) })));
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
    return (_jsxs("div", __assign({ style: {
            textAlign: "center",
        } }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(ChatBubbleOutlineIcon, { className: classes.iconColor, onClick: handleChat }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsxs(Box, __assign({ sx: {
                        width: "380px",
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                    } }, { children: [_jsx(MessageBox, { closeIt: function () { return setToggleDrawer(false); }, params: params }), console.log("Left Drawer called")] })) }))] })));
};
export var CustomDropDown = function (params) {
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
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(option.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("select", __assign({ id: id, style: { border: "1px solid #DFE5FF" }, value: option.option, onChange: handleChange, disabled: true }, { children: [_jsx("option", __assign({ value: "" }, { children: "Null" })), _jsx("option", __assign({ value: "passed" }, { children: "Passed" })), _jsx("option", __assign({ value: "pending" }, { children: "Pending" })), _jsx("option", __assign({ value: "failed" }, { children: "Failed" }))] })) }), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: (function () {
                    if (option.option == "passed") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(CheckCircleIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                    else if (option.option == "pending") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(PauseCircleFilledIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                    else if (option.option == "failed") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(ErrorIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                })() }))] }));
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
        return (_jsxs(Card, __assign({ className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ textAlign: "center" }, { children: [_jsxs("div", __assign({ style: { margin: "10px" } }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleViewReport, className: classes.assessmentActionButton }, { children: _jsx(FormatAlignJustifyIcon, { sx: {
                                            color: "blue",
                                        } }) })), _jsxs(Popover, __assign({ id: "view-popover", open: openViewPop, anchorEl: anchorElView, onClose: handleCloseView, anchorOrigin: {
                                        vertical: "center",
                                        horizontal: "left",
                                    } }, { children: [_jsx("div", __assign({ className: classes.assessmentDeleteAction }, { children: _jsxs(Button, __assign({ className: classes.deleteActionButton, onClick: function () {
                                                    setIsDeleteBoxOpen(true);
                                                } }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon }), "Delete"] })) })), _jsx("div", __assign({ className: classes.assessmentUpdateAction }, { children: _jsxs(Button, __assign({ className: classes.updateActionButton, onClick: function () {
                                                    setIsUpdateBoxOpen(true);
                                                } }, { children: [_jsx(BorderColorIcon, { className: classes.updateIcon }), "Update"] })) }))] }))] })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ textAlign: "center", mt: 3 }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "View Assesment Report" })) }))] })));
    };
    var handleCloseUpload = function () {
        setAnchorElUpload(null);
    };
    var handleUploadReport = function (event) {
        setAnchorElUpload(event.currentTarget);
    };
    var openUploadPop = Boolean(anchorElUpload);
    var UploadAssessmentReport = function () {
        return (_jsxs(Card, __assign({ className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ textAlign: "center" }, { children: [_jsxs("div", __assign({ style: { margin: "10px" } }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleUploadReport, className: classes.assessmentActionButton }, { children: _jsx(FormatAlignJustifyIcon, { sx: {
                                            color: "blue",
                                        } }) })), _jsxs(Popover, __assign({ id: "upload-popover", open: openUploadPop, anchorEl: anchorElUpload, onClose: handleCloseUpload, anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right",
                                    } }, { children: [_jsx("div", __assign({ className: classes.assessmentDeleteAction }, { children: _jsxs(Button, __assign({ className: classes.deleteActionButton, onClick: function () {
                                                    setIsDeleteBoxOpen(true);
                                                } }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon }), "Delete"] })) })), _jsx("div", __assign({ className: classes.assessmentUpdateAction }, { children: _jsxs(Button, __assign({ className: classes.updateActionButton, onClick: function () {
                                                    setIsUploadBoxOpen(true);
                                                } }, { children: [_jsx(BorderColorIcon, { className: classes.uploadIcon }), "Upload"] })) }))] }))] })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ style: { margin: "10px" } }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ textAlign: "center", mt: 3 }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "Upload Assesment Report" })) }))] })));
    };
    var handleDelete = function () {
        //Delete Method
        setIsDeleteBoxOpen(false);
        setAnchorElUpload(null);
        setAnchorElView(null);
        setIsDeleteSuccessBoxOpen(true);
    };
    var DeleteAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isDeleteBoxOpen, "aria-labelledby": "delete-dialog-title", "aria-describedby": "delete-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(IconButton, __assign({ onClick: function () {
                                setIsDeleteBoxOpen(false);
                            }, className: classes.assessmentActionButton }, { children: _jsx(CloseIcon, {}) }))] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-dialog-description" }, { children: "Are you sure you want to Delete Assessment of the Job Seeker from the platfrom?" })) })), _jsxs(DialogActions, __assign({ className: classes.assessmentDialogueAction }, { children: [_jsx(Button, __assign({ onClick: handleDelete, className: classes.delete, size: "large" }, { children: "Yes" })), _jsx(Button, __assign({ onClick: function () {
                                setIsDeleteBoxOpen(false);
                                setAnchorElUpload(null);
                                setAnchorElView(null);
                            }, className: classes.cancel, size: "large", autoFocus: true }, { children: "Cancel" }))] }))] })));
    };
    var DeleteAssessmentSuccess = function () {
        return (_jsxs(Dialog, __assign({ open: isDeleteSuccessBoxOpen, "aria-labelledby": "delete-success-dialog-title", "aria-describedby": "delete-success-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-success-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(IconButton, __assign({ onClick: function () {
                                setIsDeleteSuccessBoxOpen(false);
                            }, className: classes.assessmentActionButton }, { children: _jsx(CloseIcon, {}) }))] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-success-dialog-description" }, { children: "Assessment has been deleted!" })) }))] })));
    };
    var UpdateAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUpdateBoxOpen, "aria-labelledby": "update-dialog-title", "aria-describedby": "update-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "update-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Update Assessment", _jsx(IconButton, __assign({ onClick: function () {
                                setIsUpdateBoxOpen(false);
                                setAnchorElView(null);
                            }, className: classes.assessmentActionButton }, { children: _jsx(CloseIcon, {}) }))] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "update-dialog-description" }, { children: "Job Seeker Name -" })) }))] })));
    };
    var UploadAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUploadBoxOpen, "aria-labelledby": "upload-dialog-title", "aria-describedby": "upload-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "upload-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Upload Assessment", _jsx(IconButton, __assign({ onClick: function () {
                                setIsUploadBoxOpen(false);
                                setAnchorElUpload(null);
                            }, className: classes.assessmentActionButton }, { children: _jsx(CloseIcon, {}) }))] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "upload-dialog-description" }, { children: "Job Seeker Name -" })) }))] })));
    };
    return (_jsxs("div", __assign({ style: {
            textAlign: "center",
        } }, { children: [_jsx(Typography, __assign({ onClick: handleClick, className: classes.uploadText }, { children: "View Assessments" })), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsx(Box, __assign({ className: classes.leftDrawerBox }, { children: _jsxs(Grid, { children: [_jsx(Box, { children: _jsxs(Typography, __assign({ className: classes.viewAssessmentTitle }, { children: ["View Assessments", _jsx(CloseIcon, { sx: { float: "right" }, onClick: function () { return setToggleDrawer(false); } })] })) }), _jsx(Typography, __assign({ textAlign: "center" }, { children: "Request New Assessment" })), _jsx(Typography, { children: "Job Seeker Name - Rajesh Sharma" }), _jsxs(Box, { children: [_jsxs(Card, __assign({ className: classes.assessmentDetailsCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 2 }, { children: "Assessment Type" })), _jsx(FormControl, __assign({ sx: { m: 1, minWidth: 120 }, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: "demo-multiple-checkbox", multiple: true, value: assessmentType, onChange: handleChangeAssessmentType, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentTypes.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentType.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 1 }, { children: "Assessment Partner" })), _jsx(FormControl, __assign({ sx: { m: 1, minWidth: 120 }, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: "demo-multiple-checkbox", multiple: true, value: assessmentPartner, onChange: handleChangeAssessmentPartner, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentPartners.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentPartner.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsx(Box, __assign({ textAlign: "center" }, { children: _jsx(Button, __assign({ variant: "contained" }, { children: "Request Assessment" })) }))] })), _jsx(Typography, __assign({ className: classes.partnerAssessment }, { children: "Partner Assessment Reports" })), _jsx(ViewAssessmentReport, {}), _jsx(UploadAssessmentReport, {}), _jsx(DeleteAssessment, {}), _jsx(DeleteAssessmentSuccess, {}), _jsx(UpdateAssessment, {}), _jsx(UploadAssessment, {})] })] }) })) }))] })));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
