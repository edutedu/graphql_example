import {sequelize} from "../models/index.js";
import {join} from 'path';
import {readdirSync} from 'fs';

const dirname = "/home/eduardtira/WebstormProjects/example/migrations";

function getMigrationsFiles(){
    return readdirSync(dirname).filter((file) => file.endsWith('.js')).sort();
}

async function runMigrations(){
    try{
        const migrations = getMigrationsFiles();

        for (const migrationFile of migrations) {
           const { up } = await import(join(dirname, migrationFile))
           if(typeof up === 'function'){
               console.log(`Running migration: ${migrationFile}`);
               await up(sequelize.getQueryInterface(), sequelize);
           }
        }
    }catch (error){
        console.error("Error applying migrations:", error);
    }
}

export default runMigrations;