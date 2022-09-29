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
import axios from 'axios';
export var getFormData = function (formId, id, recordId, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "form-runtime/v1/form-data?formId=").concat(formId).concat(id ? '&filter=id:' + id : '').concat(page ? '&page=' + page : '').concat(size ? '&size=' + size : '').concat(recordId ? '&filter=formData.recordId:' + recordId : ''), { headers: { Authorization: "Bearer ".concat(sessionStorage.getItem('react-token')) } }).catch(function (error) {
                console.log(error);
            })];
    });
}); };
export var postFormData = function (bodyPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.post("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "form-runtime/v1/form-data"), bodyPayload, { headers: { Authorization: "Bearer ".concat(sessionStorage.getItem('react-token')) } }).catch(function (error) {
                console.log(error);
            })];
    });
}); };
export var getFormModeler = function (formId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "form-modeler/v1/forms/").concat(formId), { headers: { Authorization: "Bearer ".concat(sessionStorage.getItem('react-token')) } })
                .catch(function (error) {
                console.log(error);
            })];
    });
}); };
export var UploadFiles = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        formData = new FormData();
        formData.append("file", body.files[0]);
        formData.append("documentPath", body.documentPath);
        formData.append("documentName", body.documentName);
        return [2 /*return*/, axios
                .post("".concat(process.env.REACT_APP_MAIN_SERVER_URL ||
                "https://api.dev.hiringhood.com/", "dms/v1/documents"), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': "Bearer ".concat(sessionStorage.getItem('react-token'))
                },
                params: {
                    documentTypeId: body.documentTypeId
                }
            })];
    });
}); };
export var createJobSeekerProfile = function (bodyPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.post("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seeker?profileLogId=").concat(bodyPayload.profileLogId), bodyPayload.profileData, {
                headers: {
                    Authorization: "Bearer ".concat(sessionStorage.getItem('react-token'))
                }
            })];
    });
}); };
export var updateJobSeekerProfile = function (bodyPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.patch("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile/").concat(bodyPayload.profileId), bodyPayload.profileData, {
                headers: {
                    Authorization: "Bearer ".concat(sessionStorage.getItem('react-token'))
                }
            })];
    });
}); };
export var getJobSeekerProfile = function (profileId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile/").concat(profileId), {
                headers: {
                    Authorization: "Bearer ".concat(sessionStorage.getItem('react-token'))
                }
            })];
    });
}); };
export var getCityList = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios.get("https://gist.githubusercontent.com/palimadra/133517e2dca16f31e41af82419d6a50f/raw/bf9d1a603b8edabcdcfdefbdeeafd76f1469da1d/city-list-india")];
    });
}); };
