import { Request, Response } from "express";
import BaseController from "./base.controller";
import { NewsRequest, NewsUpdateRequest } from "../models/news";
import NewsService from "../services/news.services";

export default class NewsController extends BaseController {
    async getAll(req: Request, res: Response) {
        const service = new NewsService();
        const result = await service.all();
        return super.dataResult(res, result);
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const service = new NewsService();
        const result = await service.byId({ id });
        return super.dataResult(res, result);
    }

    async create(req: Request, res: Response) {
        const { hat, url, title, image, thumbnail, content } = req.body;
        const service = new NewsService();
        const result = await service.create({ 
            hat,
            url, 
            title, 
            image, 
            thumbnail, 
            content 
        } as NewsRequest);
        return super.dataResult(res, result);
    }

    async edit(req: Request, res: Response) {
        const { id } = req.params;
        const { hat, url, title, image, thumbnail, content } = req.body;
        const service = new NewsService();
        const result = await service.edit({ 
            hat,
            id, 
            url, 
            title, 
            image, 
            thumbnail, 
            content 
        } as NewsUpdateRequest);
        return super.dataResult(res, result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const service = new NewsService();
        const result = await service.delete(id);
        return super.dataResult(res, result);
    }
}
