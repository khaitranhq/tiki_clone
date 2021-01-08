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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "flaticon-".concat(category.icon),
          style: {
            marginRight: 10,
            fontSize: 20
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsIk5hdmlnYXRpb24iLCJtYXAiLCJjYXRlZ29yeSIsImtleSIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFLDRCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGlCLEVBS2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxpQixFQVNqQjtBQUNFRCxPQUFLLEVBQUUsd0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUaUIsRUFhakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYmlCLEVBaUJqQjtBQUNFRCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqQmlCLEVBcUJqQjtBQUNFRCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJCaUIsRUF5QmpCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpCaUIsRUE2QmpCO0FBQ0VELE9BQUssRUFBRSw0QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdCaUIsRUFpQ2pCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpDaUIsRUFxQ2pCO0FBQ0VELE9BQUssRUFBRSxvQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJDaUIsRUF5Q2pCO0FBQ0VELE9BQUssRUFBRSx1QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpDaUIsRUE2Q2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdDaUIsRUFpRGpCO0FBQ0VELE9BQUssRUFBRSxzQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpEaUIsRUFxRGpCO0FBQ0VELE9BQUssRUFBRSxjQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckRpQixFQXlEakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekRpQixFQTZEakI7QUFDRUQsT0FBSyxFQUFFLDZCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0RpQixDQUFuQjs7QUFtRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixzQkFDRSxxRUFBQyxxREFBRDtBQUFBLGNBQ0dILFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBV0MsR0FBWDtBQUFBLDBCQUNkLHFFQUFDLHFEQUFEO0FBRUUsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsU0FBVjtBQUFxQkMsaUJBQU8sRUFBRSxNQUE5QjtBQUFzQ0MsdUJBQWEsRUFBRTtBQUFyRCxTQUZUO0FBQUEsZ0NBSUU7QUFDRSxtQkFBUyxxQkFBY0osUUFBUSxDQUFDSCxJQUF2QixDQURYO0FBRUUsZUFBSyxFQUFFO0FBQUVRLHVCQUFXLEVBQUUsRUFBZjtBQUFtQkMsb0JBQVEsRUFBRTtBQUE3QjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFRRSxxRUFBQyxxREFBRDtBQUFLLGVBQUssRUFBRTtBQUFFQSxvQkFBUSxFQUFFLEVBQVo7QUFBZ0JILG1CQUFPLEVBQUUsTUFBekI7QUFBaUNJLHNCQUFVLEVBQUU7QUFBN0MsV0FBWjtBQUFBLG9CQUNHUCxRQUFRLENBQUNKO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBLFNBQ09LLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQW5CRDs7S0FBTUgsVTtBQXFCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzMyNjIzMjlkYzhjODgzZjRiZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ8SQaeG7h24gVGhv4bqhaSAtIE3DoXkgVMOtbmggQuG6o25nJyxcbiAgICBpY29uOiAnbW9iaWxlLXBob25lJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfEkGnhu4duIFThu60gLSDEkGnhu4duIEzhuqFuaCcsXG4gICAgaWNvbjogJ21vbml0b3InXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Bo4bulIEtp4buHbiAtIFRoaeG6v3QgQuG7iyBT4buRJyxcbiAgICBpY29uOiAnaGVhZHBob25lcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTGFwdG9wIC0gVGhp4bq/dCBi4buLIElUJyxcbiAgICBpY29uOiAnbGFwdG9wJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNw6F5IOG6om5oIC0gUXVheSBQaGltJyxcbiAgICBpY29uOiAncGhvdG8tY2FtZXJhJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfEkGnhu4duIEdpYSBE4bulbmcnLFxuICAgIGljb246ICd3YXNoaW5nLW1hY2hpbmUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ05ow6AgQ+G7rWEgxJDhu51pIFPhu5FuZycsXG4gICAgaWNvbjogJ3BvdCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSMOgbmcgVGnDqnUgRMO5bmcgLSBUaOG7sWMgUGjhuqltJyxcbiAgICBpY29uOiAnc3ByYXknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ8SQ4buTIGNoxqFpLCBN4bq5ICYgQsOpJyxcbiAgICBpY29uOiAnZmVlZGluZy1ib3R0bGUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0zDoG0gxJDhurlwIC0gU+G7qWMgS2jhu49lJyxcbiAgICBpY29uOiAnbGlwc3RpY2snXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Ro4budaSB0cmFuZyAtIFBo4bulIGtp4buHbicsXG4gICAgaWNvbjogJ3RzaGlydCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGjhu4MgVGhhbyAtIETDoyBuZ2/huqFpJyxcbiAgICBpY29uOiAnYmFza2V0YmFsbC1iYWxsJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdYZSBNw6F5LCDDlCB0w7QsIFhlIMSQ4bqhcCcsXG4gICAgaWNvbjogJ21vdG9yYmlrZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSMOgbmcgcXXhu5FjIHThur8nLFxuICAgIGljb246ICdpbnRlcm5ldCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU8OhY2gsIFZQUCAmIFF1w6AgVOG6t25nJyxcbiAgICBpY29uOiAnYm9vaydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVm91Y2hlciAtIEThu4tjaCBW4bulIC0gVGjhursgQ8OgbycsXG4gICAgaWNvbjogJ2dpZnQtdm91Y2hlcidcbiAgfVxuXTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICc1cHggMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsYXRpY29uLSR7Y2F0ZWdvcnkuaWNvbn1gfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwLCBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZm9udFNpemU6IDEzLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAge2NhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=