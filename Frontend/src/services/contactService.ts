import { apiClient } from "../http-common";
import { contactInfor } from "../types/contactType";

class ContactService {
    save(data: contactInfor, token: string) {
        return apiClient(token).post("/contact/save",data)
    }
}
export default new ContactService();