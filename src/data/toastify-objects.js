import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyNoUrl = () =>
  toast.warn("Please enter a URL for having an SEO Audit", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const notifyInvalidUrl = () =>
  toast.warn("Please enter a valid URL for having an SEO Audit", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
