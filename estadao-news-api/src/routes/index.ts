import { Router } from "express";
import NewsController from "../controllers/news.controller";

const routes = Router();

routes
  .route("/news")
  .get(new NewsController().getAll)
  .post(new NewsController().create);

routes
  .route("/news/:id")
  .get(new NewsController().getOne)
  .put(new NewsController().edit)
  .delete(new NewsController().delete);
  
export { routes };
