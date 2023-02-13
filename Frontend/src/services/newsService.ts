import { apiClient } from "../http-common";
import { NewsModel } from "../model/newsModel";
import { newsInfor } from "../types/newsType";

class NewsService {
    save(data: newsInfor, token: string) {
        return apiClient(token).post("/news/save",data)
    }
    findAll(data: newsInfor, token: string) {
        return apiClient(token).post("/news",data)
    }
    findOne(data: NewsModel, token: string) {
        return apiClient(token).post("/news/find-one",data)
    }
    update(data: newsInfor, token: string) {
        return apiClient(token).post("/news/update",data)
    }
    delete(data: NewsModel, token: string) {
        return apiClient(token).post("/news/delete",data)
    }
}
export default new NewsService();