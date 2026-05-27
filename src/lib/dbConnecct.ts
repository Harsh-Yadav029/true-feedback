import mongoose from "mongoose";
type ConnectionObject = {
    isConnnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if(connection.isConnnected){
        console.log('Already connected to the database');
        return;
    }


    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnnected = db.connections[0].readyState;

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);

        process.exit(1);
    }
}