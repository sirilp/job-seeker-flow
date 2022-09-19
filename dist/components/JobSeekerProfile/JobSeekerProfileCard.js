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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerProfileStatus from "./JobSeekerProfileStatus";
import { getContestDetails } from "../../services/ContestService";
var JobSeekerProfileCard = function () {
    var _a = React.useState(""), userId = _a[0], setUserId = _a[1];
    var _b = React.useState({}), contestData = _b[0], setContestData = _b[1];
    var _c = React.useState("actively-hiring"), tagImage = _c[0], setTagImage = _c[1];
    var _d = React.useState("most-wanted"), badgeImage = _d[0], setBadgeImage = _d[1];
    var searchContestDeatils = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getContestDetails(contestId)];
                case 1:
                    response = _b.sent();
                    setContestData((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data[0].formData);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        searchContestDeatils("1004705555594629120");
    }, [userId]);
    var navigate = useNavigate();
    var contestDetails = {
        id: "1004705555594629120",
        employmentType: (contestData === null || contestData === void 0 ? void 0 : contestData.cardTaglines) || "fulltime",
        jobTitle: (contestData === null || contestData === void 0 ? void 0 : contestData.position) || "shsjsjs",
        cashReward: "\u20B9 ".concat(contestData === null || contestData === void 0 ? void 0 : contestData.bounty) || "30000",
        company: "Accenture",
        experience: "".concat((contestData === null || contestData === void 0 ? void 0 : contestData.experience) || 2, " to ").concat((contestData === null || contestData === void 0 ? void 0 : contestData.experience1) || 4, " yrs"),
        tools: (contestData === null || contestData === void 0 ? void 0 : contestData.technicalSkills) || "java",
        noticePeriod: (contestData === null || contestData === void 0 ? void 0 : contestData.requiredNoticePeriod) || "5",
        locations: (contestData === null || contestData === void 0 ? void 0 : contestData.country) || "india",
        interviewDays: "".concat(contestData === null || contestData === void 0 ? void 0 : contestData.dateTime, " + ").concat(contestData === null || contestData === void 0 ? void 0 : contestData.selectEndDate, " "),
        positions: "",
        ctc: "".concat(contestData === null || contestData === void 0 ? void 0 : contestData.budgetCtc2, " to ").concat(contestData === null || contestData === void 0 ? void 0 : contestData.budgetCtc, " ").concat(contestData === null || contestData === void 0 ? void 0 : contestData.denomination),
        skills: contestData === null || contestData === void 0 ? void 0 : contestData.skills,
        degree: contestData === null || contestData === void 0 ? void 0 : contestData.qualifications,
        tags: contestData === null || contestData === void 0 ? void 0 : contestData.tags,
        tag: tagImage,
        rewards: {},
        badge: badgeImage,
        contestUrl: "",
        iconStatus: "",
        bonus: "2%",
        profilesMatched: " 24 profiles matched",
        quota: "50 profiles",
        buttonText: (contestData === null || contestData === void 0 ? void 0 : contestData.buttonText) || "Begin Hunt",
        buttonEnabled: true,
        iconsToShow: [
            "visit",
            "shares",
            "bookmarked",
            "not-interested",
            "questions",
            "post-your-query",
        ],
    };
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx(JobSeekerProfileStatus, { contestDetails: contestDetails }) }) }));
};
export default JobSeekerProfileCard;
