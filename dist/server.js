"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
var app_1 = require("./app");
var PORT = 3000;
app_1.default.listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map