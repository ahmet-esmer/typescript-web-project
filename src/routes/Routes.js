"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../controllers/UserController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.contactController = new UserController_1.UserController();
    }
    Routes.prototype.routes = function (app) {
        app.route('/').get(this.contactController.index);
        app.route('/user').get(this.contactController.getUsers);
        app.route('/user').post(this.contactController.addNewUser);
        //app.route('/user').put(this.contactController.addNewUser);
        //app.route('/user').delete(this.contactController.addNewUser);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map