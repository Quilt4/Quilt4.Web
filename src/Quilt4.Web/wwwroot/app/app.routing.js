"use strict";
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: 'backoffice/categories',
    },
    {
        path: 'backoffice/category/:id',
    },
    {
        path: 'backoffice/login',
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map