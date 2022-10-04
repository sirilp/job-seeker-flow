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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box } from "@mui/material";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import { statusFilterContestLinkedJobsekeers, consentStatusFilterContestLinkedJobsekeers, getAggregateData, } from "../../services/JobSeekerService";
import moment from "moment";
import { makeStyles } from "@mui/styles";
var useStyles = makeStyles(function () { return ({
    deleteIcon: { color: "#4D6CD9", margin: "10px" },
    actions1: { fontSize: "15px !important" },
    bookmarkIcon: { color: "#4D6CD9" },
}); });
var Vetting = function (props) {
    var classes = useStyles();
    var contestId = props.contestId;
    var gridRef = useRef();
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = React.useState(0), pageNo = _c[0], setPageNo = _c[1];
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(0), totalPages = _e[0], setTotalPages = _e[1];
    var _f = React.useState([]), rowData = _f[0], setRowData = _f[1];
    var _g = useState("JOB_SEEKER_APPLIED"), selectedButtonValue = _g[0], setSelectedButtonValue = _g[1];
    var _h = React.useState(1), selectedButtonId = _h[0], setSelectedButtonId = _h[1];
    var _j = React.useState(false), columnsListOpen = _j[0], setColumnsListOpen = _j[1];
    var _k = React.useState(true), floatingFilter = _k[0], setFloatingFilter = _k[1];
    var label = { inputProps: { "aria-label": "Checkbox demo" } };
    var _l = useState({
        submitted: 0,
        consent: 0,
    }), agCount = _l[0], setAgCount = _l[1];
    useEffect(function () {
        getTableRowData(pageNo, pageSize, contestId, selectedButtonValue);
        handleAggregateData(contestId);
    }, [pageNo, pageSize, contestId, selectedButtonValue]);
    var setSelectedButton = function (id, filterValue) {
        console.log(filterValue, id);
        setSelectedButtonId(id);
        setSelectedButtonValue(filterValue);
        getTableRowData(0, 10, contestId, filterValue);
    };
    var handleAggregateData = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, result1, result2, result3, result4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAggregateData(contestId)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    if (response.data.success) {
                        console.log(response.data.success);
                        result1 = response.data.data.filter(function (data) { return data.status === "JOB_SEEKER_APPLIED"; });
                        result2 = response.data.data.filter(function (data) { return data.status === "JOB_SEEKER_CONSENT_PASS"; });
                        result3 = response.data.data.filter(function (data) { return data.status === "JOB_SEEKEER_CONSENT_PENDING"; });
                        result4 = response.data.data.filter(function (data) { return data.status === "JOB_SEEKER_CONSENT_FAIL"; });
                        setAgCount({
                            submitted: (result1.length > 0 && result1[0].count) || 0,
                            consentPass: (result2.length > 0 && result2[0].count) || 0,
                            consentPending: (result3.length > 0 && result3[0].count) || 0,
                            consentFail: (result4.length > 0 && result4[0].count) || 0,
                        });
                    }
                    else {
                        setAgCount({
                            submitted: 0,
                            consent: 0,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var getTableRowData = function (pageNo, pageSize, contestId, selectedButtonValue) { return __awaiter(void 0, void 0, void 0, function () {
        var response, mapData, result, response, mapData, result;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    if (!(selectedButtonValue === "JOB_SEEKER_APPLIED")) return [3 /*break*/, 2];
                    return [4 /*yield*/, statusFilterContestLinkedJobsekeers(contestId, selectedButtonValue, pageNo, pageSize)];
                case 1:
                    response = _o.sent();
                    if (response.data.success) {
                        mapData = response.data.data.content;
                        result = mapData.map(function (item, index) {
                            item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");
                            var Data = __assign(__assign(__assign({}, item), item.matchedProfileLogsList[0]), item.matchedProfilesList[0]);
                            return Data;
                        });
                        setRowData(result);
                        setTotalPages((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.totalPages);
                        setPageNo((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.pageNo);
                        setPageSize((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.pageSize);
                    }
                    else {
                        console.log("false");
                        setRowData([]);
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, consentStatusFilterContestLinkedJobsekeers(contestId, selectedButtonValue, pageNo, pageSize)];
                case 3:
                    response = _o.sent();
                    if (response.data.success) {
                        mapData = response.data.data.content;
                        result = mapData.map(function (item, index) {
                            item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");
                            var Data = __assign(__assign(__assign({}, item), item.matchedProfileLogsList[0]), item.matchedProfilesList[0]);
                            return Data;
                        });
                        setRowData(result);
                        setTotalPages((_h = (_g = response === null || response === void 0 ? void 0 : response.data) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.totalPages);
                        setPageNo((_k = (_j = response === null || response === void 0 ? void 0 : response.data) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.pageNo);
                        setPageSize((_m = (_l = response === null || response === void 0 ? void 0 : response.data) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.pageSize);
                    }
                    else {
                        console.log("false");
                        setRowData([]);
                    }
                    _o.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var autoGroupColumnDef = useMemo(function () {
        return {
            headerName: "Group",
            minWidth: 170,
            field: "athlete",
            valueGetter: function (params) {
                if (params.node.group) {
                    return params.node.key;
                }
                else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: {
                checkbox: true,
            },
        };
    }, []);
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
    var setColumnsDisplay = function (columnList) {
        var newColumnDefs = columnDefs.map(function (colDef) {
            var columnReference = columnList.find(function (col) { return col.headerName === colDef.headerName; });
            if (columnReference) {
                return __assign(__assign({}, colDef), { hide: !columnReference.hide });
            }
        });
        onUpdateColumns(newColumnDefs);
    };
    var toogleFloatingFilter = function (toggleOption) {
        setFloatingFilter(toggleOption);
        var newColumnDefs = columnDefs.map(function (colDef) {
            return __assign(__assign({}, colDef), { floatingFilter: toggleOption });
        });
        onUpdateColumns(newColumnDefs);
    };
    useEffect(function () {
        // call api with new pagenumber
        getTableRowData(pageNo, pageSize, contestId, selectedButtonValue);
    }, [pageNo, pageSize, contestId]);
    var onUpdateColumns = useCallback(function (data) {
        if (gridRef === null || gridRef === void 0 ? void 0 : gridRef.current)
            gridRef.current.api.setColumnDefs(data);
    }, []);
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var pageChange = function (pageNumber) {
        setPageNo(pageNumber - 1);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageSize(pageSizeChanged);
    };
    return (_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: [_jsx(Typography, __assign({ fontSize: 30 }, { children: "Profiles" })), _jsx(StepCount, { StepCountList: [
                            {
                                label: "Submitted",
                                tooltip: "Submitted",
                                id: 1,
                                value: "JOB_SEEKER_APPLIED",
                            },
                            {
                                label: "Consent Pass",
                                tooltip: "Consent Pass",
                                id: 2,
                                value: "JOB_SEEKEER_CONSENT_PASS",
                            },
                            {
                                label: "Consent Pending",
                                tooltip: "Consent Pending",
                                id: 3,
                                value: "JOB_SEEKEER_CONSENT_PENDING",
                            },
                            {
                                label: "Consent Fail",
                                tooltip: "Consent Fail",
                                id: 4,
                                value: "JOB_SEEKEER_CONSENT_FAIL",
                            },
                        ], countsList: [
                            { _id: 1, count: agCount.submitted },
                            { _id: 2, count: agCount.consentPass },
                            { _id: 3, count: agCount.consentPending },
                            { _id: 4, count: agCount.consentFail },
                        ], setSelectedButton: setSelectedButton, selectedButton: selectedButtonId })] })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block", className: classes.actions1 }, { children: [_jsx(Checkbox, {}), " ", selectedRows.length, " Selected", _jsx(DeleteOutlineIcon, { className: classes.deleteIcon }), _jsx(BookmarkBorderIcon, { className: classes.bookmarkIcon })] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.map(function (cl) {
                    return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: rowData, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange }) }))] })));
};
export default Vetting;
function item(item) {
    throw new Error("Function not implemented.");
}
