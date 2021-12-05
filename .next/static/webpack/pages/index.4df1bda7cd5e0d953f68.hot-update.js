self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
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
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\yelrabbani\\Downloads\\kadmusFrontend\\components\\ArticleCard.js",
    _s = $RefreshSig$();













var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return {
    root: {
      maxWidth: 800,
      height: "250px"
    },
    container: {
      height: "100%"
    },
    content: {
      height: "75%"
    },
    actions: {
      //height: "25%",
      display: "flex",
      justifyContent: "flex-end"
    },
    title: {
      marginBottom: "12px"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    }
  };
});
function App(_ref) {
  _s();

  var article = _ref.article;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
      container: true,
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
        container: true,
        item: true,
        xs: 6,
        direction: "row",
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__.default, {
            title: "img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
              image: article.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
        container: true,
        item: true,
        xs: 6,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          container: true,
          item: true,
          xs: 12,
          className: classes.content,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
              variant: "h5",
              color: "textPrimary",
              className: classes.title,
              children: article.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
          container: true,
          item: true,
          xs: 12,
          className: classes.actions,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__.default, {
            disableSpacing: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              as: "/blog/".concat(article.id),
              href: "/blog/[id]",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
                variant: "outlined",
                color: "primary",
                children: "Read More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXIiLCJjb250ZW50IiwiYWN0aW9ucyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwibWFyZ2luQm90dG9tIiwibWVkaWEiLCJwYWRkaW5nVG9wIiwiQXBwIiwiYXJ0aWNsZSIsImNsYXNzZXMiLCJpbWFnZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLEdBRE47QUFFSkMsWUFBTSxFQUFFO0FBRkosS0FEaUM7QUFLdkNDLGFBQVMsRUFBRTtBQUNURCxZQUFNLEVBQUU7QUFEQyxLQUw0QjtBQVF2Q0UsV0FBTyxFQUFFO0FBQ1BGLFlBQU0sRUFBRTtBQURELEtBUjhCO0FBV3ZDRyxXQUFPLEVBQUU7QUFDUDtBQUNBQyxhQUFPLEVBQUUsTUFGRjtBQUdQQyxvQkFBYyxFQUFFO0FBSFQsS0FYOEI7QUFnQnZDQyxTQUFLLEVBQUU7QUFDTEMsa0JBQVksRUFBRTtBQURULEtBaEJnQztBQW1CdkNDLFNBQUssRUFBRTtBQUNMUixZQUFNLEVBQUUsQ0FESDtBQUVMUyxnQkFBVSxFQUFFLFFBRlAsQ0FFaUI7O0FBRmpCO0FBbkJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXlCZSxTQUFTQyxHQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQywyREFBRDtBQUFNLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ2QsSUFBekI7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLEVBQUVjLE9BQU8sQ0FBQ1gsU0FBbkM7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsWUFBSSxNQUFwQjtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBNEIsaUJBQVMsRUFBQyxLQUF0QztBQUE0QyxrQkFBVSxFQUFDLFFBQXZEO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFBLGlDQUNFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxLQUFqQjtBQUFBLG1DQUNFLDhEQUFDLDJDQUFEO0FBQVcsbUJBQUssRUFBRVUsT0FBTyxDQUFDRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSw4REFBQywyREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsWUFBSSxNQUFwQjtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsY0FBSSxNQUFwQjtBQUFxQixZQUFFLEVBQUUsRUFBekI7QUFBNkIsbUJBQVMsRUFBRUQsT0FBTyxDQUFDVixPQUFoRDtBQUFBLGlDQUNFLDhEQUFDLGtFQUFEO0FBQUEsbUNBQ0UsOERBQUMsaUVBQUQ7QUFDRSxxQkFBTyxFQUFDLElBRFY7QUFFRSxtQkFBSyxFQUFDLGFBRlI7QUFHRSx1QkFBUyxFQUFFVSxPQUFPLENBQUNOLEtBSHJCO0FBQUEsd0JBS0dLLE9BQU8sQ0FBQ0w7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFlRSw4REFBQywyREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsY0FBSSxNQUFwQjtBQUFxQixZQUFFLEVBQUUsRUFBekI7QUFBNkIsbUJBQVMsRUFBRU0sT0FBTyxDQUFDVCxPQUFoRDtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQWEsMEJBQWMsTUFBM0I7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFFLGtCQUFXUSxPQUFPLENBQUNHLEVBQW5CLENBQVI7QUFBaUMsa0JBQUksRUFBQyxZQUF0QztBQUFtRCxzQkFBUSxNQUEzRDtBQUFBLHFDQUNFLDhEQUFDLDhEQUFEO0FBQVEsdUJBQU8sRUFBQyxVQUFoQjtBQUEyQixxQkFBSyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDs7R0F6Q3VCSixHO1VBQ05mLFM7OztLQURNZSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkZjFiZGE3Y2Q1ZTBkOTUzZjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIlxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIlxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IFwiMjUwcHhcIixcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGhlaWdodDogXCI3NSVcIixcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIC8vaGVpZ2h0OiBcIjI1JVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiwgLy8gMTY6OVxuICB9LFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IGFydGljbGUgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9IGRpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8Q2FyZE1lZGlhIHRpdGxlPVwiaW1nXCI+XG4gICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2FydGljbGUuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8L0NhcmRNZWRpYT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2FydGljbGUudGl0bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgey8qPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9e1widGV4dFByaW1hcnlcIn0+XG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+Ki99XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYmxvZy8ke2FydGljbGUuaWR9YH0gaHJlZj1cIi9ibG9nL1tpZF1cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYXJkPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9