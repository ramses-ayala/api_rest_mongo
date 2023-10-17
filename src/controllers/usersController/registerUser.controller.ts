import { Request, Response } from "express";

import { Users } from "../../models/User";  

const registerUser = async(req: Request,_res: Response) => {

    const { name, email, password } = req.body;
    const user = new Users({name, email, password});

    try {
        
        const isUserSaved = await user.save();
        console.log('isUserSaved : ', isUserSaved); 


    } catch (error: any) {
        console.log('error: ',error);
    }
}

export {registerUser};