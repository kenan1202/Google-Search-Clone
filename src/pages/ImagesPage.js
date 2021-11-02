import { useContext, useEffect } from "react";
import { ResultsContext } from "../contexts/ResultsContext";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../useFetch";

const ImagesPage = () => {
    const { results, loading, getData, searchWord } = useContext(ResultsContext);
    const { pathname } = useLocation();

    console.log('Images Page');

    useFetch(getData, pathname, searchWord);

    if(loading) return <Loading></Loading>

    return (
        <div className = "grid grid-cols-3 sm:grid-cols-1">
            {results?.image_results?.map(({image, link}, index) => (
                <div key = {index} className = "m-4 flex flex-col">
                    <img src = {image.src} className = 'object-cover' alt = {image.alt}></img>
                    <a href = {link.href} className = "text-blue-700 break-words hover:underline" target = "_blank" rel = "noreferrer">{`${link.title.substring(0,100)}...`}</a> 
                </div>
            ))}
        </div>
    )
}

export default ImagesPage
