"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var organization_component_1 = require('./organization.component');
var shared_module_1 = require("../shared/shared.module");
var organization_routing_module_1 = require("./organization-routing.module");
var OrganizationModule = (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        core_1.NgModule({
            imports: [
                organization_routing_module_1.OrganizationRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                organization_component_1.OrganizationComponent
            ],
            exports: [
                organization_component_1.OrganizationComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], OrganizationModule);
    return OrganizationModule;
}());
exports.OrganizationModule = OrganizationModule;
//# sourceMappingURL=organization.module.js.map