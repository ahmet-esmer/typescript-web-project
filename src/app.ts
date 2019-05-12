

import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";

import * as path from 'path';



class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();

        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "../views/pages"));

        this.app.use('/static', express.static(path.join(__dirname, 'public')))

        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;