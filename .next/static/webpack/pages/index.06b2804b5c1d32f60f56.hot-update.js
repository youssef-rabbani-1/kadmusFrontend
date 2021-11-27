self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomePage/cards.js":
/*!**************************************!*\
  !*** ./components/HomePage/cards.js ***!
  \**************************************/
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
/* harmony import */ var _descriptionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../descriptionCard */ "./components/descriptionCard.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\yelrabbani\\Downloads\\kadmusFrontend\\components\\HomePage\\cards.js",
    _s = $RefreshSig$();





var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background["default"]
    },
    card: {
      padding: "0 36px",
      marginBottom: "60px"
    }
  };
});
var items = [{
  title: "News",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Guides",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  title: "Consultations",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}];
function App() {
  _s();

  var _this = this;

  var _useStyles = useStyles(),
      root = _useStyles.root,
      card = _useStyles.card;

  var mobile = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)("(max-width:600px)");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    className: root,
    children: items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        className: card,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_descriptionCard__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this)
      }, item.title, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(App, "Tm2++NYY1R2tHAbSi7RodmZyRGo=", false, function () {
  return [useStyles, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUGFnZS9jYXJkcy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJjYXJkIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFwcCIsIm1vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLFVBQWQ7QUFEYixLQURpQztBQUl2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxRQURMO0FBRUpDLGtCQUFZLEVBQUU7QUFGVjtBQUppQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVNBLElBQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLE9BQUssRUFBRSxNQURUO0FBRUVDLGFBQVcsRUFDVDtBQUhKLENBRFksRUFNWjtBQUNFRCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFXLEVBQ1Q7QUFISixDQU5ZLEVBV1o7QUFDRUQsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUNUO0FBSEosQ0FYWSxDQUFkO0FBaUJlLFNBQVNDLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUFBLG1CQUNMYixTQUFTLEVBREo7QUFBQSxNQUNwQkcsSUFEb0IsY0FDcEJBLElBRG9CO0FBQUEsTUFDZEksSUFEYyxjQUNkQSxJQURjOztBQUU1QixNQUFNTyxNQUFNLEdBQUdDLHdFQUFhLENBQUMsbUJBQUQsQ0FBNUI7QUFFQSxzQkFDRSw4REFBQyxtREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsYUFBUyxFQUFFWixJQUxiO0FBQUEsY0FPR08sS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLDBCQUNFLDhEQUFDLG1EQUFEO0FBQU0sWUFBSSxNQUFWO0FBQTRCLGlCQUFTLEVBQUVWLElBQXZDO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBaUIsY0FBSSxFQUFFVTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBZ0JBLElBQUksQ0FBQ04sS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FOQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0FyQnVCRSxHO1VBQ0NiLFMsRUFDUmUsb0U7OztLQUZPRixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2YjI4MDRiNWMxZDMyZjYwZjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSBcIi4uL2Rlc2NyaXB0aW9uQ2FyZFwiXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCJcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICB9LFxuICBjYXJkOiB7XG4gICAgcGFkZGluZzogXCIwIDM2cHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxuICB9LFxufSkpXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk5ld3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHdWlkZXNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb25zdWx0YXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICB9LFxuXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHJvb3QsIGNhcmQgfSA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IG1vYmlsZSA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOjYwMHB4KVwiKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNvbnRhaW5lclxuICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgY2xhc3NOYW1lPXtyb290fVxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPXtjYXJkfT5cbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbkNhcmQgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvR3JpZD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==