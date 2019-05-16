import { Request, Response } from 'express';
import {UserModel} from "../models/UserModel";


export class UserController {


    public index(req: Request, res: Response) {

        res.render('index' , {
            title: "Ana Sayfa",
            serverSideMessage: 'TypeScript Server Tarafında çalıştı 1'
        });
    }

    public addNewUser(req: Request, res: Response) {

        res.status(200).send({
            message: 'POST request successfulll!!!!'
        })
    }


    public getUsers (req: Request, res: Response) {

        res.status(200).send({
            message: 'GET request successfulll!!!!'
        })
    }
}