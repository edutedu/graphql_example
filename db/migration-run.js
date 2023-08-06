import {sequelize} from "../models/index.js";
import {join} from 'path';
import {readdirSync} from 'fs';

const dirname = "/home/eduardtira/WebstormProjects/example/migrations";

console.log(dirname);
function getMigrationsFiles(){
    return readdirSync(dirname).filter((file) => file.endsWith('.js')).sort();
}

async function runMigrations(){
    try{
        const migrations = getMigrationsFiles();

        for (const migrationFile of migrations) {
           const { up } = await import(join(dirname, migrationFile))
            console.log(up);
           if(typeof up === 'function'){
               console.log(`Running migration: ${migrationFile}`);
               await up(sequelize.getQueryInterface(), sequelize);
           }
        }
    }catch (error){
        console.error("Error applying migrations:", error);
    }finally{
        await sequelize.close();
    }
}

export default runMigrations;