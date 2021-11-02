import { useContext, useEffect } from "react";
import { ResultsContext } from "../contexts/ResultsContext";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../useFetch";

const AllPage = () => {
    const { results, loading, getData, searchWord } = useContext(ResultsContext);
    const { pathname } = useLocation();

    console.log('All Page');

    useFetch(getData, pathname, searchWord);

    if(loading) return <Loading></Loading>

    return (
        <div className = "grid grid-cols-2 sm:grid-cols-1 p-14">
            {results?.results?.map(({title, link}, index) => (
                <div key = {index} className = "m-4 break-words">
                    <p className = "text-gray-500">{link}</p>
                    <a href = {link} className = "text-blue-800" target = "_blank" rel="noreferrer">{title}</a>
                </div>
            ))}
        </div>
    )
}

export default AllPage
