import { Request, Response } from "express";
import NewsService from "../services/news.services";
import { NewsRequest, NewsUpdateRequest } from "../models/news";

export default class NewsController {
    async getAll(req: Request, res: Response) {
        const service = new NewsService();
        const news = await service.all();
        return res.json(news);
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const service = new NewsService();
        const result = await service.byId({ id });
        if (result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
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
        if (result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
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
        if (result instanceof Error) return res.status(400).json(result.message);
        return res.json(result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const service = new NewsService();
        const result = await service.delete(id);
        if (result instanceof Error) return res.status(400).json(result.message);
        return res.status(204).end();
    }
}
