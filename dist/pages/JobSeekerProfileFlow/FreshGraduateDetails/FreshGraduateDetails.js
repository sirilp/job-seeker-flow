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
import React, { useImperativeHandle, useEffect } from "react";
import { Stack, Grid, TextField, } from "@mui/material";
import { useStyles } from "../JobSeekerProfileFlowStyles";
import { CITY_LABEL, WARNING_KEY, COUNTRY_LABEL, HALF_SIZE_GRID, FULL_SIZE_GRID, } from "../../../constants";
import { COLLEGE_END_TEXT, COLLEGE_START_TEXT, COLLEGE_NAME_LABEL, INSTITUTE_NAME_TEXT, INSTITUTE_LOCATION_TEXT, } from "./FreshGraduateDetailsConstants";
import Calendar from "../../../components/Calendar/Calendar";
import { useFormik } from "formik";
import * as Yup from "yup";
var FreshGraduateDetails = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    var freshGraduateForm = useFormik({
        initialValues: {
            instituteName: "",
            instituteCity: "",
            instituteCountry: "",
            collegeEndDate: "",
            collegeStartDate: "",
        },
        validationSchema: Yup.object().shape({
            instituteName: Yup.string()
                .required("Please add Institute Name")
                .min(1),
            instituteCity: Yup.string()
                .required("Please add Institute City")
                .min(1),
            instituteCountry: Yup.string()
                .required("Please add Institute Country")
                .min(1),
            collegeEndDate: Yup.string()
                .required("Please add Institute End Date")
                .min(1),
            collegeStartDate: Yup.string()
                .required("Please add Institute Start Date")
                .min(1),
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
        },
        enableReinitialize: true,
    });
    var handleEndDate = function (dateValue) {
        freshGraduateForm.setFieldValue("collegeEndDate", dateValue);
    };
    var handleStartDate = function (dateValue) {
        freshGraduateForm.setFieldValue("collegeStartDate", dateValue);
    };
    useImperativeHandle(ref, function () { return ({
        childMethod: function () {
            handleSubmit();
        },
    }); });
    var handleSubmit = function () {
        if (!validateFreshGraduateDetails()) {
            props.setParentData(freshGraduateForm.initialValues);
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter all experience details");
            props.setOpen(true);
        }
        else
            props.setParentData(freshGraduateForm.values);
    };
    var validateFreshGraduateDetails = function () {
        if (!freshGraduateForm.values.instituteName ||
            !freshGraduateForm.values.instituteCity ||
            !freshGraduateForm.values.instituteCountry ||
            !freshGraduateForm.values.collegeEndDate ||
            !freshGraduateForm.values.collegeStartDate)
            return false;
        else
            return true;
    };
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (props.freshGraduateDetails) {
            if ((_a = props.freshGraduateDetails) === null || _a === void 0 ? void 0 : _a.instituteName)
                freshGraduateForm.setFieldValue("instituteName", (_b = props.freshGraduateDetails) === null || _b === void 0 ? void 0 : _b.instituteName);
            if ((_c = props.freshGraduateDetails) === null || _c === void 0 ? void 0 : _c.instituteCity)
                freshGraduateForm.setFieldValue("instituteCity", (_d = props.freshGraduateDetails) === null || _d === void 0 ? void 0 : _d.instituteCity);
            if ((_e = props.freshGraduateDetails) === null || _e === void 0 ? void 0 : _e.collegeEndDate)
                freshGraduateForm.setFieldValue("collegeEndDate", (_f = props.freshGraduateDetails) === null || _f === void 0 ? void 0 : _f.collegeEndDate);
            if ((_g = props.freshGraduateDetails) === null || _g === void 0 ? void 0 : _g.collegeStartDate)
                freshGraduateForm.setFieldValue("collegeStartDate", (_h = props.freshGraduateDetails) === null || _h === void 0 ? void 0 : _h.collegeStartDate);
            if ((_j = props.freshGraduateDetails) === null || _j === void 0 ? void 0 : _j.instituteCountry)
                freshGraduateForm.setFieldValue("instituteCountry", (_k = props.freshGraduateDetails) === null || _k === void 0 ? void 0 : _k.instituteCountry);
        }
    }, []);
    return (_jsx(React.Fragment, { children: _jsx("div", __assign({ className: "experience-details-card" }, { children: _jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: _jsxs("div", __assign({ className: "institute-field" }, { children: [_jsx("p", { children: INSTITUTE_NAME_TEXT }), _jsx(TextField, { disabled: props.disabled, label: COLLEGE_NAME_LABEL, className: classes.boxInputField, size: "small", name: "instituteName", onBlur: freshGraduateForm.handleBlur, onChange: freshGraduateForm.handleChange, value: freshGraduateForm.values.instituteName })] })) })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: INSTITUTE_LOCATION_TEXT }), _jsxs(Stack, __assign({ direction: "row", spacing: 3 }, { children: [_jsx(TextField, { disabled: props.disabled, label: CITY_LABEL, className: classes.inputField, size: "small", name: "instituteCity", onBlur: freshGraduateForm.handleBlur, onChange: freshGraduateForm.handleChange, value: freshGraduateForm.values.instituteCity }), _jsx(TextField, { disabled: props.disabled, label: COUNTRY_LABEL, className: classes.inputField, size: "small", name: "instituteCountry", onBlur: freshGraduateForm.handleBlur, onChange: freshGraduateForm.handleChange, value: freshGraduateForm.values.instituteCountry })] }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: COLLEGE_START_TEXT }), _jsx(Calendar, { setDate: handleStartDate })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: COLLEGE_END_TEXT }), _jsx(Calendar, { setDate: handleEndDate, status: false })] }))] })) })) }));
});
export default FreshGraduateDetails;
