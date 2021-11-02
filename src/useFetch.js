import { useEffect } from "react";

const useFetch = (getData, pathname, searchTerm) => {

    useEffect(() => {
        getData(pathname);
    }, [searchTerm, pathname]);

};

export default useFetch;