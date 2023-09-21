import { join, dirname } from "path";
import { readdirSync } from "fs";
import url from "url";

const directoryURL = dirname(import.meta.url).concat("/migrations");
const directoryPath = url.fileURLToPath(directoryURL);

const getMigrationsFiles = async () => {
  return readdirSync(directoryPath).filter((file) => file.endsWith(".js")).sort();
};

export const runMigrations = async () => {
  try {
    const migrations = await getMigrationsFiles();

    for (const migrationFile of migrations) {
      const { up } = await import(join(directoryPath, migrationFile));
      if (typeof up === "function") {
        console.log(`Running migration: ${migrationFile}`);
        await up();
      }
    }
  } catch (error) {
    console.error("Error applying migrate-db:", error);
    throw error;
  }
};
