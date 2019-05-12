"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var Routes_1 = require("./routes/Routes");
var path = require("path");
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new Routes_1.Routes();
        this.app = express();
        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "../views/pages"));
        this.app.use('/static', express.static(path.join(__dirname, 'public')));
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map