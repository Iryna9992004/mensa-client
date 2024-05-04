/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/GlobalRedux/features/basketSlice.js":
/*!*************************************************!*\
  !*** ./app/GlobalRedux/features/basketSlice.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: () => (/* binding */ addToBasket),\n/* harmony export */   basketSlice: () => (/* binding */ basketSlice),\n/* harmony export */   calculateAllGoods: () => (/* binding */ calculateAllGoods),\n/* harmony export */   calculateAllSum: () => (/* binding */ calculateAllSum),\n/* harmony export */   decrementQuantity: () => (/* binding */ decrementQuantity),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteFromBasket: () => (/* binding */ deleteFromBasket),\n/* harmony export */   incrementQuantity: () => (/* binding */ incrementQuantity)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ basketSlice,default auto */ \nconst initialState = {\n    basketList: [],\n    totalSum: 0,\n    totalQuantity: 0\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        addToBasket: (state, action)=>{\n            const newItem = action.payload;\n            const existingItem = state.basketList.find((item)=>item.name === newItem.name);\n            if (existingItem) {\n                existingItem.goodQuantity += 1;\n            } else {\n                state.basketList = [\n                    ...state.basketList,\n                    {\n                        ...newItem,\n                        goodQuantity: 1\n                    }\n                ];\n            }\n        },\n        incrementQuantity: (state, action)=>{\n            const newItem = action.payload;\n            state.basketList = state.basketList.map((item)=>item.name === newItem.name ? {\n                    ...item,\n                    goodQuantity: item.goodQuantity + 1\n                } : item);\n        },\n        decrementQuantity: (state, action)=>{\n            const newItem = action.payload;\n            state.basketList = state.basketList.map((item)=>item.name === newItem.name && newItem.goodQuantity >= 2 ? {\n                    ...item,\n                    goodQuantity: item.goodQuantity - 1\n                } : item);\n        },\n        calculateAllSum: (state)=>{\n            state.totalSum = state.basketList.reduce((sum, item)=>sum + item.price * item.goodQuantity, 0);\n        },\n        calculateAllGoods: (state)=>{\n            state.totalQuantity = state.basketList.reduce((items, item)=>items + item.goodQuantity, 0);\n        },\n        deleteFromBasket: (state, action)=>{\n            const deleteItem = action.payload;\n            const updatedBasketList = state.basketList.filter((item)=>item.name !== deleteItem.name);\n            return {\n                ...state,\n                basketList: updatedBasketList\n            };\n        }\n    }\n});\nconst { addToBasket, incrementQuantity, decrementQuantity, calculateAllSum, calculateAllGoods, deleteFromBasket } = basketSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvR2xvYmFsUmVkdXgvZmVhdHVyZXMvYmFza2V0U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3lFQUUrQztBQUUvQyxNQUFNQyxlQUFhO0lBQ2ZDLFlBQVcsRUFBRTtJQUNiQyxVQUFTO0lBQ1RDLGVBQWM7QUFDbEI7QUFFTyxNQUFNQyxjQUFZTCw2REFBV0EsQ0FBQztJQUNqQ00sTUFBSztJQUNMTDtJQUNBTSxVQUFTO1FBQ0xDLGFBQWEsQ0FBQ0MsT0FBTUM7WUFDaEIsTUFBTUMsVUFBUUQsT0FBT0UsT0FBTztZQUM1QixNQUFNQyxlQUFhSixNQUFNUCxVQUFVLENBQUNZLElBQUksQ0FBQ0MsQ0FBQUEsT0FBTUEsS0FBS1QsSUFBSSxLQUFHSyxRQUFRTCxJQUFJO1lBQ3ZFLElBQUdPLGNBQWE7Z0JBQ1pBLGFBQWFHLFlBQVksSUFBRTtZQUMvQixPQUNJO2dCQUNBUCxNQUFNUCxVQUFVLEdBQUM7dUJBQUlPLE1BQU1QLFVBQVU7b0JBQUM7d0JBQUMsR0FBR1MsT0FBTzt3QkFBQ0ssY0FBYTtvQkFBQztpQkFBRTtZQUN0RTtRQUNKO1FBQ0FDLG1CQUFtQixDQUFDUixPQUFNQztZQUN0QixNQUFNQyxVQUFRRCxPQUFPRSxPQUFPO1lBQzVCSCxNQUFNUCxVQUFVLEdBQUdPLE1BQU1QLFVBQVUsQ0FBQ2dCLEdBQUcsQ0FBQ0gsQ0FBQUEsT0FDcENBLEtBQUtULElBQUksS0FBS0ssUUFBUUwsSUFBSSxHQUFHO29CQUFFLEdBQUdTLElBQUk7b0JBQUVDLGNBQWNELEtBQUtDLFlBQVksR0FBRztnQkFBRSxJQUFJRDtRQUV4RjtRQUNBSSxtQkFBbUIsQ0FBQ1YsT0FBTUM7WUFDdEIsTUFBTUMsVUFBUUQsT0FBT0UsT0FBTztZQUM1QkgsTUFBTVAsVUFBVSxHQUFHTyxNQUFNUCxVQUFVLENBQUNnQixHQUFHLENBQUNILENBQUFBLE9BQ3BDQSxLQUFLVCxJQUFJLEtBQUtLLFFBQVFMLElBQUksSUFBSUssUUFBUUssWUFBWSxJQUFFLElBQUk7b0JBQUUsR0FBR0QsSUFBSTtvQkFBRUMsY0FBY0QsS0FBS0MsWUFBWSxHQUFHO2dCQUFFLElBQUlEO1FBRW5IO1FBQ0FLLGlCQUFpQixDQUFDWDtZQUFTQSxNQUFNTixRQUFRLEdBQUNNLE1BQU1QLFVBQVUsQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDQyxLQUFJUCxPQUFPTyxNQUFJUCxLQUFLUSxLQUFLLEdBQUNSLEtBQUtDLFlBQVksRUFBQztRQUFFO1FBQ2pIUSxtQkFBbUIsQ0FBQ2Y7WUFBU0EsTUFBTUwsYUFBYSxHQUFDSyxNQUFNUCxVQUFVLENBQUNtQixNQUFNLENBQUMsQ0FBQ0ksT0FBTVYsT0FBT1UsUUFBTVYsS0FBS0MsWUFBWSxFQUFDO1FBQUU7UUFDakhVLGtCQUFtQixDQUFDakIsT0FBT0M7WUFDdkIsTUFBTWlCLGFBQWFqQixPQUFPRSxPQUFPO1lBQ2pDLE1BQU1nQixvQkFBb0JuQixNQUFNUCxVQUFVLENBQUMyQixNQUFNLENBQUNkLENBQUFBLE9BQVFBLEtBQUtULElBQUksS0FBS3FCLFdBQVdyQixJQUFJO1lBQ3ZGLE9BQU87Z0JBQUUsR0FBR0csS0FBSztnQkFBRVAsWUFBWTBCO1lBQWtCO1FBQ3JEO0lBQ0o7QUFDSixHQUFFO0FBRUssTUFBTSxFQUFDcEIsV0FBVyxFQUFDUyxpQkFBaUIsRUFBQ0UsaUJBQWlCLEVBQUNDLGVBQWUsRUFBQ0ksaUJBQWlCLEVBQUNFLGdCQUFnQixFQUFDLEdBQUNyQixZQUFZeUIsT0FBTyxDQUFDO0FBQ3RJLGlFQUFlekIsWUFBWTBCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnNhLy4vYXBwL0dsb2JhbFJlZHV4L2ZlYXR1cmVzL2Jhc2tldFNsaWNlLmpzPzJjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGJhc2tldExpc3Q6W10sXHJcbiAgICB0b3RhbFN1bTowLFxyXG4gICAgdG90YWxRdWFudGl0eTowLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2U9Y3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTonYmFza2V0JyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICBhZGRUb0Jhc2tldDooKHN0YXRlLGFjdGlvbik9PntcclxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbT1hY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtPXN0YXRlLmJhc2tldExpc3QuZmluZChpdGVtPT5pdGVtLm5hbWU9PT1uZXdJdGVtLm5hbWUpXHJcbiAgICAgICAgICAgIGlmKGV4aXN0aW5nSXRlbSl7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0l0ZW0uZ29vZFF1YW50aXR5Kz0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNrZXRMaXN0PVsuLi5zdGF0ZS5iYXNrZXRMaXN0LHsuLi5uZXdJdGVtLGdvb2RRdWFudGl0eToxfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGluY3JlbWVudFF1YW50aXR5Oigoc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtPWFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXNrZXRMaXN0ID0gc3RhdGUuYmFza2V0TGlzdC5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBuZXdJdGVtLm5hbWUgPyB7IC4uLml0ZW0sIGdvb2RRdWFudGl0eTogaXRlbS5nb29kUXVhbnRpdHkgKyAxIH0gOiBpdGVtXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGVjcmVtZW50UXVhbnRpdHk6KChzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW09YWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhc2tldExpc3QgPSBzdGF0ZS5iYXNrZXRMaXN0Lm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPT09IG5ld0l0ZW0ubmFtZSAmJiBuZXdJdGVtLmdvb2RRdWFudGl0eT49MiA/IHsgLi4uaXRlbSwgZ29vZFF1YW50aXR5OiBpdGVtLmdvb2RRdWFudGl0eSAtIDEgfSA6IGl0ZW1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYWxjdWxhdGVBbGxTdW06KChzdGF0ZSk9PntzdGF0ZS50b3RhbFN1bT1zdGF0ZS5iYXNrZXRMaXN0LnJlZHVjZSgoc3VtLGl0ZW0pPT5zdW0raXRlbS5wcmljZSppdGVtLmdvb2RRdWFudGl0eSwwKX0pLFxyXG4gICAgICAgIGNhbGN1bGF0ZUFsbEdvb2RzOigoc3RhdGUpPT57c3RhdGUudG90YWxRdWFudGl0eT1zdGF0ZS5iYXNrZXRMaXN0LnJlZHVjZSgoaXRlbXMsaXRlbSk9Pml0ZW1zK2l0ZW0uZ29vZFF1YW50aXR5LDApfSksXHJcbiAgICAgICAgZGVsZXRlRnJvbUJhc2tldDogKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEJhc2tldExpc3QgPSBzdGF0ZS5iYXNrZXRMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSAhPT0gZGVsZXRlSXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJhc2tldExpc3Q6IHVwZGF0ZWRCYXNrZXRMaXN0IH07XHJcbiAgICAgICAgfSksXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge2FkZFRvQmFza2V0LGluY3JlbWVudFF1YW50aXR5LGRlY3JlbWVudFF1YW50aXR5LGNhbGN1bGF0ZUFsbFN1bSxjYWxjdWxhdGVBbGxHb29kcyxkZWxldGVGcm9tQmFza2V0fT1iYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImJhc2tldExpc3QiLCJ0b3RhbFN1bSIsInRvdGFsUXVhbnRpdHkiLCJiYXNrZXRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJpdGVtIiwiZ29vZFF1YW50aXR5IiwiaW5jcmVtZW50UXVhbnRpdHkiLCJtYXAiLCJkZWNyZW1lbnRRdWFudGl0eSIsImNhbGN1bGF0ZUFsbFN1bSIsInJlZHVjZSIsInN1bSIsInByaWNlIiwiY2FsY3VsYXRlQWxsR29vZHMiLCJpdGVtcyIsImRlbGV0ZUZyb21CYXNrZXQiLCJkZWxldGVJdGVtIiwidXBkYXRlZEJhc2tldExpc3QiLCJmaWx0ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/GlobalRedux/features/basketSlice.js\n");

