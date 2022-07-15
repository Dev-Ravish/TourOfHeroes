import { useState, useEffect } from "react";

const useFetch = (url) => {
        const [heroes, setHeroes] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);
        useEffect(()=>{
            fetch(url)               
                .then(res=>{
                    if(!res.ok){
                        throw Error('unable to fetch data from that resource');
                    }
                    return res.json();
                })
                .then(data=>{
                    setHeroes(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    setIsPending(false);
                    setError(err.message);
                })
        
    }, [url]);

    return {heroes, isPending, error};
}
 
export default useFetch;