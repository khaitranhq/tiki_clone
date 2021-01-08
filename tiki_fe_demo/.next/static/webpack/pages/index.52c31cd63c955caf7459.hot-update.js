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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "flaticon-".concat(category.icon),
          style: {
            marginRight: 10,
            fontSize: 20
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, key, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsInRpdGxlIiwiaWNvbiIsIk5hdmlnYXRpb24iLCJvcGVuU3ViQ2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjYXRlZ29yeSIsImtleSIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFLDRCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGlCLEVBS2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxpQixFQVNqQjtBQUNFRCxPQUFLLEVBQUUsd0JBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUaUIsRUFhakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBYmlCLEVBaUJqQjtBQUNFRCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqQmlCLEVBcUJqQjtBQUNFRCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJCaUIsRUF5QmpCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpCaUIsRUE2QmpCO0FBQ0VELE9BQUssRUFBRSw0QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdCaUIsRUFpQ2pCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpDaUIsRUFxQ2pCO0FBQ0VELE9BQUssRUFBRSxvQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJDaUIsRUF5Q2pCO0FBQ0VELE9BQUssRUFBRSx1QkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXpDaUIsRUE2Q2pCO0FBQ0VELE9BQUssRUFBRSxxQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQTdDaUIsRUFpRGpCO0FBQ0VELE9BQUssRUFBRSxzQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpEaUIsRUFxRGpCO0FBQ0VELE9BQUssRUFBRSxjQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBckRpQixFQXlEakI7QUFDRUQsT0FBSyxFQUFFLHNCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekRpQixFQTZEakI7QUFDRUQsT0FBSyxFQUFFLDZCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBN0RpQixDQUFuQjs7QUFtRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsY0FDR04sVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsMEJBQ2QscUVBQUMscURBQUQ7QUFFRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxTQUFWO0FBQXFCQyxpQkFBTyxFQUFFLE1BQTlCO0FBQXNDQyx1QkFBYSxFQUFFO0FBQXJELFNBRlQ7QUFHRSxtQkFBVyxFQUFFO0FBQUEsaUJBQU1SLGlCQUFpQixFQUF2QjtBQUFBLFNBSGY7QUFBQSxnQ0FLRTtBQUNFLG1CQUFTLHFCQUFjSSxRQUFRLENBQUNOLElBQXZCLENBRFg7QUFFRSxlQUFLLEVBQUU7QUFBRVcsdUJBQVcsRUFBRSxFQUFmO0FBQW1CQyxvQkFBUSxFQUFFO0FBQTdCO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFLHFFQUFDLHFEQUFEO0FBQUssZUFBSyxFQUFFO0FBQUVBLG9CQUFRLEVBQUUsRUFBWjtBQUFnQkgsbUJBQU8sRUFBRSxNQUF6QjtBQUFpQ0ksc0JBQVUsRUFBRTtBQUE3QyxXQUFaO0FBQUEsb0JBQ0dQLFFBQVEsQ0FBQ1A7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUEsU0FDT1EsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBeEJEOztLQUFNTixVO0FBMEJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmMzMWNkNjNjOTU1Y2FmNzQ1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnxJBp4buHbiBUaG/huqFpIC0gTcOheSBUw61uaCBC4bqjbmcnLFxuICAgIGljb246ICdtb2JpbGUtcGhvbmUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ8SQaeG7h24gVOG7rSAtIMSQaeG7h24gTOG6oW5oJyxcbiAgICBpY29uOiAnbW9uaXRvcidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUGjhu6UgS2nhu4duIC0gVGhp4bq/dCBC4buLIFPhu5EnLFxuICAgIGljb246ICdoZWFkcGhvbmVzJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdMYXB0b3AgLSBUaGnhur90IGLhu4sgSVQnLFxuICAgIGljb246ICdsYXB0b3AnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ03DoXkg4bqibmggLSBRdWF5IFBoaW0nLFxuICAgIGljb246ICdwaG90by1jYW1lcmEnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ8SQaeG7h24gR2lhIEThu6VuZycsXG4gICAgaWNvbjogJ3dhc2hpbmctbWFjaGluZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTmjDoCBD4butYSDEkOG7nWkgU+G7kW5nJyxcbiAgICBpY29uOiAncG90J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIw6BuZyBUacOqdSBEw7luZyAtIFRo4buxYyBQaOG6qW0nLFxuICAgIGljb246ICdzcHJheSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnxJDhu5MgY2jGoWksIE3hurkgJiBCw6knLFxuICAgIGljb246ICdmZWVkaW5nLWJvdHRsZSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTMOgbSDEkOG6uXAgLSBT4bupYyBLaOG7j2UnLFxuICAgIGljb246ICdsaXBzdGljaydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGjhu51pIHRyYW5nIC0gUGjhu6Uga2nhu4duJyxcbiAgICBpY29uOiAndHNoaXJ0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaOG7gyBUaGFvIC0gRMOjIG5nb+G6oWknLFxuICAgIGljb246ICdiYXNrZXRiYWxsLWJhbGwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1hlIE3DoXksIMOUIHTDtCwgWGUgxJDhuqFwJyxcbiAgICBpY29uOiAnbW90b3JiaWtlJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIw6BuZyBxdeG7kWMgdOG6vycsXG4gICAgaWNvbjogJ2ludGVybmV0J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTw6FjaCwgVlBQICYgUXXDoCBU4bq3bmcnLFxuICAgIGljb246ICdib29rJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdWb3VjaGVyIC0gROG7i2NoIFbhu6UgLSBUaOG6uyBDw6BvJyxcbiAgICBpY29uOiAnZ2lmdC12b3VjaGVyJ1xuICB9XG5dO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvcGVuU3ViQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGtleSkgPT4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnNXB4IDBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gb3BlblN1YkNhdGVnb3JpZXMoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGF0aWNvbi0ke2NhdGVnb3J5Lmljb259YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCwgZm9udFNpemU6IDIwIH19XG4gICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICA8Qm94IHN0eWxlPXt7IGZvbnRTaXplOiAxMywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9