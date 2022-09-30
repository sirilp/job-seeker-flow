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
import { useRef, useState, useMemo, useCallback, } from "react";
import { TEMPLATE_BUTTON } from "../../constants";
import { Typography } from "@mui/material";
import JobSeekerTempleteButton from "../../components/JobSeekerProfile/JobSeekerTempleteButton";
import { makeStyles } from "@mui/styles";
import "../JobSeekerBaseStyles.css";
import { LISTING_GENERIC_HEADERS } from "./AddProfileColumnHeaders";
import GridItem from "../GridItem/GridItem";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import Notification from "../../components/Notification";
import { initialAlertState } from "../../modules/notificationState";
var useStyles = makeStyles(function () { return ({
    buttonCardContainer: {
        "&.MuiCardContent-root": {
            paddingBottom: "0vw",
        },
    },
}); });
var JobSeekerAddProfile = function (props) {
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var gridRef = useRef();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var notifyDataState = useAppSelector(function (state) { return state.notificationAlert; });
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var _d = useState(1), totalPages = _d[0], setTotalPages = _d[1];
    var fulfillUpload = function (data) {
        dispatchProfileLogId(data === null || data === void 0 ? void 0 : data.profileLogId);
        props.handleComplete(0);
        props.handleNext();
    };
    var dispatchProfileLogId = function (profileLogId) {
        dispatch({
            type: 'USER_ADD',
            data: {
                userData: __assign(__assign({}, userDataState.userData), { profileLogId: profileLogId }),
                userId: userDataState.userId
            }
        });
    };
    var resetNotificationData = function () {
        dispatch({
            type: 'SEND_ALERT',
            data: {
                enable: initialAlertState.enable,
                type: initialAlertState.type,
                message: initialAlertState.message,
                duration: initialAlertState.duration
            }
        });
    };
    var r1 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r2 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r3 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r4 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r5 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var row = [r1, r2, r3, r4, r5];
    var defaultColDef = useMemo(function () {
        return {
            flex: 1,
            minWidth: 170,
            maxWidth: 250,
            sortable: true,
            floatingFilter: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            resizable: true,
            cellStyle: { "border-right-color": "#DFE5FF" },
        };
    }, []);
    // const onGridReady = React.useCallback(
    //   (params) => {
    //     apiCallRelatedFormData();
    //   },
    //   [gotData]
    // );
    // const onUpdateColumns = useCallback((data) => {
    //   if (gridRef?.current) gridRef.current.api.setColumnDefs(data);
    // }, []);
    // const autoGroupColumnDef = useMemo<ColDef>(() => {
    //   return {
    //     headerName: "Group",
    //     minWidth: 170,
    //     field: "athlete",
    //     valueGetter: (params) => {
    //       if (params.node!.group) {
    //         return params.node!.key;
    //       } else {
    //         return params.data[params.colDef.field!];
    //       }
    //     },
    //     headerCheckboxSelection: true,
    //     cellRenderer: "agGroupCellRenderer",
    //     cellRendererParams: {
    //       checkbox: true,
    //     },
    //   };
    // }, []);
    // const pageChange = (pageNumber) => {
    //   setPageNo(pageNumber);
    //   apiCallRelatedFormData(contestStatus, pageNumber - 1);
    // };
    // const pageSizeChange = (pageSizeChanged) => {
    //   setPageSize(pageSizeChanged);
    //   apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
    // };
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var onCellValueChanged = useCallback(function (event) {
        console.log(event);
        // if (gridRef.current) {
        //   const rowSelection = gridRef.current.api.getSelectedRows();
        // }
    }, []);
    return (_jsx("div", __assign({ className: "form-encapsulate" }, { children: _jsxs("div", __assign({ className: "form-card-holder" }, { children: [_jsx(Notification, { open: notifyDataState.enable, type: notifyDataState.type, message: notifyDataState.message, duration: notifyDataState.duration, setOpen: function () { return resetNotificationData(); } }), _jsxs("div", { children: [_jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 0vw 2vw" }, { children: "For Bulk Duplication Check" })) }), _jsx("div", __assign({ style: { margin: "1vw 1vw 1vw 1vw" } }, { children: TEMPLATE_BUTTON.map(function (button) { return (_jsx(JobSeekerTempleteButton, { fileName: button.iconFileName, title: button.title })); }) })), _jsx("div", { children: _jsxs(Typography, __assign({ variant: "h6", gutterBottom: true, component: "div", color: "black", display: "flex", justifyContent: "center" }, { children: [_jsx("hr", { className: "line" }), "( OR )", _jsx("hr", { className: "line" })] })) })] }), _jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 2vw 2vw" }, { children: "Enter the Details Manually" })) }), _jsx("div", { children: _jsx(GridItem, { gridRef: gridRef, rowData: row, columnDefs: columnDefs, defaultColDef: defaultColDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, 
                        // pageSize={pageSize}
                        onSelectionChanged: onSelectionChanged, 
                        // pageSizeArray={PAGE_SIZE_ARRAY}
                        // totalPages={totalPages}
                        // pageChange={pageChange}
                        // pageSizeChange={pageSizeChange}
                        onCellValueChanged: onCellValueChanged, fulfillUpload: fulfillUpload }) })] })) })));
};
export default JobSeekerAddProfile;
