import { apiClient } from "../http-common";
import { contactInfor } from "../types/contactType";
import { ContactModel } from '../model/contactModel';

class ContactService {
    save(data: contactInfor, token: string) {
        return apiClient(token).post("/product",data)
    }
}
export default new ContactService();