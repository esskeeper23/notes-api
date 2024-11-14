import { envs } from "./config/envs";
import db from "./data/database";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";







(() => {
    main();
})()


async function main() {


    await db.authenticate()
        .then(() => {
            console.log('Database authenticated')
        })
        .catch(err => {
            console.log(err)
        });


    await db.sync()
        .then(() => {
            console.log('Database synced')
        })
        .catch(err => {
            console.log(err)
        })


    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    })
    .start()
}

