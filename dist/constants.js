export var PageStatus;
(function (PageStatus) {
    PageStatus["SIGNUP"] = "signup";
    PageStatus["OTP"] = "otp";
    PageStatus["TYPE"] = "error";
    PageStatus["FORM"] = "form";
})(PageStatus || (PageStatus = {}));
export var SUCCESS_KEY = "success";
export var WARNING_KEY = "warning";
export var ERROR_KEY = "error";
export var BACK_BTN_TEXT = "Previous";
export var PROCEED_BTN_TEXT = "Next";
export var SKIP_BTN_TEXT = "Skip";
export var FULL_SIZE_GRID = 12;
export var HALF_SIZE_GRID = 6;
export var DASHED_BORDER = "2px dashed blue";
export var BROWSE_FILE_MSG = "Browse File";
export var FILE_SIZE_MSG = "Size: 5MB, png, pdf, jpg.";
export var MONTH_LABEL = "Month";
export var YEAR_LABEL = "Year";
export var CITY_LABEL = "City";
export var COUNTRY_LABEL = "Country";
export var SNACKBAR_ERROR_MSG = "Something went wrong, kindly retry with valid details";
export var FORM_SUBMISSION_SUCCESS = "Details are successfully submitted";
export var IMAGE_UPLOAD_ERROR = "Something went wrong in image upload, please try again";
export var FORM_INVALID_STATUS = "Form is not validated, kindly fill all the required details";
export var SPECIAL_CHAR_ERR_MSG = "cannot have special characters or numbers";
export var ALPHA_ERR_MSG = 'Cannot have special charaters';
export var URL_ERROR_MSG = 'Please Enter proper URL';
export var CONTEST_DETAILS = "991273137863147520";
export var JD_PATCH_FORM = "999548019411533824";
export var CONTEST_ABOUT_EMPLOYER = "991289466351534080";
export var JOB_SEEKER_RESUME = "1018802975069569024";
export var ALL_KEY = "All";
export var COLUMNS_TEXT = "Columns";
export var emailValidation = function (email) {
    var regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");
    return !(!email || regex.test(email) === false);
};
export var specialCharValidation = function (input) {
    var regex = /^[a-zA-Z \b]+$/;
    return !input || !regex.test(input) === false;
};
export var pincodeValidation = function (pincode) {
    var regex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
    return !pincode || !regex.test(pincode) === false;
};
export var ifscValidation = function (ifsc) {
    var regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return !ifsc || !regex.test(ifsc) === false;
};
export var accountNumValidation = function (accNo) {
    var regex = /^\d{9,18}$/;
    return !accNo || !regex.test(accNo) === false;
};
export var aadharNumValidation = function (aadhar) {
    var regex = /^[2-9]{1}[0-9]{11}$/;
    return !aadhar || !regex.test(aadhar) === false;
};
export var panNumValidation = function (pan) {
    var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    return !pan || !regex.test(pan) === false;
};
export var gstNumValidation = function (gst) {
    var regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[1-9A-Z]{1}/;
    return !gst || !regex.test(gst) === false;
};
export var tanNumValidation = function (tan) {
    var regex = /[A-Z]{4}[0-9]{5}[A-Z]{1}/;
    return !tan || !regex.test(tan) === false;
};
export var NUMBER_ONLY_REGEX = /^[0-9\b]+$/;
export var LETTERS_ONLY_REGEX = /^[a-zA-Z \b]+$/;
export var ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9 \b]+$/;
export var URL_REGEX = new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?");
export var CONFIRMATION_BOX_BUTTON = ["Yes", "Cancel"];
export var GET_CONTEST_DETAILS = "/form-runtime/v1/form-data?filter=id:";
export var PATCH_CONTEST_DETAILS = "/form-runtime/v1/form-data";
export var CONTESTSETTINGS_EDIT = "999548019411533824";
export var GET_CONTEST_SETTINGS = "/form-runtime/v1/form-data?filter=formData.contestId:";
export var JOB_SEEKER_TABS = [
    { name: "Add Profile", status: "" },
    { name: "Duplication Field", status: "" },
    { name: "Incomplete Uploads", status: "" },
    { name: "Vetting", status: "" },
    { name: "Manage Profiles", status: "" },
];
export var TEMPLATE_BUTTON = [
    { iconFileName: "Group.png", title: "Import From Job Seeker Collections" },
    {
        iconFileName: "Download.png",
        title: "Download the Pre Dupliation Template",
    },
    {
        iconFileName: "Download.png",
        title: "Download the Full Dupliation Template",
    },
    { iconFileName: "upload.png", title: "Upload Template" },
];
export var WorkStatusType;
(function (WorkStatusType) {
    WorkStatusType["FRESHER"] = "Fresh Graduate";
    WorkStatusType["JOBLESS"] = "Not-Working";
    WorkStatusType["FULL_TIME"] = "Working";
})(WorkStatusType || (WorkStatusType = {}));
export var JOB_SEEKER_STATUS = [
    { iconFileName: "Group 3474", title: "Bounty", data: " $1500" },
    { iconFileName: "Group 99", title: "Matching Profiles", data: " 20+" },
    { iconFileName: "Group 108", title: "Total Quota", data: " 320" },
    { iconFileName: "Group 3369", title: "Days Left", data: " 29" },
];
export var PAGE_SIZE_ARRAY = [10, 15, 20, 25, 50, 100];