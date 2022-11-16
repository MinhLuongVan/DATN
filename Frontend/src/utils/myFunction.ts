import {createToast} from 'mosha-vue-toastify';
import "mosha-vue-toastify/dist/style.css";

export function setNotificationToastMessage(content?: string, value?:boolean ) {
    if(value == true) {
        createToast(
            {
                title: 'Success',
                description: content,
            },
            {
                showIcon: true,
                type: "success",
                timeout: 5000,
                hideProgressBar: true,
                transition: "slide",
            }
        );
    } else {
        createToast(
            {
                title: 'Error',
                description: content,
            },
            {
                showIcon: true,
                type: "danger",
                timeout: 5000,
                hideProgressBar: true,
                transition: "slide",
            }
        );
    }
}

export function setNotificationFailedWhenGetData() {
    createToast(
        {
            title: "Error",
            description: 'Data loading failed or access was not available',
        },
        {
            showIcon: true,
            type: "danger",
            timeout: 5000,
            hideProgressBar: true,
            transition: "slide",
        }
    );

}