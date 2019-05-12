// /src/routes/Routes.ts
import {Request, Response} from "express";

// /src/routes/Routes.ts
import { UserController } from "../controllers/UserController";




export class Routes {

    public contactController: UserController = new UserController();


    public routes(app): void {


        app.route('/').get(this.contactController.index);
        app.route('/user').get(this.contactController.getUsers)
        app.route('/user').post(this.contactController.addNewUser);

        //app.route('/user').put(this.contactController.addNewUser);
        //app.route('/user').delete(this.contactController.addNewUser);

    }
}