(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./src/app/customers/customer-card/customer-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-card/customer-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    max-width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.mat-card-avatar {\r\n    background-image: url('/assets/images/benion.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.mat-card-actions {\r\n    display: flex;\r\n}\r\n\r\n.mat-card-actions.flex-spacer {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVyLWNhcmQvY3VzdG9tZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1jYXJkL2N1c3RvbWVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmVuaW9uLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMuZmxleC1zcGFjZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/customers/customer-card/customer-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-card/customer-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Bernard Bemshima Iorver</mat-card-title>\n    <mat-card-subtitle>I Am Also Called #Benion</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"/assets/images/abosh.jpg\">\n  <mat-card-content>\n    <p>Wow Look At Benion's Princessa</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\">LIKE</button>\n    <button mat-button color=\"primary\">DELETE</button>\n    <div class=\"flex-spacer\"></div>\n    <button mat-icon-button><mat-icon>publish</mat-icon></button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/customers/customer-card/customer-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-card/customer-card.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCardComponent", function() { return CustomerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerCardComponent = /** @class */ (function () {
    function CustomerCardComponent() {
    }
    CustomerCardComponent.prototype.ngOnInit = function () {
    };
    CustomerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-card',
            template: __webpack_require__(/*! ./customer-card.component.html */ "./src/app/customers/customer-card/customer-card.component.html"),
            styles: [__webpack_require__(/*! ./customer-card.component.css */ "./src/app/customers/customer-card/customer-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerCardComponent);
    return CustomerCardComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent() {
    }
    CustomerListComponent.prototype.ngOnInit = function () {
    };
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customers/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customers/customer-list/customer-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-new/customer-new.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/customers/customer-new/customer-new.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    width: 600px;\r\n    margin: auto;\r\n}\r\n\r\n.mat-card.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.mat-card.mat-card-actions {\r\n    display: block;\r\n    text-align: right;\r\n}\r\n\r\n.mat-form-field.full-width {\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVyLW5ldy9jdXN0b21lci1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1uZXcvY3VzdG9tZXItbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jYXJkLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbi5tYXQtZm9ybS1maWVsZC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customers/customer-new/customer-new.component.html":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-new/customer-new.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>New Customer</mat-card-title>\n  <mat-card-content>\n    <form>\n      <mat-form-field class=\"full-width\">\n        <input\n          matInput\n          placeholder=\"Email\"\n          [formControl]=\"emailFormControl\"\n        />\n        <mat-hint align=\"end\">Hint: email@domain.com</mat-hint>\n        <mat-error\n          align=\"end\"\n          *ngIf=\"\n            emailFormControl.hasError('email') &&\n            !emailFormControl.hasError('required')\n          \"\n        >\n          Please Enter A Valid Email\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"First\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last\" />\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <textarea matInput placeholder=\"Address\"></textarea>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <span matPrefix>+234</span>\n        <input matInput placeholder=\"Phone\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Fax\" />\n        <mat-icon matSuffix>phone</mat-icon>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"openRepDialog()\">OPTION</button>\n    <button mat-raised-button color=\"primary\" (click)=\"openUndoSnackBar()\">SAVE</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/customers/customer-new/customer-new.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customers/customer-new/customer-new.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNewComponent", function() { return CustomerNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rep-dialog/rep-dialog.component */ "./src/app/customers/rep-dialog/rep-dialog.component.ts");





var CustomerNewComponent = /** @class */ (function () {
    function CustomerNewComponent(dialog, snackbar) {
        this.dialog = dialog;
        this.snackbar = snackbar;
    }
    CustomerNewComponent.prototype.ngOnInit = function () {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
        ]);
    };
    CustomerNewComponent.prototype.openUndoSnackBar = function () {
        var snackbarRef = this.snackbar.open('Customer Saved', 'UNDO', {
            horizontalPosition: 'end'
        });
        snackbarRef.onAction().subscribe(function () {
            alert('Undo That Save');
        });
    };
    CustomerNewComponent.prototype.openRepDialog = function () {
        var dialogRef = this.dialog.open(_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RepDialogComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            alert('User Choose' + ' ' + result);
        });
    };
    CustomerNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-new',
            template: __webpack_require__(/*! ./customer-new.component.html */ "./src/app/customers/customer-new/customer-new.component.html"),
            styles: [__webpack_require__(/*! ./customer-new.component.css */ "./src/app/customers/customer-new/customer-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CustomerNewComponent);
    return CustomerNewComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-new/customer-new.component */ "./src/app/customers/customer-new/customer-new.component.ts");
/* harmony import */ var _customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-card/customer-card.component */ "./src/app/customers/customer-card/customer-card.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"]
    },
    {
        path: 'info',
        component: _customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_2__["CustomerCardComponent"]
    },
    {
        path: 'new',
        component: _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_1__["CustomerNewComponent"]
    }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-card/customer-card.component */ "./src/app/customers/customer-card/customer-card.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-new/customer-new.component */ "./src/app/customers/customer-new/customer-new.component.ts");
/* harmony import */ var _rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rep-dialog/rep-dialog.component */ "./src/app/customers/rep-dialog/rep-dialog.component.ts");







// Angulaar Material



var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"], _customer_card_customer_card_component__WEBPACK_IMPORTED_MODULE_6__["CustomerCardComponent"], _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_8__["CustomerNewComponent"], _rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_9__["RepDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                // Angular Material
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            entryComponents: [_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_9__["RepDialogComponent"]]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/rep-dialog/rep-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customers/rep-dialog/rep-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9yZXAtZGlhbG9nL3JlcC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/rep-dialog/rep-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customers/rep-dialog/rep-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select An Option</h1>\n<div mat-dialog-content>\n  <mat-radio-group [(ngModel)]=\"rep\">\n    <mat-radio-button value=\"Benion\">Benion</mat-radio-button>\n    <mat-radio-button value=\"Abosh\">Abosh</mat-radio-button>\n  </mat-radio-group>\n</div>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" [mat-dialog-close]=\"rep\">SELECT</button>\n</div>"

/***/ }),

/***/ "./src/app/customers/rep-dialog/rep-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customers/rep-dialog/rep-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: RepDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepDialogComponent", function() { return RepDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RepDialogComponent = /** @class */ (function () {
    function RepDialogComponent() {
    }
    RepDialogComponent.prototype.ngOnInit = function () {
    };
    RepDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rep-dialog',
            template: __webpack_require__(/*! ./rep-dialog.component.html */ "./src/app/customers/rep-dialog/rep-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rep-dialog.component.css */ "./src/app/customers/rep-dialog/rep-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RepDialogComponent);
    return RepDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map