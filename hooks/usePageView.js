import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPageView } from "../store/Gtag";

const usePageView = (title) => {
    const location = useLocation();

    useEffect(() => {
        sendPageView({
            page_title: title,
            page_location: window.location.href,
            page_path: location.pathname
        });
    }, [location]);
    
}

export default usePageView;