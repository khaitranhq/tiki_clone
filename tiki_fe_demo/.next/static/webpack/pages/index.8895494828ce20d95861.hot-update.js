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
  var openSubCategories = function openSubCategories() {
    console.log('open');
  };

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "flaticon-".concat(category.icon),
            style: {
              marginRight: 10,
              fontSize: 20
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            style: {
              fontSize: 13,
              display: 'flex',
              alignItems: 'center'
            },
            children: category.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsIk5hdmlnYXRpb24iLCJvcGVuU3ViQ2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjYXRlZ29yeSIsImtleSIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFLDRCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGlCLEVBS2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxpQixFQVNqQjtBQUNFRCxPQUFLLEVBQUUsd0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUaUIsRUFhakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYmlCLEVBaUJqQjtBQUNFRCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqQmlCLEVBcUJqQjtBQUNFRCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJCaUIsRUF5QmpCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpCaUIsRUE2QmpCO0FBQ0VELE9BQUssRUFBRSw0QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdCaUIsRUFpQ2pCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpDaUIsRUFxQ2pCO0FBQ0VELE9BQUssRUFBRSxvQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJDaUIsRUF5Q2pCO0FBQ0VELE9BQUssRUFBRSx1QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpDaUIsRUE2Q2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdDaUIsRUFpRGpCO0FBQ0VELE9BQUssRUFBRSxzQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpEaUIsRUFxRGpCO0FBQ0VELE9BQUssRUFBRSxjQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckRpQixFQXlEakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekRpQixFQTZEakI7QUFDRUQsT0FBSyxFQUFFLDZCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0RpQixDQUFuQjs7QUFtRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsY0FDR04sVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsMEJBQ2QscUVBQUMscURBQUQ7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxTQUFWO0FBQXFCQyxpQkFBTyxFQUFFLE1BQTlCO0FBQXNDQyx1QkFBYSxFQUFFO0FBQXJELFNBRlQ7QUFHRSxtQkFBVyxFQUFFO0FBQUEsaUJBQU1SLGlCQUFpQixFQUF2QjtBQUFBLFNBSGY7QUFBQSwrQkFLRTtBQUFBLGtDQUNFO0FBQ0UscUJBQVMscUJBQWNJLFFBQVEsQ0FBQ04sSUFBdkIsQ0FEWDtBQUVFLGlCQUFLLEVBQUU7QUFBRVcseUJBQVcsRUFBRSxFQUFmO0FBQW1CQyxzQkFBUSxFQUFFO0FBQTdCO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLHFEQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFFQSxzQkFBUSxFQUFFLEVBQVo7QUFBZ0JILHFCQUFPLEVBQUUsTUFBekI7QUFBaUNJLHdCQUFVLEVBQUU7QUFBN0MsYUFEVDtBQUFBLHNCQUdHUCxRQUFRLENBQUNQO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixTQUNPUSxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0E1QkQ7O0tBQU1OLFU7QUE4QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4OTU0OTQ4MjhjZTIwZDk1ODYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICB7XG4gICAgdGl0bGU6ICfEkGnhu4duIFRob+G6oWkgLSBNw6F5IFTDrW5oIELhuqNuZycsXG4gICAgaWNvbjogJ21vYmlsZS1waG9uZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnxJBp4buHbiBU4butIC0gxJBp4buHbiBM4bqhbmgnLFxuICAgIGljb246ICdtb25pdG9yJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQaOG7pSBLaeG7h24gLSBUaGnhur90IELhu4sgU+G7kScsXG4gICAgaWNvbjogJ2hlYWRwaG9uZXMnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xhcHRvcCAtIFRoaeG6v3QgYuG7iyBJVCcsXG4gICAgaWNvbjogJ2xhcHRvcCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTcOheSDhuqJuaCAtIFF1YXkgUGhpbScsXG4gICAgaWNvbjogJ3Bob3RvLWNhbWVyYSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnxJBp4buHbiBHaWEgROG7pW5nJyxcbiAgICBpY29uOiAnd2FzaGluZy1tYWNoaW5lJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOaMOgIEPhu61hIMSQ4budaSBT4buRbmcnLFxuICAgIGljb246ICdwb3QnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0jDoG5nIFRpw6p1IETDuW5nIC0gVGjhu7FjIFBo4bqpbScsXG4gICAgaWNvbjogJ3NwcmF5J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfEkOG7kyBjaMahaSwgTeG6uSAmIELDqScsXG4gICAgaWNvbjogJ2ZlZWRpbmctYm90dGxlJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdMw6BtIMSQ4bq5cCAtIFPhu6ljIEto4buPZScsXG4gICAgaWNvbjogJ2xpcHN0aWNrJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaOG7nWkgdHJhbmcgLSBQaOG7pSBraeG7h24nLFxuICAgIGljb246ICd0c2hpcnQnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Ro4buDIFRoYW8gLSBEw6Mgbmdv4bqhaScsXG4gICAgaWNvbjogJ2Jhc2tldGJhbGwtYmFsbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnWGUgTcOheSwgw5QgdMO0LCBYZSDEkOG6oXAnLFxuICAgIGljb246ICdtb3RvcmJpa2UnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0jDoG5nIHF14buRYyB04bq/JyxcbiAgICBpY29uOiAnaW50ZXJuZXQnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1PDoWNoLCBWUFAgJiBRdcOgIFThurduZycsXG4gICAgaWNvbjogJ2Jvb2snXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZvdWNoZXIgLSBE4buLY2ggVuG7pSAtIFRo4bq7IEPDoG8nLFxuICAgIGljb246ICdnaWZ0LXZvdWNoZXInXG4gIH1cbl07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG9wZW5TdWJDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICc1cHggMHB4JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBvcGVuU3ViQ2F0ZWdvcmllcygpfVxuICAgICAgICA+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGF0aWNvbi0ke2NhdGVnb3J5Lmljb259YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwLCBmb250U2l6ZTogMjAgfX1cbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==