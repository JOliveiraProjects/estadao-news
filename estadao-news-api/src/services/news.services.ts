import connectDB from "../config/ormconfig";
import { News } from "../entities/News";
import { NewsGetRequest, NewsRequest, NewsUpdateRequest } from "../models/news";

export default class NewsService {
    private repo = connectDB.getRepository(News);

    async all() {
        return this.repo.find();
    }

    async byId({ id }: NewsGetRequest) {
        const news = await this.repo.findOneBy({ id });
        if (!news) return new Error("News does not exists!!");
        return news;
    }

    async create({ hat, url, title, image, thumbnail, content }: NewsRequest): Promise<News | Error> {
        if (await this.repo.findOneBy({ title })) return new Error("News already exists");
        const news = this.repo.create({ hat, url, title, image, thumbnail, content });
        await this.repo.save(news);
        return news;
    }

    async edit({ id, hat, url, title, image, thumbnail, content }: NewsUpdateRequest) {
        const news = await this.repo.findOneBy({ id });
        if (!news) return new Error("News does not exists!!");
        this.repo.merge(news, { hat, url, title, image, thumbnail, content });
        await this.repo.save(news);
        return news;
    }

    async delete(id: string) {
        if (!(await this.repo.findOneBy({ id }))) return new Error("News does not exists!");
        await this.repo.delete(id);
        return { message: "Deleted successfully" };
    }
}