/***/ }),

/***/ "./app/GlobalRedux/features/counterSlice.js":
/*!**************************************************!*\
  !*** ./app/GlobalRedux/features/counterSlice.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   counterSlice: () => (/* binding */ counterSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   increment: () => (/* binding */ increment)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ counterSlice,default auto */ \nconst initialState = {\n    value: 0\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            state.value += 1;\n        }\n    }\n});\nconst { increment } = counterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvR2xvYmFsUmVkdXgvZmVhdHVyZXMvY291bnRlclNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7MEVBRTRDO0FBRTVDLE1BQU1DLGVBQWE7SUFDZkMsT0FBTTtBQUNWO0FBQ08sTUFBTUMsZUFBYUgsNkRBQVdBLENBQUM7SUFDbENJLE1BQUs7SUFDTEg7SUFDQUksVUFBUztRQUNMQyxXQUFXQyxDQUFBQTtZQUFRQSxNQUFNTCxLQUFLLElBQUU7UUFBQztJQUNyQztBQUNKLEdBQUU7QUFFSyxNQUFNLEVBQUNJLFNBQVMsRUFBQyxHQUFDSCxhQUFhSyxPQUFPLENBQUM7QUFDOUMsaUVBQWVMLGFBQWFNLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnNhLy4vYXBwL0dsb2JhbFJlZHV4L2ZlYXR1cmVzL2NvdW50ZXJTbGljZS5qcz8xMjZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7Y3JlYXRlU2xpY2V9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgdmFsdWU6MFxyXG59XHJcbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2U9Y3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTonY291bnRlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgaW5jcmVtZW50OihzdGF0ZT0+e3N0YXRlLnZhbHVlKz0xfSlcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7aW5jcmVtZW50fT1jb3VudGVyU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJpbmNyZW1lbnQiLCJzdGF0ZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/GlobalRedux/features/counterSlice.js\n");

