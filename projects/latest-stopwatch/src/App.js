"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
function App() {
    const [time, setTime] = (0, react_1.useState)(0);
    const [start, setStart] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        let timeout;
        if (start) {
            timeout = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [start]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { width: "100%" } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { width: "100%", display: "flex", justifyContent: "center" } }, { children: (0, jsx_runtime_1.jsx)("label", { children: time }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { width: "100%", display: "flex", justifyContent: "center" } }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => {
                            setStart(true);
                        } }, { children: "Start" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => {
                            setStart(false);
                        } }, { children: "Pause" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => {
                            setStart(false);
                            setTime(0);
                        } }, { children: "Reset" }))] }))] })));
}
exports.default = App;
