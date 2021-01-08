webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/navigation.js":
/*!***************************************!*\
  !*** ./components/home/navigation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/leo/tiki_clone/tiki_fe/components/home/navigation.js",
    _this = undefined;



var categories = [{
  title: 'Điện Thoại - Máy Tính Bảng',
  icon: 'mobile-phone'
}, {
  title: 'Điện Tử - Điện Lạnh',
  icon: 'monitor'
}, {
  title: 'Phụ Kiện - Thiết Bị Số',
  icon: 'headphones'
}, {
  title: 'Laptop - Thiết bị IT',
  icon: 'laptop'
}, {
  title: 'Máy Ảnh - Quay Phim',
  icon: 'photo-camera'
}, {
  title: 'Điện Gia Dụng',
  icon: 'washing-machine'
}, {
  title: 'Nhà Cửa Đời Sống',
  icon: 'pot'
}, {
  title: 'Hàng Tiêu Dùng - Thực Phẩm',
  icon: 'spray'
}, {
  title: 'Đồ chơi, Mẹ & Bé',
  icon: 'feeding-bottle'
}, {
  title: 'Làm Đẹp - Sức Khỏe',
  icon: 'lipstick'
}, {
  title: 'Thời trang - Phụ kiện',
  icon: 'tshirt'
}, {
  title: 'Thể Thao - Dã ngoại',
  icon: 'basketball-ball'
}, {
  title: 'Xe Máy, Ô tô, Xe Đạp',
  icon: 'motorbike'
}, {
  title: 'Hàng quốc tế',
  icon: 'internet'
}, {
  title: 'Sách, VPP & Quà Tặng',
  icon: 'book'
}, {
  title: 'Voucher - Dịch Vụ - Thẻ Cào',
  icon: 'gift-voucher'
}];

var Navigation = function Navigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    children: categories.map(function (category, key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        style: {
          margin: '5px 0px',
          display: 'flex',
          flexDirection: 'row'
        },
        onMouseOver: function onMouseOver() {
          return openSubCategories();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "flaticon-".concat(category.icon),
          style: {
            marginRight: 10,
            fontSize: 20
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          style: {
            fontSize: 13,
            display: 'flex',
            alignItems: 'center'
          },
          children: category.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsIk5hdmlnYXRpb24iLCJtYXAiLCJjYXRlZ29yeSIsImtleSIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3BlblN1YkNhdGVnb3JpZXMiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxPQUFLLEVBQUUsNEJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEaUIsRUFLakI7QUFDRUQsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGlCLEVBU2pCO0FBQ0VELE9BQUssRUFBRSx3QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRpQixFQWFqQjtBQUNFRCxPQUFLLEVBQUUsc0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FiaUIsRUFpQmpCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpCaUIsRUFxQmpCO0FBQ0VELE9BQUssRUFBRSxlQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckJpQixFQXlCakI7QUFDRUQsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekJpQixFQTZCakI7QUFDRUQsT0FBSyxFQUFFLDRCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0JpQixFQWlDakI7QUFDRUQsT0FBSyxFQUFFLGtCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakNpQixFQXFDakI7QUFDRUQsT0FBSyxFQUFFLG9CQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckNpQixFQXlDakI7QUFDRUQsT0FBSyxFQUFFLHVCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekNpQixFQTZDakI7QUFDRUQsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0NpQixFQWlEakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakRpQixFQXFEakI7QUFDRUQsT0FBSyxFQUFFLGNBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FyRGlCLEVBeURqQjtBQUNFRCxPQUFLLEVBQUUsc0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0F6RGlCLEVBNkRqQjtBQUNFRCxPQUFLLEVBQUUsNkJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0E3RGlCLENBQW5COztBQW1FQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsY0FDR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsMEJBQ2QscUVBQUMscURBQUQ7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxTQUFWO0FBQXFCQyxpQkFBTyxFQUFFLE1BQTlCO0FBQXNDQyx1QkFBYSxFQUFFO0FBQXJELFNBRlQ7QUFHRSxtQkFBVyxFQUFFO0FBQUEsaUJBQU1DLGlCQUFpQixFQUF2QjtBQUFBLFNBSGY7QUFBQSxnQ0FLRTtBQUNFLG1CQUFTLHFCQUFjTCxRQUFRLENBQUNILElBQXZCLENBRFg7QUFFRSxlQUFLLEVBQUU7QUFBRVMsdUJBQVcsRUFBRSxFQUFmO0FBQW1CQyxvQkFBUSxFQUFFO0FBQTdCO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFFO0FBQUVBLG9CQUFRLEVBQUUsRUFBWjtBQUFnQkosbUJBQU8sRUFBRSxNQUF6QjtBQUFpQ0ssc0JBQVUsRUFBRTtBQUE3QyxXQUFaO0FBQUEsb0JBQ0dSLFFBQVEsQ0FBQ0o7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUEsU0FDT0ssR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztLQUFNSCxVO0FBc0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTRjMWZhMjQ0Y2Y0ZGM2ODZkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnxJBp4buHbiBUaG/huqFpIC0gTcOheSBUw61uaCBC4bqjbmcnLFxuICAgIGljb246ICdtb2JpbGUtcGhvbmUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ8SQaeG7h24gVOG7rSAtIMSQaeG7h24gTOG6oW5oJyxcbiAgICBpY29uOiAnbW9uaXRvcidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUGjhu6UgS2nhu4duIC0gVGhp4bq/dCBC4buLIFPhu5EnLFxuICAgIGljb246ICdoZWFkcGhvbmVzJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdMYXB0b3AgLSBUaGnhur90IGLhu4sgSVQnLFxuICAgIGljb246ICdsYXB0b3AnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ03DoXkg4bqibmggLSBRdWF5IFBoaW0nLFxuICAgIGljb246ICdwaG90by1jYW1lcmEnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ8SQaeG7h24gR2lhIEThu6VuZycsXG4gICAgaWNvbjogJ3dhc2hpbmctbWFjaGluZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTmjDoCBD4butYSDEkOG7nWkgU+G7kW5nJyxcbiAgICBpY29uOiAncG90J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIw6BuZyBUacOqdSBEw7luZyAtIFRo4buxYyBQaOG6qW0nLFxuICAgIGljb246ICdzcHJheSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnxJDhu5MgY2jGoWksIE3hurkgJiBCw6knLFxuICAgIGljb246ICdmZWVkaW5nLWJvdHRsZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTMOgbSDEkOG6uXAgLSBT4bupYyBLaOG7j2UnLFxuICAgIGljb246ICdsaXBzdGljaydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGjhu51pIHRyYW5nIC0gUGjhu6Uga2nhu4duJyxcbiAgICBpY29uOiAndHNoaXJ0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaOG7gyBUaGFvIC0gRMOjIG5nb+G6oWknLFxuICAgIGljb246ICdiYXNrZXRiYWxsLWJhbGwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1hlIE3DoXksIMOUIHTDtCwgWGUgxJDhuqFwJyxcbiAgICBpY29uOiAnbW90b3JiaWtlJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIw6BuZyBxdeG7kWMgdOG6vycsXG4gICAgaWNvbjogJ2ludGVybmV0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTw6FjaCwgVlBQICYgUXXDoCBU4bq3bmcnLFxuICAgIGljb246ICdib29rJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdWb3VjaGVyIC0gROG7i2NoIFbhu6UgLSBUaOG6uyBDw6BvJyxcbiAgICBpY29uOiAnZ2lmdC12b3VjaGVyJ1xuICB9XG5dO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBrZXkpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzVweCAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IG9wZW5TdWJDYXRlZ29yaWVzKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxhdGljb24tJHtjYXRlZ29yeS5pY29ufWB9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAsIGZvbnRTaXplOiAyMCB9fVxuICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPEJveCBzdHlsZT17eyBmb250U2l6ZTogMTMsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==