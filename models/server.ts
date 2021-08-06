import express, { Application } from 'express';

import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';



        this.dbConnection()

        //Métodos iniciales
        this.middlewares();

        //Definir mis rutas
        this.routes();
    }


    async dbConnection(){

        try {
            await db.authenticate();
            console.log('Database onLine');

        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {

        //CORS middle
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta publicas
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use(this.apiPath.usuarios, userRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);

        });
    }
}

export default Server;
