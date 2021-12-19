import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export const notifyToast = (msg,type) => {
    switch (type) {
        case "success":
            toast.success(msg, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true
            });
            break;
        case "error":
            toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            break;
        case "warning":
            toast.warn(msg, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            break;
        default:
            toast(msg, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
    }
}
