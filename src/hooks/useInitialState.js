import React, {useState, useEffect} from 'react';


const useInitialState = (API) => {
    const [current, setCurrent] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setCurrent(data);
                setLoading(false);
            });
    }, []);

    return ({current, loading});
}

export default useInitialState;