import { apiClient } from "../http-common";
import { contactInfor } from "../types/contactType";
import { ContactModel } from '../model/contactModel';

class ContactService {
    save(data: contactInfor, token: string) {
        return apiClient(token).post("/contact/save",data)
    }
    findAll(data: contactInfor, token: string) {
        return apiClient(token).post("/contact",data)
    }
    findOne(data: ContactModel, token: string) {
        return apiClient(token).post("/contact/find-one",data)
    }
    delete(data: ContactModel, token: string) {
        return apiClient(token).post("/contact/delete",data)
    }
    findByPage(data: any, token: string) {
        return apiClient(token).post("/contact/find-by-page",data)
    }
}
export default new ContactService();