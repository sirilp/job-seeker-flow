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
import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import StoreService from "./services/StoreService";
import JobSeekerBase from "./pages/JobSeekerBase";
import "./App.css";
var store = StoreService;
function App() {
    return (_jsx(Provider, __assign({ store: store }, { children: _jsx(JobSeekerBase, {}) })));
}
export default App;
