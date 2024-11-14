import express, { Router } from 'express';


interface Options{
    port?: number;
    routes: Router;
}


export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3100, routes } = options;
        this.port = port;
        this.routes = routes;
    }


    async start() {

        //Middleware
        this.app.use( express.json() );

        // Usar las rutas definidas
        this.app.use( this.routes );

        //escuchar el puerto
        this.app.listen(this.port, () =>{
            console.log(`Server runing on port ${this.port}`);
        })
    }

}