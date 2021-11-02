import { createContext, useState } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = ({children}) => {
    const [results, setResults] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchWord, setSearchWord] = useState('');


    const getData = async(type) => {
        if(searchWord) {

        setLoading(true);

        const res = await fetch(`https://google-search3.p.rapidapi.com/api/v1${type}/q=${searchWord}&num=30`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        });


        const data = await res.json();

        console.log(data);
        console.log(typeof setSearchWord);
        
        setResults(data);
        setLoading(false);
    }
    }

    return (
        <ResultsContext.Provider value = {{ results, loading, getData, searchWord, setSearchWord }}>
            {children}
        </ResultsContext.Provider>
    )
}

