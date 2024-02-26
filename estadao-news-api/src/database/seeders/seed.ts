import { seedNews } from "./noticiasSeed";
import connectDB from "../ormconfig";

async function runSeeders() {
  try {
    await connectDB.initialize();
    console.log("Data Source has been initialized!");

    await seedNews(connectDB);

    await connectDB.destroy();
    console.log("Data Source has been closed!");
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
    process.exit(1);
  }
}

runSeeders();
