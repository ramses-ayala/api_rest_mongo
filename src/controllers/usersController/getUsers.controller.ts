import { Request, Response } from "express";

import { Users } from "../../models/User";

const getUsers = async(_req: Request, res: Response) => {

    try {
        
        const users = await Users.find();
        res.status(200).json({'data': users});

    } catch (error: any) {
        res.status(500).json({'error': error});
    }
}

export {getUsers};