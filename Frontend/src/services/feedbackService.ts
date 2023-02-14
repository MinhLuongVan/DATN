import { apiClient } from "../http-common";
import { FeedBackModel } from "../model/feedbackModel";
import { feedbackInfor } from "../types/feedbackType";

class FeedBackService {
    findAll(data: feedbackInfor, token: string) {
        return apiClient(token).post("/feedback",data)
    }
    save(data: feedbackInfor, token: string) {
        return apiClient(token).post("/feedback/save",data)
    }
    findOne(data: FeedBackModel, token: string) {
        return apiClient(token).post("/feedback/find-one",data)
    }
    update(data: feedbackInfor, token: string) {
        return apiClient(token).post("/feedback/update",data)
    }
    delete(data: FeedBackModel, token: string) {
        return apiClient(token).post("/feedback/delete",data)
    }
}
export default new FeedBackService();