"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        res.render('index', {
            title: "Ana Sayfa",
            serverSideMessage: 'TypeScript Server Tarafında çalıştı'
        });
    };
    UserController.prototype.addNewUser = function (req, res) {
        res.status(200).send({
            message: 'POST request successfulll!!!!'
        });
    };
    UserController.prototype.getUsers = function (req, res) {
        res.status(200).send({
            message: 'GET request successfulll!!!!'
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map