import mongoose from "mongoose";

const connectDatabase = async():Promise<void> => {

    try {

        const connectResult = await mongoose.connect('mongodb://127.0.0.1:27017/pruebas1', {ignoreUndefined: true,});
        console.log(`mongodb connected : ${connectResult.connection.host}`);

    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
    

}

export {connectDatabase}