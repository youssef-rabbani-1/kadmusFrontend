self["webpackHotUpdate_N_E"]("pages/guides",{

/***/ "./components/GuideCard.js":
/*!*********************************!*\
  !*** ./components/GuideCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\yelrabbani\\Downloads\\kadmusFrontend\\components\\GuideCard.js",
    _s = $RefreshSig$();












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({
  root: {
    maxWidth: 250
  },
  title: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "@supports (-webkit-line-clamp: 3)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "initial",
      display: "-webkit-box",
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical"
    }
  }
});
function App(_ref) {
  _s();

  var guide = _ref.guide;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    as: "/guides/".concat(guide.slug),
    href: "/guides/[id]",
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__.default, {
          title: "img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: guide.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 35
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "h6",
            color: "textPrimary",
            className: classes.title,
            children: guide.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(App, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HdWlkZUNhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsInRpdGxlIiwid2hpdGVTcGFjZSIsInRleHRPdmVyZmxvdyIsIm92ZXJmbG93IiwiZGlzcGxheSIsIkFwcCIsImd1aWRlIiwiY2xhc3NlcyIsInNsdWciLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEcUI7QUFJM0JDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUUsUUFEUDtBQUVMQyxnQkFBWSxFQUFFLFVBRlQ7QUFHTEMsWUFBUSxFQUFFLFFBSEw7QUFLTCx5Q0FBcUM7QUFDbkNBLGNBQVEsRUFBRSxRQUR5QjtBQUVuQ0Qsa0JBQVksRUFBRSxVQUZxQjtBQUduQ0QsZ0JBQVUsRUFBRSxTQUh1QjtBQUluQ0csYUFBTyxFQUFFLGFBSjBCO0FBS25DLDRCQUFzQixHQUxhO0FBTW5DLDRCQUFzQjtBQU5hO0FBTGhDO0FBSm9CLENBQUQsQ0FBNUI7QUFvQmUsU0FBU0MsR0FBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNyQyxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxzQkFDRSw4REFBQyxrREFBRDtBQUFNLE1BQUUsb0JBQWFVLEtBQUssQ0FBQ0UsSUFBbkIsQ0FBUjtBQUFtQyxRQUFJLEVBQUUsY0FBekM7QUFBeUQsWUFBUSxNQUFqRTtBQUFBLDJCQUNFLDhEQUFDLDJEQUFEO0FBQU0sZUFBUyxFQUFFRCxPQUFPLENBQUNULElBQXpCO0FBQUEsNkJBQ0UsOERBQUMscUVBQUQ7QUFBQSxnQ0FDRSw4REFBQyxnRUFBRDtBQUFXLGVBQUssRUFBQyxLQUFqQjtBQUFBLGlDQUF3Qiw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVRLEtBQUssQ0FBQ0c7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBQSxpQ0FDRSw4REFBQyxpRUFBRDtBQUNFLG1CQUFPLEVBQUMsSUFEVjtBQUVFLGlCQUFLLEVBQUMsYUFGUjtBQUdFLHFCQUFTLEVBQUVGLE9BQU8sQ0FBQ1AsS0FIckI7QUFBQSxzQkFLR00sS0FBSyxDQUFDTjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBdkJ1QkssRztVQUNOVCxTOzs7S0FETVMsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ndWlkZXMuZjVmNGYwZmI4NjZjOTNkZjkxMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIlxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIlxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIlxuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAyNTAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcblxuICAgIFwiQHN1cHBvcnRzICgtd2Via2l0LWxpbmUtY2xhbXA6IDMpXCI6IHtcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICB3aGl0ZVNwYWNlOiBcImluaXRpYWxcIixcbiAgICAgIGRpc3BsYXk6IFwiLXdlYmtpdC1ib3hcIixcbiAgICAgIFwiLXdlYmtpdC1saW5lLWNsYW1wXCI6IFwiM1wiLFxuICAgICAgXCItd2Via2l0LWJveC1vcmllbnRcIjogXCJ2ZXJ0aWNhbFwiLFxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBndWlkZSB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICByZXR1cm4gKFxuICAgIDxMaW5rIGFzPXtgL2d1aWRlcy8ke2d1aWRlLnNsdWd9YH0gaHJlZj17XCIvZ3VpZGVzL1tpZF1cIn0gcGFzc0hyZWY+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICA8Q2FyZE1lZGlhIHRpdGxlPVwiaW1nXCI+ezxOZXh0SW1hZ2UgaW1hZ2U9e2d1aWRlLmltYWdlfSAvPn08L0NhcmRNZWRpYT5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z3VpZGUudGl0bGV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgey8qPENhcmRBY3Rpb25zPlxuICAgICAgXG4gICAgICA8L0NhcmRBY3Rpb25zPiovfVxuICAgICAgPC9DYXJkPlxuICAgIDwvTGluaz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==