/***/ }),

/***/ "./app/GlobalRedux/rootReducer.js":
/*!****************************************!*\
  !*** ./app/GlobalRedux/rootReducer.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rootReducer: () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/counterSlice */ \"./app/GlobalRedux/features/counterSlice.js\");\n/* harmony import */ var _features_basketSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/basketSlice */ \"./app/GlobalRedux/features/basketSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__, _features_basketSlice__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__, _features_basketSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ rootReducer auto */ \n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    counter: _features_counterSlice__WEBPACK_IMPORTED_MODULE_1__.counterSlice.reducer,\n    basket: _features_basketSlice__WEBPACK_IMPORTED_MODULE_2__.basketSlice.reducer\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvR2xvYmFsUmVkdXgvcm9vdFJlZHVjZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztpRUFFbUQ7QUFDSTtBQUNMO0FBRWxELE1BQU1HLGNBQVlILGlFQUFlQSxDQUFDO0lBQzlCSSxTQUFRSCxnRUFBWUEsQ0FBQ0ksT0FBTztJQUM1QkMsUUFBT0osOERBQVdBLENBQUNHLE9BQU87QUFDOUI7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW5zYS8uL2FwcC9HbG9iYWxSZWR1eC9yb290UmVkdWNlci5qcz9iMGIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjb3VudGVyU2xpY2UgfSBmcm9tICcuL2ZlYXR1cmVzL2NvdW50ZXJTbGljZSc7XHJcbmltcG9ydCB7YmFza2V0U2xpY2V9IGZyb20gJy4vZmVhdHVyZXMvYmFza2V0U2xpY2UnXHJcblxyXG5jb25zdCByb290UmVkdWNlcj1jb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcjpjb3VudGVyU2xpY2UucmVkdWNlcixcclxuICAgIGJhc2tldDpiYXNrZXRTbGljZS5yZWR1Y2VyLFxyXG59KVxyXG5cclxuZXhwb3J0IHtyb290UmVkdWNlcn0iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiY291bnRlclNsaWNlIiwiYmFza2V0U2xpY2UiLCJyb290UmVkdWNlciIsImNvdW50ZXIiLCJyZWR1Y2VyIiwiYmFza2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/GlobalRedux/rootReducer.js\n");

