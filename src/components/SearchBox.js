import { useContext, useState, useEffect} from "react";
import { useDebounce } from "use-debounce/lib";
import { ResultsContext } from "../contexts/ResultsContext";
import { useLocation } from "react-router-dom";



const SearchBox = () => {
    const {setSearchWord} = useContext(ResultsContext);
    const [word, setWord] = useState('');
    const [value] = useDebounce(word, 2000);
    const { pathname } = useLocation();
    
    console.log(pathname);

    useEffect(() => {
        setSearchWord(value);
    }, [value, pathname])

    return (
        <div className = "flex justify-between bg-white text-gray-800 shadow-md rounded-lg">
            <input type = "text" value = {word} onChange = {(e) => setWord(e.target.value)} className = "bg-transparent w-full h-full outline-none p-4 pl-2 sm:p-2" placeholder = "Search something..."></input>
            <button type = "button" className = {`mr-2 text-xl ${word ? 'block' : 'hidden'}`} onClick = {() => setWord('')}>X</button>
        </div>
    )
}

export default SearchBox;
