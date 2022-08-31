import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = title + ' • Screenplify';
    }, [title]);

    return false;
}

export default useTitle;