/***/ }),

/***/ "./app/GlobalRedux/store.js":
/*!**********************************!*\
  !*** ./app/GlobalRedux/store.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wrapper: () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ \"./app/GlobalRedux/rootReducer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _rootReducer__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _rootReducer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ wrapper auto */ \n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_2__.rootReducer\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvR2xvYmFsUmVkdXgvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7NkRBQ2tEO0FBQ0M7QUFDUDtBQUU1QyxNQUFNRyxZQUFZLElBQU1ILGdFQUFjQSxDQUFDO1FBQ3JDSSxTQUFTRixxREFBV0E7SUFDdEI7QUFFTyxNQUFNRyxVQUFVSixpRUFBYUEsQ0FBQ0UsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnNhLy4vYXBwL0dsb2JhbFJlZHV4L3N0b3JlLmpzP2YxN2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwicm9vdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJyZWR1Y2VyIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/GlobalRedux/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_GlobalRedux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/GlobalRedux/store */ \"./app/GlobalRedux/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_GlobalRedux_store__WEBPACK_IMPORTED_MODULE_2__]);\n_app_GlobalRedux_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gr\\\\Desktop\\\\projects\\\\mensa\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app_GlobalRedux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFRixpRUFBZUgsMkRBQU9BLENBQUNJLFNBQVMsQ0FBQ0gsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnNhLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vYXBwL0dsb2JhbFJlZHV4L3N0b3JlJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKSJdLCJuYW1lcyI6WyJ3cmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();